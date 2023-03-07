import React from "react";
import "./skills.scss";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    );
};

export default Skills;
