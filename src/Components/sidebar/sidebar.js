import React, { useEffect, useState } from 'react'
import './sidebr.css'
import { FiLogOut } from 'react-icons/fi'
import { IoHome, IoSettings } from 'react-icons/io5'
import {BiSave} from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { Link, withRouter } from 'react-router-dom'
import person from '../../sources/person.jpeg'
import firebase from '../../firebase'
import Sidebar2 from '../../Components/Sidebar2'

const handlelogout = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert('Successfully logged out.')

  }).catch((error) => {
    // An error happened.
  });

}

function Sidebar(props) {
  const id = firebase.auth().currentUser
  const ref2 = firebase.firestore().collection('Users')
  const [profileinfo, setprofileinfo] = useState({userImg:person,name:'userName',passingYear:'2023'})
  useEffect(()=>{
    if (id) {
      ref2.doc(id.uid).get().then((snap) => setprofileinfo(snap.data()))
    }
  },[])
  
  return (
    <div>
      <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <form className="example" action="action_page.php">
            <Sidebar2 userid={props.userid}/>
          </form>

          <div className="lower-us">
            <img src={profileinfo.userImg} alt='pp' />
            
          </div>
          <div className="name">
              <div >{(profileinfo!==undefined)?profileinfo.name:''}</div>
              <div className='status'>{profileinfo.passingYear}</div>
            </div>
        </header>
<<<<<<< HEAD
        

=======
        <div className='logocontainer'>
        <img className='logo' src={logon} alt='...' />
        <div className='logotitle'>Sanshreya</div>
        </div>
>>>>>>> ddf053af9c0b06a3c7093c32b571eb1f0e343ba9
        <ul className='allmenus'>
          <li tabIndex={0} ><Link className='Menu' to='/Home'><IoHome style={{ marginRight: '8px' }} />Home</Link></li>
          <li className='Menu' onClick={()=>{
            props.history.push(`/profile/${props.userid}`)
            window.location.reload(false);}} tabIndex={0} ><CgProfile style={{ marginRight: '8px' }} />View Your Profile</li>
          <li tabIndex={0} ><Link className='Menu' to='/savedposts'><BiSave style={{ marginRight: '8px' }} />Saved Posts</Link></li>
          <li tabIndex={0} ><Link className='Menu' to='/settings'><IoSettings style={{ marginRight: '8px' }} />Settings</Link></li>
          <li tabIndex={0} onClick={handlelogout}><div className='Menu'><FiLogOut style={{ marginRight: '8px' }} />Logout</div></li>
                  
        </ul>
      </nav>
    </div>
  )
}

export default withRouter(Sidebar)
