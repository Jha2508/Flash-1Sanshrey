import React,{useState}from 'react';
import avatar from './avatar.jpg';
import { FaCircle } from 'react-icons/fa';

function Chatlist(props) {

const [name] = useState(props.name || "Saurabh Dhotre");

  return (
    <div className="app-wrapper">

    <div className="img-box">
      <img src={avatar} alt="picss" />
    </div>

    <div className="userName">
      <h5>{name}</h5>
      <h6>active now</h6>
    </div>

    <div className="icon-box">
      <FaCircle id="icon-dot"/>
    </div>
    </div>
  );
}

export default Chatlist;