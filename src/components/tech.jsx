import React from "react";
import '../styles/tech.sass';

function Tech({name, logo, color}){
    return(
        <>
            <div className="tech">
            <hr style={{backgroundColor: color}}></hr>
            <div className="inner-tech">
                <img src={logo}></img>
                <p>{name}</p>
                {/* Add down arrow here. */}
            </div>
            </div>
        </>
    )
}

export default Tech;