import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const SkillsTable = ({ skills, skillsTitle }) => {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    return (
        <div className="skills__content">
            <h3 className="skills__title" ref={elementRef}>
                {skillsTitle || " "}
            </h3>

            <div className={`${isOnScreen ? "" : "collapsed"}`}>
                <ul className="skills__type">
                    {skills?.map((skill) => (
                        <div
                            className="skills-border"
                            key={skill?.type}
                            skilltype={skill?.type}
                        >
                            <li
                                key={skill?.type}
                                style={{
                                    width: `${skill?.level}%`,
                                    backgroundColor: `hsla(248, 5%, 0%, ${
                                        (skill?.level / 100) * 0.85
                                    })`,
                                }}
                            ></li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsTable;
