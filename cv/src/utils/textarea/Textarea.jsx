import React from "react";
import "./textarea.scss";
import { returnFirstError } from "../validations/validation";
import ErrorMsg from "../errorMsg/ErrorMsg";

const Textarea = (props) => {
    return (
        <div>
            <textarea
                onChange={props.inputValues.onChange}
                onBlur={props.inputValues.onBlur}
                name={props.name}
                value={props.inputValues.value}
                type={props.type}
                placeholder={props.placeholder}
                className={
                    !props.inputValues.inputValid && props.inputValues.isDirty
                        ? "textarea textarea__error"
                        : "textarea"
                }
            />
            {props.inputValues.isDirty && (
                <ErrorMsg>{returnFirstError(props.inputValues.valid)}</ErrorMsg>
            )}
        </div>
    );
};

export default Textarea;
