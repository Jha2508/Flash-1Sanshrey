import React ,{useEffect,useState} from "react";
import "./Sidebar.css";
import SearchBarSection from "./SearchBarSection";
import firebase from '../firebase'
function Sidebar2() {
  
  const [userData, setuserData] = useState([])
    useEffect(() => {
      
      firebase.firestore().collection('Users').onSnapshot((snap)=>{

        const users =[]
        snap.forEach((doc)=>{
          users.push(doc.data())
        })
        setuserData(users)
      })
    
      
    }, [])
  return (
    <div>
      <SearchBarSection  data={userData} />
    </div>
  );
}

export default Sidebar2;
