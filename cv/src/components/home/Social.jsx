import React from "react";
import { useSelector } from "react-redux";

const Social = () => {
    const [linkendin, github] = useSelector((state) => [
        state.user?.currentUser.payload?.linkendin,
        state.user?.currentUser.payload?.github,
    ]);
    return (
        <div className="home__social">
            <a
                href={linkendin || " "}
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href={github || " "}
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
