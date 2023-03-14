import React from "react";
import "./errorMsg.scss";

const ErrorMsg = ({ children, ...props }) => {
    return (
        <p className="error" {...props}>
            {children}
        </p>
    );
};

export default ErrorMsg;
