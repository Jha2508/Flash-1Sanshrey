import React, { useEffect, useState } from 'react'
import './Post.css'
import firebase from '../../firebase.js'
import { AiFillHeart, AiOutlineClose, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
import Commentviewer from './Commentviewer';

const Post = (props) => {
    const [isLiked, setisLiked] = useState(false)
    const [comments, setcomments] = useState([])
    const [commentEntered, setcommentEntered] = useState('')
    const userid = firebase.auth().currentUser;
    const [numberofcomments, setnumberofcomments] = useState(0)

    const handlecomment = () => {
        const timest = Date.now()
        const datatobeentered = {
            commentText: commentEntered,
            uID: userid.uid,
            timestamp: timest
        }

        firebase.firestore().collection('AllPost').doc(props.pID).collection('Comments').add(datatobeentered).then(() => {
            alert('comment dana done done!')
            setcommentEntered('')

        })

    }

    useEffect(() => {
        firebase.firestore().collection('AllPost').doc(props.pID).collection('Comments').onSnapshot((querySnap) => {
            const newComment = [];
            querySnap.forEach((doc) => {
                newComment.push(doc.data())
            })
            setcomments(newComment)
            setnumberofcomments(newComment.length)
        })
    }, [])


    const [commentOpen, setcommentOpen] = useState(false)
    var date = new Date(props.timestamp);
    const tobepostedate = date.toDateString();
    const tobepostedtime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const likearr = props.like
    const likes = Object.keys(props.like).length
    const addlike = () => {
        if (userid.uid !== undefined) {
            likearr.push(userid.uid);
            firebase.firestore().collection("AllPost").doc(`${props.pID}`).update({
                caption: props.caption,
                imageURL: props.image,
                name: props.name,
                postID: props.pID,
                timestamp: props.timestamp,
                userID: props.userId,
                userProfile: props.userProfile,
                likes: likearr
            }).then(() => {
                firebase.firestore().collection("Users").doc(`${props.userId}`).collection('MyPosts').doc(`${props.pID}`).update({

                    caption: props.caption,

                    imageURL: props.image,

                    name: props.name,

                    postID: props.pID,

                    timestamp: props.timestamp,

                    userID: props.userId,

                    userProfile: props.userProfile,

                    likes: likearr

                }).then(alert('liked a post!'))
            }

            );



        }

        console.log('after click', likearr)

    }





    return (userid.uid !== undefined) ? (

        <>

            <div className=" post-container">

                <div className="card bg-dark text-white">

                    <div className="card bg-dark">

                        <img src={props.image} className="card-img post-img" alt="..." />

                        <div className="card-img-overlay shadows">

                            <div className="card-title author-title"><img src={props.userProfile} alt="..." className="author-img" /><div style={{ flexDirection: 'column' }}><h3>{props.name}</h3><br /><div className='time'>{tobepostedtime + ',' + tobepostedate}</div></div></div>



                        </div>

                    </div>

                    <div><p>{props.caption}</p>

                    </div>

                    <div className="load-comments" style={{ display: commentOpen ? "block" : "none" }}>

                        {comments.map((item, index) => {

                            return (
                                <Commentviewer commentID={item.uID} key={index} text={item.commentText} />
                            )
                        })}

                    </div>
                    <div className="post-below-content">
                        <div className="post-icons">
                            <AiFillHeart className="post-actions" onClick={() => {
                                setisLiked(!isLiked);
                                addlike()
                            }} style={{ color: isLiked ? "red" : "wheat" }} /><div className='numberoflikes'>{likes}</div>
                            <AiOutlineComment className="post-actions dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" onClick={() => setcommentOpen(!commentOpen)} style={{ color: commentOpen ? 'pink' : "wheat" }} /><div className='numberofcomments'>{numberofcomments}</div>
                            <AiOutlineFolderView className="post-actions" data-bs-toggle="modal" data-bs-target={'#Modal' + props.timestamp} />
                        </div>
                        <input type="text" value={commentEntered} onChange={(e) => setcommentEntered(e.target.value)} className="form-control comment-input" placeholder="Type your Comment here"></input>
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
                                <img src={props.userProfile} alt="..." className="author-img" />{props.name}
                            </h5>
                            <AiOutlineClose className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body bg-dark author-img-modal">
                            <img src={props.image} className=" post-img-modal" alt="..." />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (<div>loacing</div>)
}
export default Post