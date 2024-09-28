import React from "react";
import '../styles/landing.sass';
import knowUsInfo from "../data/body_card.json";
import KnowUs from "./knowUs";

function LandingPage(){
    return(
        <div style={{display: "grid", justifyContent: "center", textAlign: "center"}}>
            <h1>Google Developer Groups</h1>
            <h2>RBU Chapter</h2>
            <img src={require("../images/img1.png")} ></img>
            <p>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
            <button style={{fontFamily: "Open Sans"}}>JOIN US</button>
        </div>
    )
}

export default LandingPage;