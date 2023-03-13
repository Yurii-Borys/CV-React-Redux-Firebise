import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./qualification.scss";
import QualificationData from "./QualificationData";

const Qualification = () => {
    const [toogleState, setToogleState] = useState(1);

    const [qualificationEducation, qualificationExpirience] = useSelector(
        (state) => [
            state.user?.currentUser.payload?.qualification_education,
            state.user?.currentUser.payload?.qualification_expirience,
        ]
    );

    const toggleTab = (index) => {
        setToogleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toogleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toogleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Expirience
                    </div>
                </div>

                <div className="qualification__section">
                    <div
                        className={
                            toogleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        {qualificationEducation.map((element, index) => (
                            <QualificationData
                                index={index}
                                key={index + element?.position}
                                data={element}
                            />
                        ))}
                    </div>

                    <div
                        className={
                            toogleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        {qualificationExpirience.map((element, index) => (
                            <QualificationData
                                index={index}
                                key={index + element?.position}
                                data={element}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
