import React, { useEffect, useState } from 'react'
import Comments from './comments'
import {FaHeart,FaComment} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import firebase from '../../firebase'
import {RiDeleteBin4Fill} from 'react-icons/ri'
function Profilepost(props) {
    const [comments, setcomments] = useState([])
    const [keysofcomment, setkeysofcomment] = useState([])
    const handleDel = ()=>{
        console.log('started',keysofcomment)
        for(const element of keysofcomment){
            firebase.firestore().collection('AllPost').doc(props.item.postId).collection('comments').doc(element).delete()
        }
        firebase.storage().ref('posts/'+props.item.postId).delete().then(()=>{
            console.log('photo deleted from storagre')
            firebase.firestore().collection('AllPost').doc(props.item.postId).delete().then(alert('Your Post is successfully deleted!!!'))
       
        })
        
            }
    useEffect(() => {
        firebase.firestore().collection('AllPost').doc(props.item.postId).collection('comments').onSnapshot((querysnap)=>{
            const arrr=[]
            const mew =[]
            querysnap.forEach((doc)=>{
                arrr.push(doc.data())
                mew.push(doc.id)
            })
            setcomments(arrr)
            setkeysofcomment(mew)
        })
    }, [])
    return(<div className='col profilepost content'>
        <img src={props.item.imageUrl} alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target={"#" + props.item.postId} />

        <div className="content-overlay" data-bs-toggle="modal" data-bs-target={"#" + props.item.postId} ></div>
        <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
        <button></button><RiDeleteBin4Fill onClick={handleDel} style ={(props.selfuser)?{display:'block'}:{display:'none'}} className='deletebutton'/>
            <div className='row'>
                <div className='col'>
                    <h1>

                        <FaHeart />
                    </h1>
                    <p>{Object.keys(props.item.likes).length}</p>
                </div>
                <div className='col'>
                    <h1>

                        <FaComment />                                            </h1>
                    <p>{comments.length}</p>
                </div>
            </div>

        </div>
        <div className="modal fade" id={props.item.postId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl bg-dark">
                <div className="modal-content bg-dark">
                    <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" className='closebtn' />


                    <div className='modal-body bg-dark row pppost'>

                        <div className='col-sm-7'>
                            <img src={props.item.imageUrl} className='pppostimagemodal' alt='..' />
                        </div>
                        <div className='col-sm-5 open'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={props.item.userImg} className='rounded-circle profilepicmod' alt='...' />
                                </div>
                                <div className='col-9'>
                                    <div className='profiletitlemodal row'>
                                        {props.item.name}
                                    </div>
                                    <div className='row caption'>
                                        <p> {props.item.caption} </p>
                                    </div>

                                </div>
                            </div>
                            <center>
                                <hr className='captiondivider' /></center>


                            <div className='comments'>
                                {comments.map((iteminn, indexinn) => {
                                    return (
                                        <Comments msg={iteminn.message} uid={iteminn.uid} key={indexinn} />
                                    )
                                })}

                            </div>
                            <div className='col-sm'>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>


    )
}

export default Profilepost
