import React, { useState } from 'react'
import './profilepage.css'
import { FaComment, FaHeart } from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import { AiOutlineClose} from 'react-icons/ai'
import {IoIosMailOpen} from 'react-icons/io'
import Sidebar from '../../Components/sidebar/sidebar'
import firebase from '../../firebase'
import { withRouter } from 'react-router-dom';
const comments = [1, 2, 3, 4, 5, 6, 7]
function ProfilePage (props){
           console.log('entered profile page '+props.match.params.id)
            const [buttonMssg, setbuttonMssg] = useState('Send friend Request')
            const [profileData, setprofileData] = useState('')
            const [profilePosts, setprofilePosts] = useState([])
            const [numberofposts, setnumberofposts] = useState(0) 
            
                firebase.firestore().collection('Users').doc(props.match.params.id).get().then((snap)=>{setprofileData(snap.data())})
                    firebase.firestore().collection("AllPost").where("uid", "==",props.match.params.id).onSnapshot((querySnap) => {
                    const newpost = []
                    querySnap.forEach(
                        (doc) => {
                            newpost.push(doc.data());
                        }
                    )
                    setprofilePosts(newpost)
                    setnumberofposts(Object.keys(profilePosts).length)
                })
             
                console.log('profiledaata',profilePosts)
            const date = new Date()
        return (profileData!==undefined)?(
            <div>
            <Sidebar userid={props.userid}/>
                <div className='postpage'>

                    <div className='row initials'>
                        <div data-bs-toggle="modal" data-bs-target="#profileModal" className='col-sm-3'>
                            <img src={profileData.userImg} className='rounded-circle profilepic' alt='...' />
                        </div>
                        <div className='col-sm'>
                            <div className='profiletitle'>
                                {profileData.name}
                            </div>
                            <div className='category'>
                                {(date.getFullYear()<profileData.passingYear)?'Student':'Alumni - '+profileData.passingYear}
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

                                    <button type="button" onClick={()=>setbuttonMssg('Feature not available')} style={props.pro==='self'?{display:'none'}:{display:'block'}} className="btn btn-outline-warning">{buttonMssg}</button>
                                    <div>
                                    <ImLinkedin className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='blue' />
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" rel="noreferrer" target="_blank"><IoIosMailOpen className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='#F9A602' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <hr className='divider'/>
                        <div className='row allposts'>
                        {profilePosts.map((item,index)=>{
                            return(
                            <div key={index} className='col profilepost content'>
                                <img src={item.imageUrl} alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target={"#"+item.postId} />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target={"#"+item.postId} ></div>
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

                                                <FaComment />                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal fade" id={item.postId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl bg-dark">
                        <div className="modal-content bg-dark">
                            <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" className='closebtn' />


                            <div className='modal-body bg-dark row pppost'>

                                <div className='col-sm-7'>
                                    <img src={item.imageUrl} className='pppostimagemodal' alt='..' />
                                </div>
                                <div className='col-sm-5 open'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src={item.userImg} className='rounded-circle profilepicmod' alt='...' />
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
                                <img src={profileData.userImg} className='profilepicmodal' alt='...' />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

        ):(<div className='preloader'>
        <div className="loader">
        <div className="spin reel">
          <span className="dot d_top" />
          <span className="dot d_right" />
          <span className="dot d_center" />
          <span className="dot d_left" />
          <span className="dot d_bottom" />
        </div>
        
      </div>
      
      The Profile data is loading, Please Wait⌛
      </div>)
    }

export default withRouter(ProfilePage)