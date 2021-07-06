import React from 'react'
import './Post.css'

import { AiFillLike, AiOutlineComment, AiOutlineFolderView } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'
import { useState } from 'react';

const Post = () => {
    const [isLiked, setisLiked] = useState(false)
    const [commentOpen, setcommentOpen] = useState(false)
    return (
        <>
            <div className=" post-container">
                <div className="card bg-dark text-white">
                    <div className="card bg-dark">
                        <img src="https://www.glorify.com/wp-content/uploads/2020/12/background-remover-01.png" className="card-img post-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title author-title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author</h5>
                        </div>
                    </div>
                    <div><p>Post text</p>
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
                            <AiFillLike className="post-actions" onClick={() => setisLiked(!isLiked)} style={{ color: isLiked ? "pink" : "white" }} />
                            <AiOutlineComment className="post-actions dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" onClick={() => setcommentOpen(!commentOpen)} style={{ color: commentOpen ? "pink" : "white" }} />
                            <AiOutlineFolderView className="post-actions" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: "white" }} />
                        </div>
                        <input type="text" className="form-control comment-input" id="exampleFormControlInput1" placeholder="Type your Comment here"></input>
                        <BiSend className="post-actions" style={{ color: "white" }} />
                    </div>
                </div>
            </div>



            {/* _____________________________________________________________________________________________________________________________ */}
            <div className="modal fade bg-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark">
                    <div className="modal-content bg-dark">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalLabel" className="card-title author-title">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJkFLkuSbV6xDuW0evsaMtxMSayeyz94u6g&usqp=CAU" alt="..." className="author-img" />Name of Author
                            </h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-dark author-img-modal">
                            <img src="https://www.glorify.com/wp-content/uploads/2020/12/background-remover-01.png" className="card-img post-img" alt="..." />
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