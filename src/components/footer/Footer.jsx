import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nam</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Work & Education</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/tr-nam/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://github.com/TrNam/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-github' ></i>
                    </a>
                    <a href="https://www.instagram.com/itsnemhere/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-instagram' ></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Nam Tran. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;