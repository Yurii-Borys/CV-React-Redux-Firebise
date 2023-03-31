import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./skills.scss";
import SkillsTable from "./SkillsTable";
import { uploadSkillsInformation } from "../../../actions/user";
import { showNotification } from "../../../reducers/notificationReducer";
import Notification from "../../../utils/notification/Notification";

const Skills = () => {
    const [backSkillsList, fontSkillsList, languageSkillsList] = useSelector(
        (state) => [
            state.user?.currentUser.payload?.back_skills,
            state.user?.currentUser.payload?.font_skills,
            state.user?.currentUser.payload?.languages,
        ]
    );
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );

    const dispatch = useDispatch();

    const [backSkills, setBackSkills] = useState(backSkillsList);
    const [frontSkills, setFrontSkills] = useState(fontSkillsList);
    const [languageSkills, setLanguageSkills] = useState(languageSkillsList);

    //Update information firebase/state
    const handleUpdatevalue = () => {
        uploadSkillsInformation(dispatch, {
            backSkills,
            frontSkills,
            languageSkills,
        })
            ? dispatch(
                  showNotification(
                      "Skills information has been updated.",
                      "notification__success"
                  )
              )
            : dispatch(
                  showNotification(
                      "Skills information has not been updated.",
                      "notification__error"
                  )
              );
    };

    return (
        <section id="skills" className="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <SkillsTable
                    skills={frontSkills || [{ type: " ", level: " " }]}
                    skillsTitle="Front-End"
                    changeSkills={(newList) => setFrontSkills(newList)}
                />
                <SkillsTable
                    skills={backSkills || [{ type: " ", level: " " }]}
                    skillsTitle="Back-End"
                    changeSkills={(newList) => setBackSkills(newList)}
                />
            </div>
            <div className="skills__languages container grid">
                <SkillsTable
                    skills={languageSkills || [{ type: " ", level: " " }]}
                    skillsTitle="Languages"
                    changeSkills={(newList) => setLanguageSkills(newList)}
                />
            </div>
            <div className="admin_education__button">
                <button
                    className="button button--flex"
                    onClick={() => handleUpdatevalue()}
                >
                    Save
                    <i className="uil uil-image"></i>
                </button>
            </div>
            {isNotificationVisible && <Notification />}
        </section>
    );
};

export default Skills;
