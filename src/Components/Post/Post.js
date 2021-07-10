import React,{useState} from 'react'
import './Post.css'

import { AiFillLike, AiOutlineClose, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'

const Post = (props) => {
    console.log('post comsole',props.userProfile)
    const [isLiked, setisLiked] = useState(false)
    const [commentOpen, setcommentOpen] = useState(false)
    var date = new Date(props.timestamp);
    const tobepostedate = date.toDateString();
    const tobepostedtime = 
    date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return (
        <>
            <div className=" post-container">
                <div className="card bg-dark text-white">
                    <div className="card bg-dark">
                        <img src={props.image} className="card-img post-img" alt="..." />
                        <div className="card-img-overlay shadows">
                            <div className="card-title author-title"><img src={props.userProfile} alt="..." className="author-img" /><div style={{flexDirection:'column'}}><h3>{props.name}</h3><br/><div className='time'>{tobepostedtime+','+tobepostedate}</div></div></div>
                            
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

    )
}

export default Post