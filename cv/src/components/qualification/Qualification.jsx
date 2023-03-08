import React, { useState } from "react";
import "./qualification.scss";
import QualificationData from "./QualificationData";

const Qualification = () => {
    const [toogleState, setToogleState] = useState(1);

    const toggleTab = (index) => {
        setToogleState(index);
    };

    const qualificationExpirience = [
        {
            position: "Web Developer",
            company: "Itex",
            date: "2022-2023",
            showViewMore: true,
            titleExpirience:
                "Develep web appliactions – NFT games, marketplace, pictures",
            descriptionExpirience: [
                "Designed dynamic and multi-browser compatible pages using HTML5, CSS3, FLEX, GRID, SASS, JavaScript, ECMA Script 6, React ( React Function Components ), NEXT JS.",
                "Planned website development, converting mockups( Figma ) into usable web presence.",
            ],
        },
        {
            position: "Full Stack",
            company: "Cyber Craft",
            date: "2021-2022",
            showViewMore: true,
            titleExpirience:
                "web platform for Senior Housing and HealthScare Real State",
            descriptionExpirience: [
                "Created reusable styled components using CSS3 preprocessors like SCSS.",
                "Created React hooks - fetch, input, loader, validation etc.",
            ],
        },
        {
            position: "Full Stack",
            company: "Cyber Craft",
            date: "2021-2022",
            showViewMore: true,
            titleExpirience: "lorem10",
            descriptionExpirience: [
                "Estimated work hours and tracked progress using Scrum methodology.",
                "	Used Firebase like a database.",
            ],
        },
    ];

    const qualificationEducation = [
        {
            position: "Fron-End",
            company: "Soft Serve",
            date: "",
            showViewMore: false,
        },
        {
            position: "Full Stack",
            company: "LITS",
            date: "",
            showViewMore: false,
        },
        {
            position: "Full Stack",
            company: "LITS",
            date: "",
            showViewMore: false,
        },
    ];

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
