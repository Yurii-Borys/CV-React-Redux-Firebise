import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./generalInformation.scss";
import Info from "../../about/Info";
import InputFile from "../../../utils/inputFile/InputFile";
import { showNotification } from "../../../reducers/notificationReducer";
import { uploadPlofileImage } from "../../../actions/user";
import Notification from "../../../utils/notification/Notification";

const GeneralInformation = () => {
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );
    const [aboutDescription, cvPdfUrl, imgBase64] = useSelector((state) => [
        state.user?.currentUser.payload?.about_description,
        state.user?.currentUser.payload?.cv_pdf,
        state.user?.currentUser.payload?.imgBase64,
    ]);
    const dispatch = useDispatch();
    const [profileImage, setProfileImage] = useState(imgBase64);

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
            <section className="general section" id="about">
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
                        {/* <Info />
                    <p className="about__description">
                        {aboutDescription || ""}
                    </p> */}
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
            </section>
            {isNotificationVisible && <Notification />}
        </>
    );
};

export default GeneralInformation;
