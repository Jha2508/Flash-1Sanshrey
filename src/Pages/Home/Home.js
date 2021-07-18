import React from 'react'
import './Home.css'
import Sidebar from '../../Components/sidebar/sidebar'
import Post from '../../Components/Post/Post'
import MessageSender from '../../Components/MessageSender.js'
import Rightbar from '../../Components/Right Sidebar/Rightbar'
function Home(props) {
    
    return (<>
        <Sidebar userid={props.userid}/>
        <div className='marginforside home'>

            <div className='row'>
                <div className={window.matchMedia("(max-width: 800px)").matches ? 'col' : 'col-8'}>

                    <MessageSender userid={props.userid}/>
                    {props.posts.map((item, index) => {
                        return (<Post key={index} caption={item.caption} like={item.likes} imageUrl={item.imageUrl} userImg={item.userImg} name={item.name} postId={item.postId} timestamp={item.timestamp} userId = {item.uid}/>
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
