import React ,{useEffect,useState} from 'react'
import "./rightbar.css"
import { RiRadioButtonLine } from 'react-icons/ri'
import firebase from '../../firebase'

export default function Rightbar() {
    const [allusers, setallusers] = useState([])
    useEffect(() => {
        const ref = firebase.firestore().collection("Users")
        ref.onSnapshot((querySnap) => {
            const newpost = []
            querySnap.forEach(
                (doc) => {
                    newpost.push(doc.data());
                }
            )
            setallusers(newpost)
            

        })
    }, [])
console.log(allusers)
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <center>
                <h2 className="rightbarHead">Explore !</h2>
                </center>
                <center><hr className="rightbarHr" /></center>
                <ul className="rightbarFriendList">
                    {allusers.map((item,index)=>{return(
                        <div key={index} className='row'>
                            <div className='col-10'>
                              <li className="rightbarFriend">
                                <div className="rightbarFriendImgContainer">
                                 <img className="rightbarFriendImg" src={item.image} alt="" />
                                    <span className="rightbarFriendName">{item.name}</span>
                                </div>

                              </li>
                            </div>
                       </div>
 
                    )})}
                </ul>
            </div>

        </div>
    )
}