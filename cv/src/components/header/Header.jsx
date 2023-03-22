import "./header.scss";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navBarList } from "../../utils/NavBarList/NavbarList";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseInitialize";
import { signOutUser } from "../../reducers/userReducer";

const Header = () => {
    const [showToggleMenu, setShowToggleMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("home");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, lastName] = useSelector((state) => [
        state.user?.currentUser.payload?.name,
        state.user?.currentUser.payload?.lastName,
    ]);
    const isAuth = useSelector((state) => state.user.isAuth);

    const logOut = () => {
        auth.signOut()
            .then(() => dispatch(signOutUser()))
            .catch((error) => console.log(error));
    };

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
                        {navBarList
                            .filter((nav) => {
                                if (!isAuth) {
                                    return !(
                                        nav === "admin" || nav === "logout"
                                    );
                                } else return nav;
                            })
                            .map((link, id) => {
                                return (
                                    <li
                                        className="nav___item"
                                        onClick={() => {
                                            setActiveNav(link);
                                            link === "admin" &&
                                                navigate(`/${link}`);
                                            link === "logout" && logOut();
                                        }}
                                        key={link + id}
                                    >
                                        <a
                                            href={
                                                (link === "admin" && " ") ||
                                                (link === "logout" && " ") ||
                                                (link !== "admin" &&
                                                    link !== "logout" &&
                                                    `#${link}`)
                                            }
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
