import React, { useEffect, useState } from 'react'
import './Post.css'
import firebase from '../../firebase.js'
import { AiFillHeart, AiOutlineClose, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'

const Post = (props) => {
    Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
    const [isLiked, setisLiked] = useState(false)
    const [comments, setcomments] = useState('')
    const [commentEntered, setcommentEntered] = useState('')
    const userid = firebase.auth().currentUser;
  const [alluserData, setalluserData] = useState([])
  useEffect(()=>{
   
    firebase.firestore().collection('Users').onSnapshot((snap)=>{
        const users =[]
        snap.forEach((doc)=>{users.push(doc.data())
        })
        setalluserData(users)
        
      })
  },[])
  
  console.log('All user Data',alluserData[0])
    const handlecomment = ()=>{
        
        const timest = Date.now()
        const datatobeentered ={
            commentText:commentEntered,
            uID:userid.uid,
            timestamp:timest
        }

        firebase.firestore().collection('AllPost').doc(props.pID).collection('Comments').add(datatobeentered).then(()=>
            {alert('comment dana done done!')
            setcommentEntered('')
    })
        console.log('comments entered data in',props.pID,datatobeentered)
    }
    useEffect(() => {

        firebase.firestore().collection('AllPost').doc('4fsq7pJkQXTRYZXfzE2MFip3qm721625825616385').collection('Comments').onSnapshot((querySnap) => {

            const newComment = [];

            querySnap.forEach((doc) => {

                newComment.push(doc.data())

            })



            setcomments(newComment)

        })

    }, [])

    console.log('mew',comments);
    const [commentOpen, setcommentOpen] = useState(false)
    var date = new Date(props.timestamp);
    const tobepostedate = date.toDateString();
    const tobepostedtime =
        date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const likearr = props.like
    const likes = Object.keys(props.like).length
    const addlike = () => {
        if (userid.uid!==undefined) {
            (likearr.includes(userid.uid))?likearr.remove(userid.uid):likearr.push(userid.uid)
            
           
            firebase.firestore().collection("AllPost").doc(`${props.pID}`).update({
                caption:props.caption,
                imageURL:props.image,
                name:props.name,
                postID:props.pID,
                timestamp:props.timestamp,
                userID:props.userId,
                userProfile:props.userProfile,
                likes: likearr
            }).then(()=>{firebase.firestore().collection("Users").doc(`${props.userId}`).collection('MyPosts').doc(`${props.pID}`).update({
                caption:props.caption,
                imageURL:props.image,
                name:props.name,
                postID:props.pID,
                timestamp:props.timestamp,
                userID:props.userId,
                userProfile:props.userProfile,
                likes: likearr
            }).then(alert('liked a post!'))}
            );
           
        }
        console.log('after click', likearr)
    }

    
    return (userid.uid!==undefined)?(
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
                        <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        <p className="card-text author-title">Last updated 3 mins ago</p>
                        <div><p>Post text</p></div>
                        <hr />
                        <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        <p className="card-text author-title">Last updated 3 mins ago</p>
                        <div><p>Post text</p></div>
                        <hr />
                        <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        <p className="card-text author-title">Last updated 3 mins ago</p>
                        <div><p>Post text</p></div>
                        <hr />
                        <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        <p className="card-text author-title">Last updated 3 mins ago</p>
                        <div><p>Post text</p></div>
                        <hr />
                        <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        <p className="card-text author-title">Last updated 3 mins ago</p>
                        <div><p>Post text</p></div>
                        <hr />
                        <div className='row'>
                            <div className='col-2'>
                                <img className="author-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' alt='...' />
                            </div>
                            <div className='col-10'>
                                <div className='profiletitlemodal row'>
                                    Harrison Wells
                                </div>
                                <div className='row caption' style={{ textAlign: "left" }}>
                                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-below-content">
                        <div className="post-icons">
                            <AiFillHeart className="post-actions" onClick={() => {
                                setisLiked(!isLiked);
                                addlike()}} style={likearr.includes(userid.uid)?{color:'red'}:{color:'wheat'}}/><div className='numberofcomments'>{props.like.length}</div>
                            <AiOutlineComment className="post-actions dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" onClick={() => setcommentOpen(!commentOpen)} style={{ color: commentOpen ? 'red' : "wheat" }} /><div className='numberofcomments'>21</div>
                            <AiOutlineFolderView className="post-actions" data-bs-toggle="modal" data-bs-target={'#Modal' + props.timestamp}  />
                        </div>
                        <input type="text" value={commentEntered} onChange={(e)=>setcommentEntered(e.target.value)} className="form-control comment-input" placeholder="Type your Comment here"></input>
                        <BiSend className="post-actions" onClick={()=>handlecomment()} />
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

    ):(<div>loacing</div>)
}

export default Post
