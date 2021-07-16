import React, { useState } from 'react'
import './profilepage.css'
import { FaComment, FaHeart } from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import { AiOutlineClose, AiFillLike } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
import {IoIosMailOpen} from 'react-icons/io'
import Sidebar from '../../Components/sidebar/sidebar'
import firebase from '../../firebase'
const comments = [1, 2, 3, 4, 5, 6, 7]
function ProfilePage (props){
           
            const [buttonMssg, setbuttonMssg] = useState('Send friend Request')
            const [profileData, setprofileData] = useState('')
            const [profilePosts, setprofilePosts] = useState([])
            const [numberofposts, setnumberofposts] = useState(0) 
            const user = firebase.auth().currentUser
            if(user && props.pro==='self'){
                firebase.firestore().collection('Users').doc(user.uid).get().then((snap)=>{setprofileData(snap.data())})
                    firebase.firestore().collection('Users').doc(user.uid).collection('MyPosts').onSnapshot((querySnap) => {
                    const newpost = []
                    querySnap.forEach(
                        (doc) => {
                            newpost.push(doc.data());
                        }
                    )
                    setprofilePosts(newpost)
                    setnumberofposts(Object.keys(profilePosts).length) 
        
                })
            }
            const date = new Date()
        return (
            <div>
            <Sidebar/>
                <div className='postpage'>

                    <div className='row initials'>
                        <div data-bs-toggle="modal" data-bs-target="#profileModal" className='col-sm-3'>
                            <img src={profileData.image} className='rounded-circle profilepic' alt='...' />
                        </div>
                        <div className='col-sm'>
                            <div className='profiletitle'>
                                {profileData.name}
                            </div>
                            <div className='category'>
                                {(date.getFullYear()<profileData.passoutyear)?'Student':'Alumni - '+profileData.passoutyear}
                            </div>

                            <div className='row'>
                                <div className='col-sm-9 profilebio'>
                               {profileData.bio}

                                </div>
                                <div className='col-sm-3 rightalign'>
                                   <div className='posts'><b>Posts: &nbsp;&nbsp;&nbsp;&nbsp;</b>
                                        <div className='numberofPosts'>
                                            {numberofposts}
                                        </div>
                                    </div>

                                    <button type="button" onClick={()=>setbuttonMssg('sent')} style={props.pro==='self'?{display:'none'}:{display:'block'}} className="btn btn-outline-warning">{buttonMssg}</button>
                                    <div>
                                    <ImLinkedin className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='blue' />
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank"><IoIosMailOpen className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='#F9A602' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <hr className='divider' />
                        <div className='row allposts'>
                        {profilePosts.map((item,index)=>{
                            return(
                            <div key={index} className='col profilepost content'>
                                <img src={item.imageURL} alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target={"#"+item.postID} />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target={"#"+item.postID} ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>{Object.keys(item.likes).length}</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal fade" id={item.postID} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl bg-dark">
                        <div className="modal-content bg-dark">
                            <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" className='closebtn' />


                            <div className='modal-body bg-dark row pppost'>

                                <div className='col-sm-7'>
                                    <img src={item.imageURL} className='pppostimagemodal' alt='..' />
                                </div>
                                <div className='col-sm-5 open'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src={item.userProfile} className='rounded-circle profilepicmod' alt='...' />
                                        </div>
                                        <div className='col-9'>
                                            <div className='profiletitlemodal row'>
                                                {item.name}
                                            </div>
                                            <div className='row caption'>
                                                <p> {item.caption} </p>
                                            </div>

                                        </div>
                                    </div>
                                    <center>
                                        <hr className='captiondivider' /></center>


                                    <div className='comments'>
                                        {comments.map((iteminn, indexinn) => {
                                            return (
                                                <div key={indexinn} className='row'>
                                                    <div className='col-3'>
                                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg/220px-Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg' className='rounded-circle profilepicfriendmod' alt='...' />
                                                    </div>
                                                    <div className='col-9'>
                                                        <div className='row profiletitlefriendmodal'>
                                                            Kate Winslet
                                                        </div>
                                                        <div className='row commentmodal'>
                                                            Lorem Ipsum is not simply random text.sasasssasadasa as asas as a sas as as as  sa s as a sa s
                                                        </div>
                                                    </div>
                                                    <center><hr className='commentdivider' /></center>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <div className='col-sm'>
                                        <div className='yourcomment'>
                                            <AiFillLike className='modallike' />
                                            <input type="text" className="custominput form-control" placeholder="Add a Comment..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <BiSend className='modalsend' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                            </div>
                            
                        )})}
                            
                            
                        </div>
                    </center>



                </div>

                {/* ----------------------------------------Modals ---------------------------------------------------*/}




                <div className="modal fade " id="profileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog">
                        <div className="modal-content pro">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Profile Picture</h5>

                                <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" color='white' size='30px' style={{ top: '0', right: '0' }} />
                            </div>
                            <div className="modal-body profileopen">
                                <img src={profileData.image} className='profilepicmodal' alt='...' />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

        )
    }

export default ProfilePage