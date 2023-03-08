import React from "react";

const QualificationModal = ({
    position,
    titleExpirience,
    descriptionExpirience,
    closeModal,
}) => {
    return (
        <div className="qualifications__modal">
            <div className="qualifications__modal-content">
                <i
                    className="uil uil-times qualifications__modal-close"
                    onClick={() => closeModal()}
                ></i>
                <h3 className="qualifications__modal-title">{position}</h3>
                <p className="qualifications__modal-description">
                    {titleExpirience}
                </p>
                <ul className="qualifications__modal-qualifications grid">
                    {descriptionExpirience.map((element, index) => (
                        <li
                            className="qualifications__modal-qualification"
                            key={index + element}
                        >
                            <i className="uil uil-check-circle qualifications__modal-icon"></i>
                            <p className="qualifications__modal-info">
                                {element}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QualificationModal;
