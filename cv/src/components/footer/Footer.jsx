import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Yurii Borys</h1>

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
                        href="https://www.linkedin.com/in/yurii-borys-ab3349235/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/Yurii-Borys?tab=repositories"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="bx bxl-github"></i>
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
