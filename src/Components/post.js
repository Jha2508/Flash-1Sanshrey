import React, { Component } from 'react'
import './post.css'

import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi'

export default class Post extends Component {
    render() {
        return (
            <div>
                <div className="polaroid">
                    <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg" alt="Harrison Wells" />
                    <div className='row first-txt'>
                        <div className='col-sm-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' className='rounded-circle profilepicmod' alt='...' />
                        </div>
                        <div className='col-sm-9'>
                            <div className='profiletitlemodal'>
                                Harrison Wells
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className='row caption'>
                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                        </div>
                    </div>


                    <div className='col-sm'>
                        <AiFillLike className='reaction' />
                        <AiOutlineComment className='reaction' />
                        <AiOutlineShareAlt className='reaction' />
                        <div className='yourcomment'>

                            <input type="text" className="custominput form-control" placeholder="Add a Comment..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <BiSend className='modalsend' />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}