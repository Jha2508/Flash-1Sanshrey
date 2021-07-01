import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../sources/sociallogo.png"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom"


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="landing-nav">
                <div className="landing-logo">
                    <img className="navbar-logo" alt='...' src={Logo} /><span>Sanshreya</span>
                </div>
                <ul className="landing-nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/ourteam">Our Team</Link></li>
                    <li><ImCross className="landing-toggle" onClick={() => setOpen(!open)} /></li>
                </ul>
                <FaBars className="landing-toggle" onClick={() => setOpen(!open)} />

            </nav>


        </>
    )
}

export default Navbar

