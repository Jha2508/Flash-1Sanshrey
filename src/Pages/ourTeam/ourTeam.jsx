import React from 'react'
import { TeamList } from '../../Components/LandingPage/teamData'
import './ourTeam.css'
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import {SiGmail} from 'react-icons/si'
import {GoFilePdf} from 'react-icons/go'
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
                                            <img className='teamimgwow' src={items.memPic} alt="Team Image" />
                                            <div className="team-social">
                                                <a className="social-fb" href={items.memEmail}><SiGmail/></a>
                                                <a className="social-yt" href={items.memResume}><GoFilePdf/></a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2>{items.memName}</h2>
                                            <h3>{items.memRole}</h3>
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
