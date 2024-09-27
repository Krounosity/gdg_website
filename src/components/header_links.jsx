import React from "react";
import "../styles/header.sass";

function HeaderLink({title}){
    return(
        <h1 className="heading" style={{ margin: '0 1vw 0 1vw' }}>{title}</h1>
    )
}

export default HeaderLink;