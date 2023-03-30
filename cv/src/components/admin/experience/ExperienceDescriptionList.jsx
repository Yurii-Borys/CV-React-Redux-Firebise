import React from "react";

const ExperienceDescriptionList = ({
    descriptionExperience,
    closeModal,
    setExpirienceList,
    experienceListIndex,
}) => {
    const handleDeleteValue = (index) => {
        setExpirienceList(
            descriptionExperience.filter((_, i) => i !== index),
            experienceListIndex
        );
    };
    const handleAddValue = (index) => {
        setExpirienceList([...descriptionExperience.splice(index + 1, 0, " ")]);
    };
    const handleUpdateValue = (NewValue, index) => {
        let newDescriptionExperience = descriptionExperience.map((item, i) => {
            if (i === index) {
                item = NewValue;
            }
            return item;
        });
        setExpirienceList([...newDescriptionExperience], experienceListIndex);
    };
    return (
        <div className="experience__modal">
            <div className="experience__modal-content">
                <i
                    className="uil uil-times experience__modal-close"
                    onClick={() => closeModal()}
                ></i>
                <div className="experience__modal-experience grid">
                    {descriptionExperience.map((item, index) => (
                        <div
                            className="experience-description__form-div"
                            key={index}
                        >
                            <div>
                                <i
                                    className="uil uil-times"
                                    onClick={() => handleDeleteValue(index)}
                                ></i>
                            </div>
                            <div className="experience__uil-add">
                                <i
                                    className="uil uil-plus-circle"
                                    onClick={() => handleAddValue(index)}
                                ></i>
                            </div>
                            <textarea
                                className="experience__modal-textarea"
                                type="text"
                                placeholder={"Write down the job information"}
                                onChange={(e) =>
                                    handleUpdateValue(e.target.value, index)
                                }
                                value={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceDescriptionList;
