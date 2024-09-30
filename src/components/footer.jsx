import React from "react";
import '../styles/footer.sass';

function Footer(){
    return(
        <footer>
            <div className="footer-span">
                <div className="footer-content">
                    <div className="gdg">
                        <img src="/images/logo.png" alt="GDG Logo" style={{height: "3rem", width: "6rem"}}/>
                        <p>Google Developer Groups<br></br>On Campus • Ramdeobaba University</p>
                    </div>
                    <div className="vertical-rule"></div>
                    <div className="info">
                        <p>
                            <span><i class="icon-location"></i>Shri Ramdeobaba College of Engineering and Management<br></br>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013</span><br></br>
                            <span><i class="icon-email"></i>dsc.rknec@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div className="socials">
                    <p>Follow Us:</p>
                    <a className="social-platforms" href="https://www.instagram.com/gdg_rbu/"><img src="/images/insta.png" alt="Instagram" /></a>
                    <a className="social-platforms" href="https://twitter.com/gdsc_rcoem"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
                    <a className="social-platforms" href="https://www.linkedin.com/company/gdsc-rcoem"><img src="/images/twitter.png" alt="Twitter" /></a>
                </div>
            </div>
            <img id="footer-img" src={"/images/footer.png"} alt="Decorative footer" />
        </footer>

    )
}

export default Footer;