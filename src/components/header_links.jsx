import React from "react";
import "../styles/header.sass";

function HeaderLink({title}){
    return(
        <a className="heading" style={{ margin: '0 1vw 0 1vw' }} href="">{title}</a>
    )
}

export default HeaderLink;