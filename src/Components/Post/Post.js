import React,{useState , useEffect} from 'react'
import './Post.css'
import firebase from '../../firebase';

import { AiFillLike, AiOutlineClose, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
// import {GiSaveArrow} from 'react-icons/gi'
// import {HiOutlineSave} from 'react-icons/hi'
import {FaBookmark} from 'react-icons/fa'

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

    const [alluserdata,setalluserdata] = useState([]);
    const user=firebase.auth().currentUser.uid;
    useEffect(() => {
        // firebase.firestore().collection('Users').doc(user).get().then((sanp)=>
        // {setalluserdata (sanp.data())} )
        firebase.firestore().collection('Users').doc(user).onSnapshot((doc) => {setalluserdata(doc.data())})
    },[])
    const savedpost=alluserdata.savedPost;
    const handlesave=() =>{
        const cond=savedpost.includes('AllPost/'+props.pID);
        (!cond) ? savedpost.push('AllPost/'+props.pID) :savedpost.remove('AllPost/'+props.pID)
        console.log({bio:alluserdata.bio,
        image:alluserdata.image,name:alluserdata.name,passoutyear : alluserdata.passoutyear,resumeurl : alluserdata.resumeurl,phoneNO:alluserdata.phoneNO,uID:alluserdata.uID,savedPost:savedpost})
        if(cond)
        alert('Post  Is Unsaved');
        else
        alert('Post Is Saved');
        firebase.firestore().collection('Users').doc(user).set({bio:alluserdata.bio,
            image:alluserdata.image,name:alluserdata.name,passoutyear : alluserdata.passoutyear,resumeurl : alluserdata.resumeurl,phoneNO:alluserdata.phoneNO,uID:alluserdata.uID,savedPost:savedpost})
        console.log('all user data ',savedpost)
        
    
    
        
 }
    console.log('post comsole',props.userProfile)
    const [isLiked, setisLiked] = useState(false)
    // const [issaved,setissaved]=useState(false)
    const [commentOpen, setcommentOpen] = useState(false)
    var date = new Date(props.timestamp);
    const tobepostedate = date.toDateString();
    const tobepostedtime = 
    date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return (savedpost!==undefined)?(
        <>
            <div className=" post-container">
                <div className="card bg-dark text-white">
                    <div className="card bg-dark">
                        <img src={props.image} className="card-img post-img" alt="..." />
                        <div className="card-img-overlay shadows">
                            <div className="card-title author-title">
                            <img src={props.userProfile} alt="..." className="author-img" />
                            <div style={{flexDirection:'column'}}>
                            <h3>{props.name}</h3><br/>
                            <div className='time'>{tobepostedtime+','+tobepostedate}</div>
                            </div>
                            {/* put here */}
                            <div className='downloadIconContainer'>
                                {/* <GiSaveArrow  className='downloadIcon' /> */}
                                {/* <HiOutlineSave className='downloadIcon' /> */}
                                <FaBookmark className='downloadIcon' onClick={handlesave} 
                                style={{ color: (savedpost.includes('AllPost/'+props.pID)) ? "blue" : "white" }} />

                            </div>
                            </div>
                            
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
                            <AiFillLike className="post-actions" onClick={() => setisLiked(!isLiked)} style={{ color: isLiked ? "pink" : "white" }} /><div className='numberoflikes'>23</div>
                            <AiOutlineComment className="post-actions dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" onClick={() => setcommentOpen(!commentOpen)} style={{ color: commentOpen ? "pink" : "white" }} /><div className='numberofcomments'>21</div>
                            <AiOutlineFolderView className="post-actions" data-bs-toggle="modal" data-bs-target={'#Modal'+props.timestamp} style={{ color: "white" }} />
                        </div>
                        <input type="text" className="form-control comment-input" id="exampleFormControlInput1" placeholder="Type your Comment here"></input>
                        <BiSend className="post-actions" style={{ color: "white" }} />
                    </div>
                </div>
            </div>



            {/* _____________________________________________________________________________________________________________________________ */}
            <div className="modal fade bg-dark" id={'Modal'+props.timestamp} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark">
                    <div className="modal-content bg-dark">
                        <div className="modal-header post-head bg-dark text-white">
                            <h5 id="exampleModalLabel" className="card-title author-title">
                                <img src={props.userProfile} alt="..." className="author-img" />{props.name}
                            </h5>

                            <AiOutlineClose className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
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

    ):(<div>Loading</div>)
}

export default Post