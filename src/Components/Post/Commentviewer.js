import React, { useState } from 'react'
import firebase from '../../firebase'

function Commentviewer(props) {

    const [commentUSer, setcommentUSer] = useState([])
    if (props.commentID !== undefined && props.text !== undefined) {
        firebase.firestore().collection('Users').doc(props.commentID).get().then(snap => { if (snap.exists) { setcommentUSer(snap.data()) } })
    }
    if(props.commentID !== undefined && props.text !== undefined){if((commentUSer.length !== 0) ){
        return (

            <div className='row'>
                <div className='col-2'>
                    <img className="author-img" src={commentUSer.userImg} alt='...' />
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
        ) 
    }else{return(<div>
        <h2>NO Comments to Show!!</h2>
    </div>)}
    }else{
     return(   <div>
        <h2>NO Comments to Show!!</h2>
    </div>)
    }
    
}

export default Commentviewer
