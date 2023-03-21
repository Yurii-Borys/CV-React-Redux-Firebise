import "./header.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { navBarList } from "../../utils/NavBarList/NavbarList";

const Header = () => {
    const [showToggleMenu, setShowToggleMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("home");
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
                        {navBarList.map((link, id) => {
                            return (
                                <>
                                    <li
                                        className="nav___item"
                                        onClick={() => setActiveNav(link)}
                                        key={link + id}
                                    >
                                        <a
                                            href={`#${link}`}
                                            className={
                                                activeNav === link
                                                    ? "nav__link active-link"
                                                    : "nav__link"
                                            }
                                        >
                                            <i className="uil uil-estate nav__icon"></i>
                                            {link.charAt(0).toUpperCase() +
                                                link.slice(1)}
                                        </a>
                                    </li>
                                </>
                            );
                        })}
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
