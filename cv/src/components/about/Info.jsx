import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
    const experienceTime = useSelector(
        (state) => state.user?.currentUser.payload?.comercial_experience_time
    );

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">{experienceTime}</span>
            </div>
        </div>
    );
};

export default Info;
