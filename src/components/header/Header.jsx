import React, { useState } from "react";
import "./header.css";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    const handleClick = (link) => {
        showMenu(false);
        setActiveNav(link);
    }

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Nam</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={activeNav === "#home" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#home")}}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={activeNav === "#about" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#about")}}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#skills")}}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className={activeNav === "#projects" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#projects")}}>
                                <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className={activeNav === "#work" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#work")}}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Work & Education
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav__link active__link" : "nav__link"} onClick={() => {handleClick("#contact")}}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header