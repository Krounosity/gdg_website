import React from "react";
import landingImg from "../images/img1.png";
import '../styles/landing.sass';

function LandingPage(){
    return(
        <>
        <h1>Google Developer Groups</h1>
        <h2>RBU Chapter</h2>
        <img src={landingImg}></img>
        <p>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
        <button style={{font_family: "Open Sans"}}>JOIN US</button>
        </>
    )
}