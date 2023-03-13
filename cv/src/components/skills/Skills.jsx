import React from "react";
import { useSelector } from "react-redux";
import "./skills.scss";
import SkillsTable from "./SkillsTable";

const Skills = () => {
    const [backSkills, fontSkills, languageSkills] = useSelector((state) => [
        state.user?.currentUser.payload?.back_skills,
        state.user?.currentUser.payload?.font_skills,
        state.user?.currentUser.payload?.languages,
    ]);

    return (
        <section id="skills" className="skills section">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <SkillsTable skills={fontSkills} skillsTitle="Front-End" />
                <SkillsTable skills={backSkills} skillsTitle="Back-End" />
            </div>
            <div className="skills__languages container grid">
                <SkillsTable skills={languageSkills} skillsTitle="Languages" />
            </div>
        </section>
    );
};

export default Skills;
