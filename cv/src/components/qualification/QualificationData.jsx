import React, { useState } from "react";
import QualificationModal from "./QualificationModal";

const QualificationData = ({ index, data }) => {
    const [IsShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <div className="qualification__data">
                {index % 2 === 1 && (
                    <>
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </>
                )}
                <div style={{ textAlign: "center" }}>
                    <h3 className="qualification__title">
                        {data?.position || " "}
                    </h3>
                    <span className="qualification__subtitle">
                        <i className="uil uil-university qualification__uil"></i>
                        {data?.company || " "}
                    </span>
                    {data?.date && (
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt qualification__uil"></i>
                            {data?.date || " "}
                        </div>
                    )}
                    {data?.showViewMore && (
                        <>
                            <div
                                className="qualification__button"
                                onClick={() => setIsShowModal(true)}
                            >
                                View More
                                <i className="uil uil-arrow-right qualification__button-icon"></i>
                            </div>
                        </>
                    )}
                </div>
                {index % 2 === 0 && (
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                )}
            </div>
            {IsShowModal && (
                <QualificationModal
                    position={data?.position || " "}
                    titleExperience={data?.title_expirience || " "}
                    descriptionExperience={data?.description_expirience || []}
                    closeModal={() => setIsShowModal(false)}
                />
            )}
        </>
    );
};

export default QualificationData;
