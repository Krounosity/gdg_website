import React from "react";
import '../styles/landing.sass';
import knowUsInfo from "../data/body_card.json";
import KnowUs from "./knowUs";

function LandingPage(){
    return(
        <>
            <div style={{display: "grid", justifyContent: "center", textAlign: "center"}}>
                <h1>Google Developer Groups</h1>
                <h2>RBU Chapter</h2>
                <img src={"../images/img1.png"} alt='Main'></img>
                <p>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
                <button style={{fontFamily: "Open Sans"}}>JOIN US</button>
            </div>
            
            {knowUsInfo.map(know => (
                <KnowUs title={know.title} image={know.image} color={know.color} content={know.content} alignment={know.alignment}></KnowUs>
            ))}
        </>
    )
}

export default LandingPage;