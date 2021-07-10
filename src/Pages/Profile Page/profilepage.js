import React, {useState } from 'react'
import './profilepage.css'
import { FaComment, FaFilePdf, FaHeart, FaYoutube } from 'react-icons/fa'
import { AiOutlineClose, AiFillLike } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
import Sidebar from '../../Components/sidebar/sidebar'

const comments = [1, 2, 3, 4, 5, 6, 7]
function ProfilePage (props){
            const [buttonMssg, setbuttonMssg] = useState('Send friend Request')
            
        return (
            <div>
            <Sidebar/>
                <div className='postpage'>

                    <div className='row initials'>
                        <div data-bs-toggle="modal" data-bs-target="#profileModal" className='col-sm-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' className='rounded-circle profilepic' alt='...' />
                        </div>
                        <div className='col-sm'>
                            <div className='profiletitle'>
                                Harrison Wells
                            </div>
                            <div className='category'>
                                ALUMNI - 2021
                            </div>

                            <div className='row'>
                                <div className='col-sm-9 profilebio'>
                                Mayank 😀
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


                                </div>
                                <div className='col-sm-3 rightalign'>
                                    <div className='links' data-bs-toggle="modal" data-bs-target="#friendsModal"> Followers  &nbsp;(30)<br /></div>

                                    <div className='links' data-bs-toggle="modal" data-bs-target="#mutualsModal">Following &nbsp;(2)<br /></div>
                                    <div className='posts'><b>Posts: &nbsp;&nbsp;&nbsp;&nbsp;</b>
                                        <div className='numberofPosts'>
                                            43
                                        </div>
                                    </div>

                                    <button type="button" onClick={()=>setbuttonMssg('sent')} style={props.buttonstat} className="btn btn-outline-warning">{buttonMssg}</button>
                                    <div>
                                        <FaFilePdf className='pdfyt' color='red' />
                                        <FaYoutube className='pdfyt' color='red' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <hr className='divider' />
                        <div className='row allposts'>
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='col profilepost content'>
                                <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='rounded profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal" />

                                <div className="content-overlay" data-bs-toggle="modal" data-bs-target="#singlepostModal" ></div>
                                <div style={{ color: 'white' }} className="content-details fadeIn-top fadeIn-left">
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>

                                                <FaHeart />
                                            </h1>
                                            <p>21</p>
                                        </div>
                                        <div className='col'>
                                            <h1>

                                                <FaComment />
                                            </h1>
                                            <p>32</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
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
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' className='profilepicmodal' alt='...' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="friendsModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Friends Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                here we will show the component of the list of friends
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="mutualsModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <AiOutlineClose />
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Mutuals Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                here we will show the component of the list of  mutual friends
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="singlepostModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl bg-dark">
                        <div className="modal-content bg-dark">
                            <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" className='closebtn' />


                            <div className='modal-body bg-dark row pppost'>

                                <div className='col-sm-7'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' className='pppostimagemodal' alt='..' />
                                </div>
                                <div className='col-sm-5 open'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' className='rounded-circle profilepicmod' alt='...' />
                                        </div>
                                        <div className='col-9'>
                                            <div className='profiletitlemodal row'>
                                                Harrison Wells
                                            </div>
                                            <div className='row caption'>
                                                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                            </div>

                                        </div>
                                    </div>
                                    <center>
                                        <hr className='captiondivider' /></center>


                                    <div className='comments'>
                                        {comments.map((item, index) => {
                                            return (
                                                <div className='row'>
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

        )
    }

export default ProfilePage