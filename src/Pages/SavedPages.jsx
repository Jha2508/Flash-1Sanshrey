import React, { useState } from 'react'
import Post from '../Components/Post/Post'
import Rightbar from '../Components/Right Sidebar/Rightbar'
import Sidebar from '../Components/sidebar/sidebar'
import firebase from '../firebase'
function SavedPages(props) {
    const user = firebase.auth().currentUser
    const [savedID, setsavedID] = useState([])
    
    if (user){
        firebase.firestore().doc(`Users/${user.uid}`).get().then((snap)=>setsavedID(snap.data().savedPost))
    }
    
    return (<>
        <Sidebar/>
        <div className='marginforside home'>

            <div className='row'>
                <div className={window.matchMedia("(max-width: 800px)").matches ? 'col' : 'col-8'}>
                    {props.posts.map((item, index) => {
                        if(savedID.includes('AllPost/'+item.postID)){
                            return (<Post key={index} caption={item.caption} like={item.likes} image={item.imageURL} userProfile={item.userProfile} name={item.name} pID={item.postID} timestamp={item.timestamp} userId = {item.userID}/> )
                        
                        }else{
                            return null}
                       
                    })}

                </div>
                <div className={window.matchMedia("(max-width: 800px)").matches ? 'disable' : 'col-4'}>

                    <Rightbar />
                </div>
            </div>



        </div>
    </>
    )
}

export default SavedPages
