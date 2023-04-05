import React, { useRef } from "react";

const ExperienceDescriptionList = ({
    descriptionExperienceList,
    closeModal,
    setExpirienceList,
    experienceListIndex,
}) => {
    const handleDeleteValue = (index) => {
        setExpirienceList(
            descriptionExperienceList.filter((_, i) => i !== index),
            experienceListIndex
        );
    };
    const handleAddValue = () => {
        setExpirienceList(
            [...descriptionExperienceList, " "],
            experienceListIndex
        );
    };
    const handleUpdateValue = (newValue, index) => {
        let newDescriptionExperienceList = descriptionExperienceList.map(
            (item, i) => {
                if (i === index) {
                    item = newValue;
                }
                return item;
            }
        );
        setExpirienceList(
            [...newDescriptionExperienceList],
            experienceListIndex
        );
    };
    //Drag and drop description experience list
    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };

    const drop = (e) => {
        const copyListItems = [...descriptionExperienceList];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setExpirienceList(copyListItems, experienceListIndex);
    };

    return (
        <div className="experience__modal">
            <div className="experience__modal-content">
                <i
                    className="uil uil-times experience__modal-close"
                    onClick={() => closeModal()}
                ></i>
                <div className="experience__modal-experience grid">
                    {descriptionExperienceList.map((item, index) => (
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

                            <textarea
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                draggable
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
                    <div className="experience__uil-add">
                        <i
                            className="uil uil-plus-circle"
                            onClick={() => handleAddValue()}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDescriptionList;
