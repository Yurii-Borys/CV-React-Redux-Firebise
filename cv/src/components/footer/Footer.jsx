import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

const Footer = () => {
    const [name, lastName, linkendin, github] = useSelector((state) => [
        state.user?.currentUser.payload?.name,
        state.user?.currentUser.payload?.lastName,
        state.user?.currentUser.payload?.linkendin,
        state.user?.currentUser.payload?.github,
    ]);
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">{name + " " + lastName}</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">
                            Qualification
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href={linkendin}
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href={github}
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; All rights reserved.{" "}
                </span>
            </div>
        </footer>
    );
};

export default Footer;
