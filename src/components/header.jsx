import React from "react";
import '../styles/header.sass';
import headerLinks from'../data/headingLinks.json';
import HeaderLink from "./header_links.jsx";

function Header(){
    return( 
        <header className="App-header">
            <div className="wrap">
                <img src={"/images/logo.png"} id="logo" alt = "GDG logo"></img>
                <a className="heading" href="">GDG RBU</a>
            </div>
            <div className="headers">
                {headerLinks.map(header => (
                    <HeaderLink title={header.title}></HeaderLink>
                ))}
            </div>
        </header>
    )
}

export default Header;