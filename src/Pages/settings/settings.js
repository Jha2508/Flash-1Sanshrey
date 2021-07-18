import React, { useEffect, useState } from 'react'
import './settings.css'
import Sidebar from '../../Components/sidebar/sidebar'
import {FaCamera} from 'react-icons/fa'
import person from '../../sources/person.jpeg'
import cover from './cover2.png'
import firebase from '../../firebase'
function Settings(props) {
    const [setting, setsetting] = useState([])
    useEffect(() => {
        firebase.firestore().collection('Users').doc(props.userid).get().then((d)=>setsetting(d.data()))
        
    }, [])
    console.log('setting data recieved',setting)
    return (<>

    <Sidebar userid={props.userid}/>
    <div className='marginforside bg-dark SettingsPage'>
    <img src={cover} alt='mew' className='cover'/>
    <img className='photoforchange' src={(setting.userImg!==null && setting.userImg!=='' && setting.userImg!==undefined)?setting.userImg:person} alt='mew'/>
    <FaCamera className='photochangebutton'/>
    <div className='row firstrow'>
    <div className='col'>
    <div>Name : {setting.name}</div></div><div className='col'> <div>Passing Out Year : {setting.passingYear}</div></div><div className='col'> <div>Badge : {setting.passingYear}</div></div></div>
    
   <div className ='row'>
       
    <div>Number of saved Posts : {(setting.savedPost!==undefined)?setting.savedPost.length:0}</div>
    
   </div>
   <div className='row'><div className='col'> Your Linkedin : <div>{setting.linkedinUrl}</div></div><div className='col'>   <div>Your Bio: <br/>{setting.bio}</div></div></div>
    
   
  

    
    </div>
    
    </>

    )
}

export default Settings
