import React, { useState } from 'react'
import './profilepage.css'
import {ImLinkedin} from 'react-icons/im'
import { AiOutlineClose} from 'react-icons/ai'
import {IoIosMailOpen} from 'react-icons/io'
import Sidebar from '../../Components/sidebar/sidebar'
import firebase from '../../firebase'
import { withRouter } from 'react-router-dom'
import Profilepost from './Profilepost'
function ProfilePage (props){
            const selfuser = (props.match.params.id===props.userid)
            const [buttonMssg, setbuttonMssg] = useState('Send friend Request')
            const [profileData, setprofileData] = useState('')
            const [profilePosts, setprofilePosts] = useState([])
            const [numberofposts, setnumberofposts] = useState(0)
                firebase.firestore().collection('Users').doc(props.match.params.id).onSnapshot((snap)=>{setprofileData(snap.data())})
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
            const date = new Date()
            console.log('selfuser',selfuser)
        return (profileData!==undefined && profileData.linkedinUrl!==undefined )?(
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
                                    <div className='socialmediawow'>
                                        <a href={(profileData.linkedinUrl.includes('https://'))?profileData.linkedinUrl:'https://'+profileData.linkedinUrl} rel="noreferrer" target="_blank">
                                    <ImLinkedin className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='blue' /></a>
                                        <a href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+profileData.email} rel="noreferrer" target="_blank"><IoIosMailOpen className='pdfyt' style={{backgroundColor:'white',borderRadius:'10px'}}  color='#F9A602' /></a>
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
                                       <Profilepost self={selfuser} key={index} item={item}/>            
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