import React, { useEffect, useState } from 'react'
import './sidebr.css'
import { FiLogOut } from 'react-icons/fi'
import { IoHome, IoSettings } from 'react-icons/io5'
import {BiSave} from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logon from '../../logon.png'
import firebase from '../../firebase'

import Sidebar2 from '../../Components/Sidebar2'

const handlelogout = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert('Signed Out! See Ya all next time!')

  }).catch((error) => {
    // An error happened.
  });

}

function Sidebar() {
  const user = firebase.auth().currentUser;
  
  const ref2 = firebase.firestore().collection('Users')
  const [profileinfo, setprofileinfo] = useState({image:'',name:'',passoutyr:'2023'})
  useEffect(()=>{
    if (user) {
      ref2.doc(user.uid).get().then((snap) => setprofileinfo(snap.data()))
    }
  },[])
  
  return (
    <div>
      <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <form className="example" action="action_page.php">
            <Sidebar2 />
          </form>

          <div className="lower-us">
            <img src={(profileinfo!==undefined)?profileinfo.image:''} alt='pp' />
            <div className="name">
              <div >{(profileinfo!==undefined)?profileinfo.name:''}</div>
              <div className='status'>Student</div>
            </div>
          </div>
        </header>
        <div className='logoimage'>
        <img className='logo' src={logon} alt='...' />
        </div>
       
        <div className='logotitle'>Sanshreya</div>
        <ul className='allmenus'>
          <li tabIndex={0} ><Link className='Menu' to='/Home'><IoHome style={{ marginRight: '8px' }} />Home</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/MyProfile'><CgProfile style={{ marginRight: '8px' }} />View Your Profile</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/savedposts'><BiSave style={{ marginRight: '8px' }} />Saved Posts</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/settings'><IoSettings style={{ marginRight: '8px' }} />Settings</Link></li>
          <li tabIndex={0} onClick={handlelogout}><div className='Menu'><FiLogOut style={{ marginRight: '8px' }} />Logout</div></li>
                  
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
