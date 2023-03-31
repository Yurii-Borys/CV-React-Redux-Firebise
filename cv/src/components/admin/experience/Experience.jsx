import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./experience.scss";
import ExperienceDescriptionList from "./ExperienceDescriptionList";
import Notification from "../../../utils/notification/Notification";
import { uploadExperienceInformation } from "../../../actions/user";
import { showNotification } from "../../../reducers/notificationReducer";

const Experience = () => {
    const [qualification_expirience] = useSelector((state) => [
        state.user?.currentUser.payload.qualification_expirience,
    ]);
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );
    const [IsShowModal, setIsShowModal] = useState(false);
    const [experienceListIndex, setExperienceListIndex] = useState(null);
    const [expirienceList, setExpirienceList] = useState([
        ...qualification_expirience,
    ]);

    const dispatch = useDispatch();

    const handleEditValue = (event, index, keyName) => {
        const newArray = expirienceList;
        newArray.map((item, i) => {
            if (i === index) {
                item[keyName] = event.target.value;
            }
            return item;
        });
        setExpirienceList([...newArray]);
    };
    const handleDeleteValue = (index) => {
        setExpirienceList(expirienceList.filter((_, i) => i !== index));
    };

    const handleUpdateDescriptionlist = (el, index) => {
        let newList = [...expirienceList];
        newList = newList.map((item, i) => {
            if (i === index) {
                return { ...item, description_expirience: el };
            }
            return item;
        });
        setExpirienceList([...newList]);
    };

    //Update information firebase/state
    const handleUpdatevalue = () => {
        uploadExperienceInformation(dispatch, expirienceList)
            ? dispatch(
                  showNotification(
                      "Education information has been updated.",
                      "notification__success"
                  )
              )
            : dispatch(
                  showNotification(
                      "Education information has not been updated.",
                      "notification__error"
                  )
              );
    };

    return (
        <>
            <section className="admin_experience">
                <div>
                    <h2 className="section__title">Experience</h2>
                    <span className="section__subtitle">Edit</span>
                    <div className="admin_experience__form-section">
                        {expirienceList?.map((item, index) => (
                            <div className="admin_experience__form" key={index}>
                                {Object.keys(item)
                                    .sort()
                                    .map((keyName) => {
                                        return (
                                            (!Array.isArray(item[keyName]) && (
                                                <div key={keyName}>
                                                    {
                                                        <div className="admin_experience__form-div">
                                                            <label className="admin_experience__form-tag">
                                                                {keyName}
                                                                <i
                                                                    className={`uil uil-pen`}
                                                                ></i>
                                                            </label>
                                                            <input
                                                                type={"text"}
                                                                value={
                                                                    item[
                                                                        keyName
                                                                    ] || "-"
                                                                }
                                                                onChange={(e) =>
                                                                    handleEditValue(
                                                                        e,
                                                                        index,
                                                                        keyName
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    }
                                                </div>
                                            )) ||
                                            (Array.isArray(item[keyName]) && (
                                                <div
                                                    key={index + "button"}
                                                    className="admin_experience__button"
                                                    onClick={() => {
                                                        setExperienceListIndex(
                                                            index
                                                        );
                                                        setIsShowModal(true);
                                                    }}
                                                >
                                                    Description expirience
                                                    <i className="uil uil-arrow-right admin_experience__button-icon"></i>
                                                </div>
                                            ))
                                        );
                                    })}

                                <i
                                    key={index}
                                    className="uil uil-times education__modal-close"
                                    onClick={() => handleDeleteValue(index)}
                                ></i>
                            </div>
                        ))}
                        <div className="admin_experience__button-add">
                            <i
                                className="uil uil-plus-circle"
                                onClick={() =>
                                    setExpirienceList((prev) => [
                                        ...prev,
                                        {
                                            position: "",
                                            company: "",
                                            date: "",
                                            showViewMore: false,
                                            title_expirience: "",
                                            description_expirience: [" "],
                                        },
                                    ])
                                }
                            ></i>
                        </div>
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
                </div>
            </section>
            {IsShowModal && (
                <ExperienceDescriptionList
                    descriptionExperience={
                        expirienceList[experienceListIndex]
                            .description_expirience || []
                    }
                    experienceListIndex={experienceListIndex}
                    closeModal={() => setIsShowModal(false)}
                    setExpirienceList={(el, index) =>
                        handleUpdateDescriptionlist(el, index)
                    }
                />
            )}
            {isNotificationVisible && <Notification />}
        </>
    );
};

export default Experience;
