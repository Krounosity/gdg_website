import React from "react";

function Tech({stat, number}){
    return(
        <div className="tech">
            <hr></hr>
            <div className="tech-place">{number}</div>
            <p>{stat}</p>
        </div>
    )
}

export default Tech;