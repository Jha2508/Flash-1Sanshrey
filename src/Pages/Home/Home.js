import React from 'react'
import './Home.css'
import Sidebar from '../../Components/sidebar/sidebar'
import Post from '../../Components/Post/Post'
import MessageSender from '../../Components/MessageSender.js'
import Rightbar from '../../Components/Right Sidebar/Rightbar'
function Home() {
    return (<>
        <Sidebar />
        <div className='marginforside home'>
            
            <div className='row'>
                <div className={window.matchMedia("(max-width: 800px)").matches?'col':'col-8'}>
                
                    <MessageSender />
                </div>
                <div className={window.matchMedia("(max-width: 800px)").matches?'disable':'col-4'}>

                    <Rightbar />
                </div>
            </div>



        </div>
    </>
    )
}

export default Home
