import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import person from '../../sources/person.jpeg'
function LikeViewer(props) {
    const [persondata, setpersondata] = useState('')
    useEffect(() => {
        firebase.firestore().collection('Users').doc(props.uid).onSnapshot((snap) => { setpersondata(snap.data()) })
    }, [])

    if (persondata !== undefined) {

        return (
            <center>
                <div style={{marginTop:'10px',backgroundColor:'	#404040',borderRadius:'30px'}} className='row'>
                    <div className='col-sm-2'>
                        <img className="author-img" onError={(e) => { e.target.onerror = null; e.target.src = person }} src={persondata.userImg} alt='...' />
                    </div>
                    <div className='col-sm-10'>
                        <div style={{ marginLeft: '35px' }} className='profiletitlemodal row'>
                            {persondata.name}
                        </div>
                        <div className='row biolike' >
                            {persondata.bio}
                        </div>
                    </div>
                </div>
            </center>
        )
    }
    else {
        return (<>mew</>)
    }
}

export default LikeViewer
