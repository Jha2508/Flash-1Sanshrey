import React, { useState, useEffect } from 'react'
import './Post.css'
import firebase from '../../firebase';

import { AiFillHeart, AiOutlineClose, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
import { FaBookmark } from 'react-icons/fa'
import Commentviewer from './Commentviewer';
import person from '../../sources/person.jpeg'
import { withRouter } from 'react-router-dom';
const Post = (props) => {
    Array.prototype.remove = function () {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    const [comments, setcomments] = useState([])
    const [commentEntered, setcommentEntered] = useState('')
    const userid = firebase.auth().currentUser;
    const [numberofcomments, setnumberofcomments] = useState(0)
    const [alluserdata, setalluserdata] = useState([]);
    const handlecomment = () => {
        const timest = Date.now()
        const datatobeentered = {
            message: commentEntered,
            uid: userid.uid,
            time: timest
        }

        firebase.firestore().collection('AllPost').doc(props.postId).collection('comments').add(datatobeentered).then(() => {
            alert('comment dana done done!')
            setcommentEntered('')

        })

    }

    useEffect(() => {
        firebase.firestore().collection('AllPost').doc(props.postId).collection('comments').onSnapshot((querySnap) => {
            const newComment = [];
            querySnap.forEach((doc) => {
                newComment.push(doc.data())
            })
            setcomments(newComment)
            setnumberofcomments(newComment.length)
        })
        firebase.firestore().collection('Users').doc(userid.uid).onSnapshot((doc) => { setalluserdata(doc.data()) })

    }, [])
    const savedpost = alluserdata.savedPost;
    const handlesave = () => {
        const cond = savedpost.includes('AllPost/' + props.postId);
        (!cond) ? savedpost.push('AllPost/' + props.postId) : savedpost.remove('AllPost/' + props.postId)
        console.log({
            bio: alluserdata.bio,
            userImg: alluserdata.userImg, name: alluserdata.name, passingYear: alluserdata.passingYear, linkedinUrl: alluserdata.linkedinUrl, phoneNo: alluserdata.phoneNo, uid: alluserdata.uid, savedPost: savedpost
        })
        if (cond)
            alert('Post  Is Unsaved');
        else
            alert('Post Is Saved');
        firebase.firestore().collection('Users').doc(userid.uid).set({
            bio: alluserdata.bio,
            userImg: alluserdata.userImg,
            name: alluserdata.name,
            passingYear: alluserdata.passingYear,
            linkedinUrl: alluserdata.linkedinUrl,
            phoneNo: alluserdata.phoneNo,
            uid: alluserdata.uid,
            savedPost: savedpost
        })




    }
    const [isLiked, setisLiked] = useState(false)


    const [commentOpen, setcommentOpen] = useState(false)
    var date = new Date(props.timestamp);
    const tobepostedate = date.toDateString();
    const tobepostedtime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const likearr = props.like
    const addlike = () => {
        if (userid.uid !== undefined) {
            (likearr.includes(userid.uid)) ? likearr.remove(userid.uid) : likearr.push(userid.uid)


            firebase.firestore().collection("AllPost").doc(`${props.postId}`).update({
                caption: props.caption,
                imageUrl: props.imageUrl,
                name: props.name,
                postId: props.postId,
                timestamp: props.timestamp,
                uid: props.userId,
                userImg: props.userImg,
                likes: likearr
            }).then(alert('liked a post!'))
        }


    }







    return (userid.uid !== undefined && savedpost !== undefined) ? (

        <>

            <div className=" post-container" >

                <div className="card bg-dark text-white">

                    <div className="card bg-dark">

                        <img src={props.imageUrl} className="card-img post-img" alt="..." />

                        <div className="card-img-overlay shadows">
                            <div className="card-title author-title">
                                <div onClick={()=>{ props.history.push(`/profile/${props.userId}`)
                                window.location.reload(false);}} className="postAuthor">
                                <img src={(props.userImg !== '' && props.userImg !== null && props.userImg !== undefined) ? props.userImg : person} alt="..." className="author-img" />
                                <div style={{ flexDirection: 'column' }}>
                                    <h3>{props.name}</h3><br />
                                    <div className='time'>{tobepostedtime + ',' + tobepostedate}</div>
                                </div>
                                </div>
                                {/* put here */}
                                <div className='downloadIconContainer'>
                                    {/* <GiSaveArrow  className='downloadIcon' /> */}
                                    {/* <HiOutlineSave className='downloadIcon' /> */}
                                    <FaBookmark className='downloadIcon' onClick={handlesave}
                                        style={{ color: (savedpost.includes('AllPost/' + props.postId)) ? "blue" : "white" }} />

                                </div>
                            </div>

                        </div>

                    </div>

                    <div><p>{props.caption}</p>

                    </div>

                    <div className="load-comments" style={{ display: commentOpen ? "block" : "none" }}>

                        {comments.map((item, index) => {

                            return (
                                <Commentviewer commentID={item.uid} key={index} text={item.message} />
                            )
                        })}

                    </div>
                    <div className="post-below-content">
                        <div className="post-icons">
                            <AiFillHeart className="post-actions" onClick={() => {
                                setisLiked(!isLiked);
                                addlike()
                            }} style={likearr.includes(userid.uid) ? { color: 'red' } : { color: 'wheat' }} /><div className='numberofcomments'>{props.like.length}</div>
                            <AiOutlineComment className="post-actions dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" onClick={() => setcommentOpen(!commentOpen)} style={{ color: commentOpen ? 'red' : "wheat" }} /><div className='numberofcomments'>{numberofcomments}</div>
                            <AiOutlineFolderView className="post-actions" data-bs-toggle="modal" data-bs-target={'#Modal' + props.timestamp} />
                        </div>
                        <input type="text" value={commentEntered} onChange={(e) => setcommentEntered(e.target.value)} className="form-control comment-input" placeholder="Type your Comment here" />
                        <BiSend className="post-actions" onClick={() => handlecomment()} />
                    </div>
                </div>
            </div>
            {/* _____________________________________________________________________________________________________________________________ */}

            <div className="modal fade bg-dark" id={'Modal' + props.timestamp} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-xl bg-dark">

                    <div className="modal-content bg-dark">

                        <div className="modal-header post-head bg-dark text-white">

                            <h5 id="exampleModalLabel" className="card-title author-title">
                                <img src={props.userImg} alt="..." className="author-img" />{props.name}
                            </h5>
                            <AiOutlineClose className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body bg-dark author-img-modal">
                            <img src={(props.userImg !== '' && props.userImg !== null && props.userImg !== undefined) ? props.userImg : person} className=" post-img-modal" alt="..." />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    ) : (<div>Loading</div>)
}
export default withRouter(Post)