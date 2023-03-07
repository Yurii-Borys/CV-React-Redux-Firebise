import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://www.linkedin.com/in/yurii-borys-ab3349235/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href="https://github.com/Yurii-Borys?tab=repositories"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;
