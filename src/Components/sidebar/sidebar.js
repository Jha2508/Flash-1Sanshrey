import React from 'react'
import './sidebr.css'
import {FiLogOut} from 'react-icons/fi'
import {IoHome,IoSettings} from 'react-icons/io5'
import { CgProfile} from 'react-icons/cg'
import {Link } from 'react-router-dom'
import logon from '../../logon.png'


import Sidebar2 from '../../Components/Sidebar2'
function sidebar() {
    return (
        <div>
        
        
            <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
            <form className="example" action="action_page.php">
            <Sidebar2/>
            </form>
          
          <div className="lower-us">
            <img src='https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2021/03/the-flash-barry-allen.jpg' alt='pp' />
            <div className="name">
              <div >Dahmien Dark</div>
              <div className='status'>Student</div>
            </div>
          </div>
        </header>
        <img  className='logo' src={logon} alt='...'/>
        <div className='logotitle'>Sanshreya</div>
        <ul className='allmenus'>       
         <li tabIndex={0} ><Link className='Menu' to='/Home'><IoHome style={{marginRight:'8px'}}/>Home</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/MyProfile'><CgProfile style={{marginRight:'8px'}}/>View Your Profile</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/settings'><IoSettings style={{marginRight:'8px'}}/>Settings</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/'><FiLogOut style={{marginRight:'8px'}}/>Logout</Link></li>
        </ul>
      </nav>
        </div>
    )
}

export default sidebar
