import React, { Component } from 'react'
import './profilepage.css'
import { FaFilePdf, FaYoutube } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonMssg: 'Send Friend Request'
        };
    }
    render() {

        return (
            <div>
                <div className='postpage'>

                    <div className='row initials'>
                        <div data-bs-toggle="modal" data-bs-target="#profileModal" className='col-sm-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3KhSxjXiwiYPBeVt56ofSsGXcrmRBCHxQ&usqp=CAU' className='rounded-circle profilepic' alt='...' />
                        </div>
                        <div className='col-sm-7'>
                            <div className='profiletitle'>
                                Harrison Wells
                            </div>
                            <div className='category'>
                                ALUMNI - 2021
                            </div>

                            <div className='row'>
                                <div className='col-sm-9 profilebio'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


                                </div>
                                <div className='col-sm-3 rightalign'>
                                    <div className='links' data-bs-toggle="modal" data-bs-target="#friendsModal"> Friends  &nbsp;(30)<br /></div>

                                    <div className='links' data-bs-toggle="modal" data-bs-target="#mutualsModal">Mutual &nbsp;(2)<br /></div>
                                    <div className='posts'><b>Posts: &nbsp;&nbsp;&nbsp;&nbsp;</b>
                                        <div className='numberofPosts'>
                                            43
                                        </div>
                                    </div>

                                    <button type="button" onClick={() => this.setState({ buttonMssg: 'sent' })} className="btn btn-outline-warning">{this.state.buttonMssg}</button>
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
                                <div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
                                </div>
                                <div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
                                </div><div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
                                </div><div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
                                </div><div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
                                </div><div className='col profilepost'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' alt='...' className='profilepostimg' data-bs-toggle="modal" data-bs-target="#singlepostModal"/>
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
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Post Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body row pppost">

                                <div className='col-sm-7'>
                                    <img src='https://i.insider.com/56dd5464dd08956d4b8b46ac?width=800&format=jpeg' className='pppostimagemodal' alt='..' />
                                </div>
                                <div className='col-sm-5'>
                                    2
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
