import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./generalInformation.scss";
import InputFile from "../../../utils/inputFile/InputFile";
import { showNotification } from "../../../reducers/notificationReducer";
import {
    uploadPlofileImage,
    uploadPlofileMainInformation,
} from "../../../actions/user";
import Notification from "../../../utils/notification/Notification";
import Input from "../../../utils/input/Input";
import Textarea from "../../../utils/textarea/Textarea";
import useInput from "../../../hooks/useInput";

const GeneralInformation = () => {
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );
    const [
        info,
        name,
        lastName,
        position,
        positionTitle,
        intoduce,
        experienceTime,
        linkendin,
        github,
        skype,
        telegram,
        imgBase64,
    ] = useSelector((state) => [
        state.user?.currentUser.payload,
        state.user?.currentUser.payload.name,
        state.user?.currentUser.payload.lastName,
        state.user?.currentUser.payload.position,
        state.user?.currentUser.payload.position_title,
        state.user?.currentUser.payload?.about_description,
        state.user?.currentUser.payload?.comercial_experience_time,
        state.user?.currentUser.payload?.linkendin,
        state.user?.currentUser.payload?.github,
        state.user?.currentUser.payload?.skype,
        state.user?.currentUser.payload?.telegram,
        state.user?.currentUser.payload?.imgBase64,
    ]);

    const dispatch = useDispatch();
    const [profileImage, setProfileImage] = useState(imgBase64);

    //Inputs hook
    const nameValue = useInput(name, {
        isEmpty: true,
        minLength: 1,
    });
    const lastNameValue = useInput(lastName, {
        isEmpty: true,
        minLength: 1,
    });
    const positionValue = useInput(position, {
        isEmpty: true,
        minLength: 3,
    });
    const positionTitleValue = useInput(positionTitle, {
        isEmpty: true,
        minLength: 3,
    });
    const intoduceValue = useInput(intoduce, {
        isEmpty: true,
        minLength: 3,
    });
    const experienceTimeValue = useInput(experienceTime, {
        isEmpty: true,
        minLength: 3,
    });

    const linkendinValue = useInput(linkendin, {
        isEmpty: true,
        minLength: 3,
    });

    const githubValue = useInput(github, {
        isEmpty: true,
        minLength: 3,
    });
    const skypeValue = useInput(skype, {
        isEmpty: true,
        minLength: 3,
    });
    const telegramValue = useInput(telegram, {
        isEmpty: true,
        minLength: 3,
    });
    // Object list for render inputs
    const generalInformationList = [
        {
            name: "First name",
            label: "First name",
            placeholder: "Insert your first name",
            inputValues: nameValue,
            icon: "uil-pen",
            value: name,
        },
        {
            name: "Last name",
            label: "Last name",
            placeholder: "Insert your first last name",
            inputValues: lastNameValue,
            icon: "uil-pen",
            value: lastName,
        },
        {
            name: "position",
            label: "Positio",
            placeholder: "Insert your position",
            inputValues: positionValue,
            icon: "uil-pen",
            value: position,
        },
        {
            name: "position title",
            label: "Position title",
            placeholder: "Insert your position title",
            inputValues: positionTitleValue,
            icon: "uil-pen",
            value: positionTitle,
        },
        {
            name: "introduce information",
            label: "Introduce information",
            placeholder: "Introduce yourself",
            inputValues: intoduceValue,
            icon: "uil-pen",
            value: intoduce,
        },
        {
            name: "experience time",
            label: "Experience time",
            placeholder: "Insert your comercial experience time",
            inputValues: experienceTimeValue,
            icon: "uil-clock",
            value: experienceTime,
        },
        {
            name: "linkendin",
            label: "Linkendin",
            placeholder: "Insert your linkendin",
            inputValues: linkendinValue,
            icon: "uil-linkedin",
            value: linkendin,
        },
        {
            name: "github",
            label: "Github",
            placeholder: "Insert your github",
            inputValues: githubValue,
            icon: "uil-github",
            value: github,
        },
        {
            name: "skype",
            label: "Skype",
            placeholder: "Insert your skype",
            inputValues: skypeValue,
            icon: "uil-skype",
            value: skype,
        },
        {
            name: "telegram",
            label: "Telegram",
            placeholder: "Insert your telegram",
            inputValues: telegramValue,
            icon: "uil-telegram",
            value: telegram,
        },
    ];
    // Handle update profiles image and profiles main information
    const handleUpdateMainInformation = () => {
        let mainInformation = {
            name: nameValue.value,
            lastName: lastNameValue.value,
            position: positionValue.value,
            position_title: positionTitleValue.value,
            about_description: intoduceValue.value,
            comercial_experience_time: experienceTimeValue.value,
            linkendin: linkendinValue.value,
            github: githubValue.value,
            skype: skypeValue.value,
            telegram: telegramValue.value,
        };
        uploadPlofileMainInformation(dispatch, mainInformation)
            ? dispatch(
                  showNotification(
                      "Profiles main information has been updated.",
                      "notification__success"
                  )
              )
            : dispatch(
                  showNotification(
                      "Profiles main information has not been updated.",
                      "notification__error"
                  )
              );
    };

    const handleUploadProfileImage = () => {
        uploadPlofileImage(dispatch, profileImage)
            ? dispatch(
                  showNotification(
                      "Profiles image has been updated.",
                      "notification__success"
                  )
              )
            : dispatch(
                  showNotification(
                      "Profiles image has not been updated.",
                      "notification__error"
                  )
              );
    };

    return (
        <>
            <section className="general">
                <div>
                    <h2 className="section__title">Profiles picture</h2>
                    <span className="section__subtitle">Edit</span>

                    <div className="general__container container grid">
                        <img
                            src={profileImage}
                            format="svg"
                            alt="Profile"
                            className="general__img"
                        />
                        <div className="general__data">
                            <button className="button button--flex general__download">
                                <InputFile
                                    setImg={(image) => setProfileImage(image)}
                                    typeValidation="image"
                                    multiple={false}
                                />
                                <span>Download image</span>
                                <i className="uil uil-save"></i>
                            </button>
                            <button
                                className="button button--flex"
                                disabled={imgBase64 === profileImage}
                                onClick={() => handleUploadProfileImage()}
                            >
                                Save
                                <i className="uil uil-image"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="general_main__information">
                    <h2 className="section__title">
                        Profiles main information
                    </h2>
                    <span className="section__subtitle">Edit</span>
                    {generalInformationList.map((item) => {
                        return (
                            <div className="general__form-div" key={item.name}>
                                <label className="general__form-tag">
                                    {item.label}
                                    <i className={`uil ${item.icon}`}></i>
                                </label>
                                {item.name === "position title" ||
                                item.name === "introduce information" ? (
                                    <Textarea
                                        type="text"
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        inputValues={item.inputValues}
                                        value={item.value}
                                    />
                                ) : (
                                    <Input
                                        type="text"
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        inputValues={item.inputValues}
                                        value={item.value}
                                    />
                                )}
                            </div>
                        );
                    })}
                    <div className="general__data">
                        <button
                            className="button button--flex"
                            disabled={
                                !nameValue.inputValid ||
                                !lastNameValue.inputValid ||
                                !positionValue.inputValid ||
                                !positionTitleValue.inputValid ||
                                !intoduceValue.inputValid ||
                                !experienceTimeValue.inputValid ||
                                !linkendinValue.inputValid ||
                                !githubValue.inputValid ||
                                !skypeValue.inputValid ||
                                !telegramValue.inputValid
                            }
                            onClick={() => handleUpdateMainInformation()}
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

export default GeneralInformation;
