import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const BackEnd = () => {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const skills = [
        { type: "HTML, CSS", level: 20 },
        { type: "CSS", level: 60 },
        { type: "JavaScript", level: 87 },
        { type: "BootStrap", level: 90 },
    ];
    return (
        <div className="skills__content">
            <h3 className="skills__title" ref={elementRef}>
                Back-End
            </h3>

            <div className={`${isOnScreen ? "" : "collapsed"}`}>
                <ul className="skills__type">
                    {skills.map((skill) => (
                        <div
                            className="skills-border"
                            key={skill.type}
                            skilltype={skill.type}
                        >
                            <li
                                key={skill.type}
                                style={{
                                    width: `${skill.level}%`,
                                    backgroundColor: `hsla(248, 5%, 0%, ${
                                        (skill.level / 100) * 0.85
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

export default BackEnd;
