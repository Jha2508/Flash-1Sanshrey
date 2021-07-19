import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import person from '../../sources/person.jpeg'
function Comments(props) {
    const [commentUSer, setcommentUSer] = useState([])
    useEffect(() => {
     firebase.firestore().collection('Users').doc(props.uid).get().then((doc)=>{
         setcommentUSer(doc.data())
         
    console.log('comenttee',commentUSer)
     })
    }, [])
    
    return (
        <div className='row'>
            <div className='col-4'>
                <img src={(commentUSer.userImg!=='' && commentUSer.userImg!==null && commentUSer.userImg!==undefined)?commentUSer.userImg:person} className='rounded-circle profilepicfriendmod' alt='...' />
            </div>
            <div className='col-8'>
                <div className='row profiletitlefriendmodal'>
                    {commentUSer.name}
                </div>
                <div className='row commentmodal'>
                   {props.msg} 
                    </div>
            </div>
            <center><hr className='commentdivider' /></center>
        </div>
    )
}

export default Comments
