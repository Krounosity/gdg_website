import React from "react";
import '../styles/landing.sass';

import knowUsInfo from "../data/body_card.json";
import techInfo from '../data/tech.json';
import statInfo from '../data/stats.json';
import faqInfo from "../data/faqs.json";

import Stat from "./stat";
import Tech from "./tech";
import KnowUs from "./knowUs";
import FAQ from "./faq";
import Footer from "./footer";

function LandingPage(){ 
    return(
        <>
            {/* Main Section */}
            <div className="landing" style={{display: "grid", justifyContent: "center", textAlign: "center"}}>
                <h1><span style={{color: "#4285f4"}}>G</span><span style={{color: "#db4437"}}>o</span><span style={{color: "#fcb912"}}>o</span><span style={{color: "#4285f4"}}>g</span><span style={{color: "#0f9d58"}}>l</span><span style={{color: "#db4437"}}>e</span> Developer Groups</h1>
                <h2>RBU Chapter</h2>
                <img src={"../images/img1.png"} alt='Main'></img>
                <p>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
                <button style={{fontFamily: "Open Sans", backgroundColor: "#4285f4"}}>JOIN US</button>
            </div>
            
            {/* Add three down arrows */}

            {/* Know about us section. */}
            {knowUsInfo.map(know => (
                <KnowUs title={know.title} image={know.image} color={know.color} content={know.content} alignment={know.alignment}></KnowUs>
            ))}

            {/* Stat */}
            {statInfo.map(stats => (
                <Stat stat={stats.stat} number={stats.number}></Stat>
            ))}

            {/* Technologies. */}
            <h2> Technologies </h2>
            <div className="technologies">
                {techInfo.map(tech => (
                    <Tech name = {tech.tech} logo = {tech.logo} color = {tech.color}></Tech>
                ))}
            </div>

            {/* FAQ section. */}
            <h2> FAQs </h2>
            {faqInfo.map(faq => (
                <FAQ question={faq.question} answer={faq.answer} color={faq.color}></FAQ>
            ))}

            {/* Footer. */}
            <Footer></Footer>
        </>
    )
}

export default LandingPage;