import React from 'react'
import Navbar from '../../Components/LandingPage/navbar'
import Mainlogo from '../../Components/LandingPage/mainlogo'
import Login from '../../Components/LandingPage/login'
import './landing.css'
function Landing() {
    return (
        <>
            <div className="landing-page-body">
                <Navbar />
                <div className="row">
                    <div className="col col-md-6">
                        <Mainlogo />
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
