import React, { useState } from "react";
import "./main.scss";
import GeneralInformation from "../generalInformation/GeneralInformation";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";

const Main = () => {
    const [activeNav, setActiveNav] = useState("general information");

    let list = {
        "general information": GeneralInformation,
        "education": Education,
        "experience": Experience,
        "skills": Skills,
        "qualification": null,
    };

    const DynamicComponent = [
        GeneralInformation,
        Education,
        Experience,
        Skills,
    ].find((component) => component === list[activeNav]);

    return (
        <section className="section">
            <div className="tabs-container">
                <ul className="nav_admin__list">
                    {Object.keys(list).map((item, id) => {
                        return (
                            <li
                                className={
                                    activeNav === item
                                        ? "nav_admin___item nav_admin___item_active"
                                        : "nav_admin___item"
                                }
                                onClick={() => {
                                    setActiveNav(item);
                                }}
                                key={item + id}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </li>
                        );
                    })}
                </ul>
                <div className="tabs-admin__block">
                    <DynamicComponent />
                </div>
            </div>
        </section>
    );
};

export default Main;
