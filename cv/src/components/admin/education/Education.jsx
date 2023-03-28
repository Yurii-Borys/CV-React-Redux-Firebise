import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEducationInformation } from "../../../actions/user";
import Notification from "../../../utils/notification/Notification";
import { showNotification } from "../../../reducers/notificationReducer";
import "./experience.scss";

const Education = () => {
    const dispatch = useDispatch();

    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );
    const [info] = useSelector((state) => [
        state.user?.currentUser.payload.qualification_education,
    ]);

    const [educationList, setEducationList] = useState([...info]);

    const handleEditValue = (event, index, keyName) => {
        const newArray = educationList;
        newArray.map((item, i) => {
            if (i === index) {
                item[keyName] = event.target.value;
            }
            return item;
        });
        setEducationList([...newArray]);
    };

    const handleDeleteValue = (index) => {
        setEducationList(educationList.filter((_, i) => i !== index));
    };

    const handleUpdatevalue = () => {
        uploadEducationInformation(dispatch, educationList)
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
            <section className="admin_education">
                <div>
                    <h2 className="section__title">Education</h2>
                    <span className="section__subtitle">Edit</span>
                    <div className="admin_education__form-section">
                        {educationList?.map((item, index) => (
                            <div
                                className="admin_education__form"
                                key={index - 1}
                            >
                                {Object.keys(item).map((keyName) => {
                                    return (
                                        <div key={keyName}>
                                            {keyName.trim() !==
                                                "showViewMore" && (
                                                <div className="admin_education__form-div">
                                                    <label className="admin_education__form-tag">
                                                        {keyName}
                                                        <i
                                                            className={`uil uil-pen`}
                                                        ></i>
                                                    </label>
                                                    <input
                                                        type={"text"}
                                                        value={
                                                            item[keyName] || "-"
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
                                            )}
                                        </div>
                                    );
                                })}
                                <i
                                    key={index}
                                    className="uil uil-times education__modal-close"
                                    onClick={() => handleDeleteValue(index)}
                                ></i>
                            </div>
                        ))}
                        <div className="admin_education__button-add">
                            <i
                                className="uil uil-plus-circle"
                                onClick={() =>
                                    setEducationList((prev) => [
                                        ...prev,
                                        {
                                            position: "",
                                            company: "",
                                            date: "",
                                            showViewMore: false,
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
            {isNotificationVisible && <Notification />}
        </>
    );
};

export default Education;
