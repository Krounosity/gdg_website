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
            <div className="arrows">

                {/* Chevron SVGs taken from bootstrap:  https://icons.getbootstrap.com/icons/chevron-down/ */}
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#5F5F5F00" stroke="#5F5F5F33" stroke-width="1.4" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#5F5F5F00" stroke="#5F5F5F99" stroke-width="1.4" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#5F5F5F00" stroke="#5F5F5F" stroke-width="1.4" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>

            </div>

            {/* Know about us section. */}
            <h2 style={{fontSize: "3.6rem", marginTop: "0", marginBottom: "-2rem", color: "#5f5f5f", textAlign: "center"}}>Get To Know Us!</h2>
            {knowUsInfo.map(know => (
                <KnowUs title={know.title} image={know.image} color={know.color} content={know.content} alignment={know.alignment}></KnowUs>
            ))}

            {/* Stat */}
            <div className="allStat">
                {statInfo.map(stats => (
                    <Stat stat={stats.stat} number={stats.number}></Stat>
                ))}
            </div>

            {/* Technologies. */}
            <h2 className="tech-heading"><hr></hr> Technologies <hr></hr></h2>
            <p className="tech-para">Domains That Excite Us to Collaborate and Teach!</p>
            <div className="technologies">
                {techInfo.map(tech => (
                    <Tech name = {tech.tech} logo = {tech.logo} color = {tech.color}></Tech>
                ))}
            </div>

            {/* FAQ section. */}
            <h2 className="faq-heading"> FAQs </h2>
            {faqInfo.map(faq => (
                <FAQ question={faq.question} answer={faq.answer} color={faq.color} height={faq.height}></FAQ>
            ))}
        </>
    )
}

export default LandingPage;