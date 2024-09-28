import React from "react";
import '../styles/header.sass';
import headerLinks from'../data/headingLinks.json';
import HeaderLink from "./header_links.jsx";

function Header(){
    return( 
        <header className="App-header">
            <img src={require("../images/logo.png")} id="logo" alt = "GDG logo"></img>
            <h1 className="heading">GDG RBU</h1>
            <div className="headers">
                {headerLinks.map(header => (
                    <HeaderLink title={header.title}></HeaderLink>
                ))}
            </div>
        </header>
    )
}

export default Header;