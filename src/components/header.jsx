import React from "react";
import logo from "../images/logo.png";
import '../styles/header.sass';
import headerLinks from'../data/headingLinks.json';
import HeaderLink from "./header_links.jsx";

function Header(){
    return( 
        <header className="App-header">
            <img src={logo} id="logo" alt = "GDG logo"></img>
            <h1 className="heading">GDG RBU</h1>
            {headerLinks.map(header => (
                <HeaderLink title={header.title}></HeaderLink>
            ))}
        </header>
    )
}

export default Header;