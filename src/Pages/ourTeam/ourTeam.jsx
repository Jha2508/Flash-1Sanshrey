import React from 'react'
import { TeamList } from '../../Components/LandingPage/teamData'
import './ourTeam.css'
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";

const OurTeam = () => {
    return (
        <>
            <div className="teams-page bg-dark">
                <Link to="/"><AiFillHome className="teams-back" size="2em" /></Link>
                <center>
                    <div className="container">
                        <h1 className="team-heading">Our Team</h1>
                        <hr className="ruler" />
                        <div className="row">
                            {TeamList.map((items, index) => {
                                return (
                                    <div key={index} className="team">
                                        <div className="team-img">
                                            <img src="https://demo.htmlcodex.com/660/team-page-html-template/img/team-2-2.jpg" alt="Team Image" />
                                            <div className="team-social">
                                                <a className="social-fb" href></a>
                                                <a className="social-yt" href></a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2>{items.memName}</h2>
                                            <h3>CEO &amp; Founder</h3>
                                            </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </center>
            </div>

        </>
    )
}

export default OurTeam
