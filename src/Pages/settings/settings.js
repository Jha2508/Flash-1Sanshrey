import React from 'react'
import './settings.css'
import DP from './img1.jpg'
import {ImCamera} from 'react-icons/im'

function Settings() {
    return (
<div className="settings-body">
        <div className="Heading" >
            <h1>Settings</h1>
        </div>        
        
        <div className="Lower-part"><div class="accordion accordion-flush" id="accordionFlushExample">


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Profile 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
          <div className="prfile-img">
            <img  src={DP} alt="DP"></img>
            <button  id="img-dp"><ImCamera/></button>
        </div>
          <div className="text-area">
            <textarea placeholder="Enter NAME" class="text"/> 
            <button class="btn-upload">Upload</button>
          </div>
            
          <div className="text-area">
            <textarea placeholder="Enter Email ID" class="text"/> 
            <button class="btn-upload">Upload</button>
          </div>
      </div>
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Privacy
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

<form>
          <div className="lower-form" >
          <textarea placeholder="Current Password" class="text"  /> 
          <textarea placeholder="New Password" class="text"/> 
          <textarea placeholder="Re-Type new Password" class="text"/> 
          <div className="Lower-btn">
          <button class="btn-upload" id="save">Save Changes</button>
          <button class="btn-upload" id="cancel">Cancel</button>
          </div>
          </div>   
</form>

      </div>
    </div>
  </div>



</div></div>
        
</div>

    )
}

export default Settings
