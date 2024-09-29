import React from "react";
import '../styles/stat.sass';
import bgImg from "../circle.png";

function Stat({stat, number}){
    return(
        <div className="stat">
            <div className="stat-circle" style={{backgroundImage: `url(${bgImg})`}}><p>{number}</p></div>
            <p>{stat}</p>
        </div>
    )
}

export default Stat;