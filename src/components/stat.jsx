import React from "react";

function Stat({stat, number}){
    return(
        <div className="stat">
            <div className="stat-circle">{number}</div>
            <p>{stat}</p>
        </div>
    )
}

export default Stat;