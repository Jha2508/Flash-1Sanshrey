import React from 'react'
import './settings.css'
import Sidebar from '../../Components/sidebar/sidebar'
import cover from './cover2.png'
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
