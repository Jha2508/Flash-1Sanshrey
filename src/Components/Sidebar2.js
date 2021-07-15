import React, { useState } from "react";
import "./Sidebar.css";
import SearchBarSection from "./SearchBarSection";
import firebase from "../firebase";
import friends from './Friends.json'
function Sidebar2() {
  const [userData, setuserData] = useState([])

    firebase.firestore().collection('Users').onSnapshot((snap)=>{
      const users =[]
      snap.forEach((doc)=>{users.push(doc.data())
      })
      setuserData(users)
    })

 
  return (
    <div>
      <SearchBarSection  data={friends} />
    </div>
  );
}

export default Sidebar2;
