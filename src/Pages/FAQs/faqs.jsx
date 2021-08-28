import React from 'react'
import './faqs.css'
import Eesa from "../../sources/eesa.png"
import Nitplogo from "../../sources/nitplogo.png"
import Sociallogo from "../../sources/sociallogo.png"

const FAQs = () => {
    return (
        <>
            <div className="faq-body">
                <h1>About Us</h1>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col about_images">
                            <img src={Nitplogo} alt="....." className="about_image" />
                        </div>
                        <div className="col">
                            <p className="about-text">EESA (Electrical Engineering Students Association ) NITP  is a  community that encourages and supports Electrical Engineering students.  It is a newly evolved students community which has come up with the motive of doing hands-on practical experiments, holding webinars, exposure to placement and internships and many more electrifying stuffs.The community looks forward to hold hackathons , tech talks and many more educational and professional activities. It  stands with an aim to
                                provide a platform for Electrical Engineering students to socialise with their peers and to encourage a feeling of community in the electrical engineering stream.</p>

                        </div>
                        <div className="col about_images">
                            <img className="about_image" src={Sociallogo} alt="....." />
                        </div>
                    </div>
                    <div className="row about_content">
                        <div className="col">
                            <p className="about-text">National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions.Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.</p>
                        </div>
                        <div className="col about_images">
                            <img src={Eesa} alt="....." className="about_image" />
                        </div>
                        <div className="col">
                            <p className="about-text">Sanshray is a social media application designed by electrical engineers for electrical engineers of NITP. An application which connects alumni to student community. It lays it's foundation on the purpose to bridge the gap, which is seen among students of their own batch as well as to the alumni.
                            </p>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>
        </>
    )
}

export default FAQs



