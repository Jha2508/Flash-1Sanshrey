import React from 'react'
import './settings.css'
import DP from './img1.jpg'
import {ImCamera} from 'react-icons/im'
import Sidebar from '../../Components/sidebar/sidebar'

function Settings() {
    return (<>
    <Sidebar/>
<div className="settings-body marginforside">
        <div className="Heading" >
            <h1>Settings</h1>
        </div>        
        
        <div className="Lower-part"><div className="accordion accordion-flush" id="accordionFlushExample">


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Profile 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
          <div className="prfile-img">
            <img  src={DP} alt="DP"></img>
            <button  id="img-dp"><ImCamera/></button>
        </div>
          <div className="text-area">
            <textarea placeholder="Enter NAME" className="text"/> 
            <button className="btn-upload">Upload</button>
          </div>
            
          <div className="text-area">
            <textarea placeholder="Enter Email ID" className="text"/> 
            <button className="btn-upload">Upload</button>
          </div>
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Privacy
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">

<form>
          <div className="lower-form" >
          <textarea placeholder="Current Password" className="text"  /> 
          <textarea placeholder="New Password" className="text"/> 
          <textarea placeholder="Re-Type new Password" className="text"/> 
          <div className="Lower-btn">
          <button className="btn-upload" id="save">Save Changes</button>
          <button className="btn-upload" id="cancel">Cancel</button>
          </div>
          </div>   
</form>

      </div>
    </div>
  </div>



</div></div>
        
</div>
</>

    )
}

export default Settings
