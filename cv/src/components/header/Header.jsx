import "./header.scss";
import React, { useState } from "react";

const Header = () => {
    const [showToggleMenu, setShowToggleMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Yurii
                </a>
                <div
                    className={
                        showToggleMenu ? "nav__menu show__menu" : "nav__menu"
                    }
                >
                    <ul className="nav__list">
                        <li className="nav___item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav___item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav___item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav___item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Qualification
                            </a>
                        </li>
                        <li className="nav___item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className="yil uil-times nav__close"
                        onClick={() => setShowToggleMenu(!showToggleMenu)}
                    ></i>
                </div>

                <div
                    className="nav__toggle"
                    onClick={() => setShowToggleMenu(!showToggleMenu)}
                >
                    <i className="yil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
