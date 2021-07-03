import React from 'react'
import { TeamList } from '../../Components/LandingPage/teamData'
import './ourTeam.css'
import Dummy from '../../sources/sociallogo.png'
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
                                    <div className="col">

                                        <div className="card bg-dark text-white member-card">
                                            <img src={Dummy} className="card-img profile-img" alt="..." />
                                            <div className="card-img-overlay member-data">
                                                <h5 className="card-title member-name">{items.memName}</h5>
                                                <a href={items.memResume} target="_blank" rel="noreferrer" className="member-link"><button type="button" className="btn btn-info">View Resume</button></a>
                                            </div>
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
