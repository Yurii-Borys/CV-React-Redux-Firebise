import React from "react";

const SkillsTable = ({
    skills = [{ type: " ", level: 0 }],
    skillsTitle,
    changeSkills,
}) => {
    const handleAddValue = () => {
        let newList = [...skills, { type: " ", level: 0 }];
        changeSkills(newList);
    };

    const handleDeleteValue = (skillPosition) => {
        let newList = skills.filter((_, index) => index !== skillPosition);
        changeSkills(newList);
    };

    const handleEditValue = (value, index, type) => {
        let newList = skills.map((skill, skillPosition) => {
            if (index === skillPosition) {
                return { ...skill, [type]: value };
            }
            return skill;
        });
        changeSkills(newList);
    };

    return (
        <section className="skills__content">
            <h3 className="skills__title">{skillsTitle || " "}</h3>
            <div className="admin__skills__type">
                {skills?.map((skill, index) => (
                    <div className="admin__skills__type-div" key={index}>
                        <input
                            type="text"
                            className="admin__skills-input-text"
                            value={skill?.type}
                            onChange={(e) =>
                                handleEditValue(e.target.value, index, "type")
                            }
                        />
                        <input
                            className="admin__skills-input-range"
                            type="range"
                            min="1"
                            max="100"
                            value={skill?.level}
                            onChange={(e) =>
                                handleEditValue(e.target.value, index, "level")
                            }
                        />
                        <label htmlFor="range">{skill?.level}%</label>

                        <div
                            className="admin__skills-button-delete"
                            onClick={() => handleDeleteValue(index)}
                        >
                            <i className="uil uil-times"></i>
                        </div>
                    </div>
                ))}
                <div
                    className="admin__skills-uil-add"
                    onClick={() => handleAddValue()}
                >
                    <i className="uil uil-plus-circle"></i>
                </div>
            </div>
        </section>
    );
};

export default SkillsTable;
