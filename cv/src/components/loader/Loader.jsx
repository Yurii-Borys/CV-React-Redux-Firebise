import React from "react";
import  "./loader.scss";

const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-roller absolute">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
