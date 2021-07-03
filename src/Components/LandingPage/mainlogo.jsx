import React from 'react'
import Logo from "../../sources/sociallogo.png"
import "./mainlogo.css"

const Mainlogo = () => {
    return (
        <div className="row landing-left">
            <div className="col col-md-8 landing-left-1">
                <img src={Logo} alt='... ' className="landing-left-img" />
            </div>
            <div className="col col-md-4 landing-left-2">
                <span>Sanshreya</span>
                <p>Lets Socialize!!</p>
            </div>
        </div>
    )
}

export default Mainlogo
