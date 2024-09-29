import React from "react";
import '../styles/footer.sass';

function Footer(){
    return(
        <footer>
            <div className="footer-span">
                <div className="footer-content">
                    <div className="gdg"></div>
                    <div className="vertical-rule"></div>
                    <div className="info"></div>
                </div>
                <div className="socials"></div>
            </div>
            <img id="footer-img" src={"/images/footer.png"}></img>
        </footer>
    )
}

export default Footer;