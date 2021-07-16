import React from 'react'
import './Settings.css'
import Sidebar from '../../Components/sidebar/sidebar'
function Settings() {
    return (<>
    <Sidebar/>
    <div className='marginforside bg-dark SettingsPage'>
    <img src={cover} alt='mew' className='cover'/>
    </div>
    
    </>

    )
}

export default Settings
