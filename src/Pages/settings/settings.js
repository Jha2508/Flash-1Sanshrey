import React, { useEffect, useState } from 'react'
import './settings.css'
import Sidebar from '../../Components/sidebar/sidebar'
import { FaCamera } from 'react-icons/fa'
import person from '../../sources/person.jpeg'
import cover from './cover2.png'
import firebase from '../../firebase'
import { FcViewDetails } from 'react-icons/fc'
import { ImLinkedin } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import nitp from '../../sources/nitplogo.png'
import eesa from '../../sources/eesastyle.jpeg'
function Settings(props) {

    const [name, setname] = useState()
    const [passoutyear, setpassoutyear] = useState()
    const [link, setlink] = useState()
    const [Bio, setBio] = useState()
    const handleimgchange = () => {
        firebase.storage().ref(`/images/${setting.uid}`).put(dataimage).on("state_changed",
            function (snapshot) { }, function (err) { }, function () {
                alert("photo has been changed succesfully")
            })
    }

    const handleyear = () => {
        firebase.firestore().collection('Users').doc(setting.uid).set({
            bio: setting.bio,
            name: setting.name,
            phoneNo: setting.phoneNo,
            branch: setting.branch,
            passingYear: passoutyear,
            linkedinUrl: setting.linkedinUrl,
            userImg: setting.userImg,
            uid: setting.uid,
            email: setting.email,
            savedPost: setting.savedPost
        }).then(alert('data updated!'))
    }
    
    const handlebio = () => {
        firebase.firestore().collection('Users').doc(setting.uid).set({
            bio: Bio,
            name: setting.name,
            phoneNo: setting.phoneNo,
            branch: setting.branch,
            passingYear: setting.passingYear,
            linkedinUrl: setting.linkedinUrl,
            userImg: setting.userImg,
            uid: setting.uid,
            email: setting.email,
            savedPost: setting.savedPost
        }).then(alert('data updated!'))
    }

    const handlelink = () => {
        firebase.firestore().collection('Users').doc(setting.uid).set({
            bio: setting.bio,
            name: setting.name,
            phoneNo: setting.phoneNo,
            branch: setting.branch,
            passingYear: setting.passingYear,
            linkedinUrl: link,
            userImg: setting.userImg,
            uid: setting.uid,
            email: setting.email,
            savedPost: setting.savedPost
        }).then(alert('data updated!'))
    }
    const handlename = () => {

        firebase.firestore().collection('Users').doc(setting.uid).set({
            bio: setting.bio,
            name: name,
            phoneNo: setting.phoneNo,
            branch: setting.branch,
            passingYear: setting.passingYear,
            linkedinUrl: setting.linkedinUrl,
            userImg: setting.userImg,
            uid: setting.uid,
            email: setting.email,
            savedPost: setting.savedPost
        }).then(alert('data updated!'))
    }
    const date = new Date()
    const [dataimage, setdataimage] = useState()
    const [setting, setsetting] = useState([])
    useEffect(() => {
        firebase.firestore().collection('Users').doc(props.userid).onSnapshot((d) => setsetting(d.data()))
    }, [])
    console.log('setting data recieved', setting)
    return (<>

        <Sidebar userid={props.userid} />
        <div className='marginforside bg-dark SettingsPage'>
            <img src={cover} alt='mew' className='cover' />
            <img className='photoforchange' src={(setting.userImg !== null && setting.userImg !== '' && setting.userImg !== undefined) ? setting.userImg : person} alt='mew' />
            <FaCamera data-bs-toggle="modal" data-bs-target="#photoModal" className='photochangebutton' />
            <div className='row firstrow'>
                <div className='col'>
                    <div>Name : {setting.name}
                        <button type="button" data-bs-toggle="modal" data-bs-target="#nameModal" className="btn btn-outline-warning">

                            <FiSettings />
                        </button>
                    </div>
                </div>
                <div className='col'>
                    <div>
                        Batch Year : {setting.passingYear}
                        <button type="button" data-bs-toggle="modal" data-bs-target="#yearModal" className="btn btn-outline-warning">

                            <FiSettings />
                        </button>
                    </div>
                </div>
                <div className='col'>
                    <div>Badge :
                        <div className='category'>
                            {(date.getFullYear() < setting.passingYear) ? 'Student' : 'Alumni - ' + setting.passingYear}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginLeft: '150px' }} className='row firstrow'>
                <div>
                    Number of saved Posts : {(setting.savedPost !== undefined) ? setting.savedPost.length : 0}
                </div>


            </div>
            <marquee>
                <img className='collegelogo' src={nitp} alt='...' />
                <img className='collegelogo' src={eesa} alt='...' />

            </marquee>
            <div className='row lastrow'>
                <div className='col'>
                    Your <ImLinkedin color='blue' /> Account :
                    <button type="button" data-bs-toggle="modal" data-bs-target="#linkModal" className="btn btn-outline-warning">

                        <FiSettings />
                    </button>
                    <div>{setting.linkedinUrl}

                    </div>
                </div>
                <div className='col'>
                    <div>
                        Your <FcViewDetails />Bio-data:
                        <button type="button" data-bs-toggle="modal" data-bs-target="#bioModal" className="btn btn-outline-warning">

                            <FiSettings />
                        </button>
                        <br /><div style={{ marginRight: '100px', fontSize: '16px', overflowX: 'hidden', overflowY: 'scroll', height: '160px' }}>{setting.bio}</div></div></div></div>






        </div>
        {/* -------------------------------------------------------MODALS-------------------------------------- */}
        <div className="modal fade" id="nameModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <input type='text' onChange={(e) => setname(e.target.value)} placeholder='Enter the new name here' />
                        <button type="button" onClick={handlename} className="btn btn-outline-dark">Submit</button>
                    </div>

                </div>
            </div>
        </div>
        <div className="modal fade" id="yearModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <input type='text' onChange={(e)=>setpassoutyear(parseInt(e.target.value))} placeholder='Enter the new Passing out year here' />
                        <button type="button" onClick={handleyear} className="btn btn-outline-dark">Submit</button>
                    </div>

                </div>
            </div>
        </div>
        <div className="modal fade" id="linkModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-body">
                        <input type='text' onChange={(e)=>setlink(e.target.value)} placeholder='Enter the new link here' />

                        <button type="button" onClick={handlelink} className="btn btn-outline-dark">Submit</button>
                    </div>

                </div>
            </div>
        </div>
        <div className="modal fade" id="bioModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-body">
                        <textarea rows='10' cols='28' onChange={(e)=>setBio(e.target.value)} placeholder='Enter the new biodata here' />

                        <button type="button" onClick={handlebio} className="btn btn-outline-dark">Submit</button>
                    </div>

                </div>
            </div>
        </div>
        <div className="modal fade" id="photoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-body">
                        <input type='file' onChange={(e) => setdataimage(e.target.files[0])} accept='image/*' />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={handleimgchange} className="btn btn-primary">Save changes</button>
                    </div>

                </div>
            </div>
        </div>
    </>

    )
}

export default Settings
