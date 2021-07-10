import React, { useState, useEffect } from 'react'
import './Home.css'
import Sidebar from '../../Components/sidebar/sidebar'
import Post from '../../Components/Post/Post'
import MessageSender from '../../Components/MessageSender.js'
import Rightbar from '../../Components/Right Sidebar/Rightbar'
import firebase from '../../firebase.js'
function Home() {
   
    const [posts, setposts] = useState([])
        useEffect(() => {
        const ref = firebase.firestore().collection("AllPost")
        ref.onSnapshot((querySnap) => {
            const newpost = []
            querySnap.forEach(
                (doc) => {
                    newpost.push(doc.data());
                }
            )
            setposts(newpost)
            console.log('newposts',newpost)
        })
        }, [])
        const user = firebase.auth().currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  console.log('user',user)
  // ...
} else {
  // No user is signed in.
}

    return (<>
        <Sidebar />
        <div className='marginforside home'>

            <div className='row'>
                <div className={window.matchMedia("(max-width: 800px)").matches ? 'col' : 'col-8'}>

                    <MessageSender />
                    {posts.map((item,index)=>{
                        console.log(item.caption,item.imageURL)
                        return( <Post key={index} caption={item.caption} image={item.imageURL} userProfile={item.userProfile} name={item.name} timestamp={item.timestamp}/>
                    )
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

export default Home
