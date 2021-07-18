import React ,{useEffect,useState} from 'react'
import "./rightbar.css"
import firebase from '../../firebase'
import { withRouter } from 'react-router-dom'
import person from '../../sources/person.jpeg'
 function Rightbar(props) {
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
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            <center>
                <h2 className="rightbarHead">Explore!</h2></center>
                <center><hr className="rightbarHr" /></center>
                <ul className="rightbarFriendList">
                    {allusers.map((item,index)=>{return(
                        <div key={index} onClick={()=>{
                            props.history.push(`/profile/${item.uid}`)
                            window.location.reload(false);}} className='row'><div className='col-10'>
                        <li className="rightbarFriend">
                            <div className="rightbarFriendImgContainer">
                                <img onError={(e)=>e.target.src = person} className="rightbarFriendImg" src={item. userImg} alt="" />

                                <span className="rightbarFriendName">
                                    {item.name}
                                </span>
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

export default withRouter(Rightbar)