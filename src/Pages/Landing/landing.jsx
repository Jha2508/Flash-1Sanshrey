import React from 'react'
import Navbar from '../../Components/LandingPage/navbar'
import Mainlogo from '../../Components/LandingPage/mainlogo'
import Login from '../../Components/LandingPage/login'
import './landing.css'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
function Landing() {
    return (
        <>
            <div className="landing-page-body">
                <Navbar />
                <div className="row">
                    <div className="col col-md-6">
                        <Mainlogo />
                        
                <p><IoLogoGooglePlaystore/> Get our App </p>
                    </div>
                    <div className="col col-md-6">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
