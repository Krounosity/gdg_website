import React from "react";
import '../styles/tech.sass';

function Tech({name, logo, color}){
    return(
        <div className="tech">
            <hr style={{backgroundColor: color}}></hr>
            <div className="inner-tech">
                <div className="tech-img"><img src={logo}></img></div>
                <p>{name}</p>
                {/* Add down arrow here. */}
            </div>
        </div>
    )
}

export default Tech;