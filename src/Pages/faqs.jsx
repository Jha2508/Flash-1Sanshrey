import React from 'react'
import { FaqData, } from '../Components/faqlist'
import './faqs.css'
import Faq from "react-faq-component"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";

const FAQs = () => {
    return (
        <>
            <div className="faq-back-div"><Link to="/"><AiFillHome className="faq-back" size="2em" /></Link></div>
            <div className="faq-body">
                <h1>Frequently Asked Questions</h1>
                <hr />
                <div className="container">
                    <Faq
                        data={FaqData}

                    />
                </div>
            </div>
        </>
    )
}

export default FAQs



