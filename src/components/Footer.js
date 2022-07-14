import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-link1">Made with ❤️ and React by</div>
            <a
                target="_blank"
                className="footer-link2"
                href="https://www.linkedin.com/in/bhavyaambastha/"
                rel="noreferrer"
            >
                Bhavya Ambastha
            </a>
        </div>
         
    );
};

export default Footer;
