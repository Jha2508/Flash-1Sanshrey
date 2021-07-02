import React from 'react'
import './sidebr.css'
import {BiSearch} from 'react-icons/bi'
import {Link } from 'react-router-dom';
import Settings from '../../pages/settings/settings';



function sidebar() {
    return (
        <div>
        
        
            <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <div className="search-box">
            <form className="example" action="action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><BiSearch/></button>
            </form>
          </div>
          <div className="lower-us">
            <div className="img"><img src="img1.jpg" alt='pp' /></div>
            <div className="name">
              <p style={{margin: '5px'}}>NAME</p>
              <p style={{margin: '5px'}} >Email id</p>
            </div>
          </div>
        </header>
        <ul >         
         <li tabIndex={0} className="icon-1">Menu 1</li>
          <li tabIndex={0} className="icon-2">Menu 2</li>
          <li tabIndex={0} className="icon-3">Menu 3</li>
          <li tabIndex={0} className="icon-4"><Link to='/settings'>Settings</Link></li>
          

        </ul>
      </nav>
        </div>
    )
}

export default sidebar
