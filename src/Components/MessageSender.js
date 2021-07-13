import React, { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { MdPhotoLibrary } from "react-icons/md";
import { BsChatSquareFill } from "react-icons/bs";
import "./MessageSender.css";
import InputEmoji from "react-input-emoji";

function MessageSender() {
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

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
          <IconContext.Provider value={{ color: "green", size: 25 }}>
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
<button type="button" className="btn btn-outline-light">Post</button>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
