import "./header.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const [showToggleMenu, setShowToggleMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [name, lastName] = useSelector((state) => [
        state.user?.currentUser.payload?.name,
        state.user?.currentUser.payload?.lastName,
    ]);

    // Change background header---------------------------------------------------
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    //---------------------------------------------------------------------------------

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    {name + " " + lastName || "Yurii Borys"}
                </a>
                <div
                    className={
                        showToggleMenu ? "nav__menu show__menu" : "nav__menu"
                    }
                >
                    <ul className="nav__list">
                        <li
                            className="nav___item"
                            onClick={() => setActiveNav("#home")}
                        >
                            <a
                                href="#home"
                                className={
                                    activeNav === "#home"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li
                            className="nav___item"
                            onClick={() => setActiveNav("#about")}
                        >
                            <a
                                href="#about"
                                className={
                                    activeNav === "#about"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li
                            className="nav___item"
                            onClick={() => setActiveNav("#skills")}
                        >
                            <a
                                href="#skills"
                                className={
                                    activeNav === "#skills"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li
                            className="nav___item"
                            onClick={() => setActiveNav("#qualification")}
                        >
                            <a
                                href="#qualification"
                                className={
                                    activeNav === "#qualification"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Qualification
                            </a>
                        </li>
                        <li
                            className="nav___item"
                            onClick={() => setActiveNav("#contact")}
                        >
                            <a
                                href="#contact"
                                className={
                                    activeNav === "#contact"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
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
