import React, { useState } from 'react'
import { BiUnderline } from 'react-icons/bi'
import firebase from '../../firebase'

function Commentviewer(props) {

    const [commentUSer, setcommentUSer] = useState([])
    if (props.commentID !== undefined && props.text !== undefined) {
        firebase.firestore().collection('Users').doc(props.commentID).get().then(snap => { if (snap.exists) { setcommentUSer(snap.data()) } })
    }

    return (props.commentID !== undefined && props.text !== undefined) ? (commentUSer.length !== 0) ? (

        <div className='row'>
            <div className='col-2'>
                <img className="author-img" src={commentUSer.image} alt='...' />
            </div>
            <div className='col-10'>
                <div className='profiletitlemodal row'>
                    {commentUSer.name}
                </div>
                <div className='row caption' style={{ textAlign: "left" }}>
                    <p> {props.text} </p>
                </div>
            </div>
        </div>
    ) : <div>
        <h2>NO Comments to Show!!</h2>
    </div> : <div>
        <h2>NO Comments to Show!!</h2>
    </div>
}

export default Commentviewer
