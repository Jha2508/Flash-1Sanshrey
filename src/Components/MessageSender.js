import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { MdPhotoLibrary } from "react-icons/md";
import { BsChatSquareFill } from "react-icons/bs";
import "./MessageSender.css";
import firebase from "../firebase";
import InputEmoji from "react-input-emoji";

function MessageSender() {
  const store = firebase.storage()
  const filePickerRef = useRef(null);
  const [PostText, setPostText] = useState('')
  const [PostImage, setPostImage] = useState('')
  const [imageToPost, setImageToPost] = useState(null);
  const [profileinfo, setprofileinfo] = useState('')
  
  const user = firebase.auth().currentUser
  useEffect(() => {
  if(user){
    firebase.firestore().collection('Users').doc(user.uid).get().then((snap) => {setprofileinfo(snap.data())})

}
    
  }, [])
  const handlePosting = () =>{
  const timest = Date.now()
  
  if(user){

    const uploadimage = store.ref(`posts/${user.uid+timest}`).put(PostImage)
    uploadimage.on("state_changed",
    function (snapshot) {
        //if we want to show a loader or something it can be done her
    }, function (errr) {
        // error handling must be done here
    }, function () {
      store.ref(`posts/${user.uid+timest}`).getDownloadURL().then((url) =>{
       let data = {
          caption:PostText,
          likes:[],
          timestamp:timest,
          imageURL:url,
          name:profileinfo.name,
          postID: user.uid+timest,
          userID: user.uid,
          userProfile:profileinfo.image
          
    
        }
        
        firebase.firestore().collection('Users').doc(user.uid).collection('MyPosts').doc(user.uid+timest).set(data)
        firebase.firestore().collection('AllPost').doc(user.uid+timest).set(data).then(alert('done dana done done!'))
      })
    })
  }
     
  
  
   
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Done");
  };
  const [text, setText] = useState("");

  function handleOnEnter() {
    console.log("enter", text);
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      
    setPostImage(e.target.files[0])
      reader.readAsDataURL(e.target.files[0]);
      console.log("Photo Done");
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <IconContext.Provider value={{ size: 18, className: "react-icons" }}>
          <BsChatSquareFill />
        </IconContext.Provider>
        <form>
         
          <InputEmoji
            rows={(imageToPost===null)?'2':'10'} 
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind`}
            onChange={setText}
            onEnter={handleOnEnter}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
        {imageToPost && (
          <div className="Preview" onClick={removeImage}>
            <img src={imageToPost} alt="" />
          </div>
        )}
      </div>

      <div className="messageSender__bottom">
        <div
          onClick={() => filePickerRef.current.click()}
          className="messageSender__option"
        >
          <IconContext.Provider value={{ color: "#90ee90", size: 25 }}>
            <MdPhotoLibrary />
            <h3>Upload Photo</h3>
          </IconContext.Provider>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="messageSender__option">
          <IconContext.Provider value={{ color: "gold", size: 25 }}>
           
          </IconContext.Provider>
        </div>
        <div className="messageSender__option">
<button type="button" onClick={()=>handlePosting()} className="btn btn-outline-light">Post</button>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
