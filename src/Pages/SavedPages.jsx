import React, { useEffect, useState } from 'react'
import Post from '../Components/Post/Post'
import Rightbar from '../Components/Right Sidebar/Rightbar'
import Sidebar from '../Components/sidebar/sidebar'
import firebase from '../firebase'
function SavedPages(props) {
    const user = firebase.auth().currentUser
    const [savedID, setsavedID] = useState([])
    useEffect(() => {
        if (user){
            firebase.firestore().doc(`Users/${user.uid}`).onSnapshot((snap)=>setsavedID(snap.data().savedPost))
        }
    }, [])
    
    
    return (<>
        <Sidebar userid={props.userid}/>
        <div className='marginforside home'>

            <div className='row'>
                <div className={window.matchMedia("(max-width: 800px)").matches ? 'col' : 'col-8'}>
                    {props.posts.map((item, index) => {
                        if(savedID!==undefined){
                        if(savedID.includes('AllPost/'+item.postId)){
                            
                            return (<Post key={index} caption={item.caption} like={item.likes} imageUrl={item.imageUrl} userImg={item.userImg} name={item.name} postId={item.postId} timestamp={item.timestamp} userId = {item.uid}/> )
                        }}
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
