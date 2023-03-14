import React from "react";
import "./input.scss";
import { returnFirstError } from "../validations/validation";
import ErrorMsg from "../errorMsg/ErrorMsg";

const Input = (props) => {
    return (
        <div>
            <input
                onChange={props.inputValues.onChange}
                onBlur={props.inputValues.onBlur}
                name={props.name}
                value={props.inputValues.value}
                type={props.type}
                placeholder={props.placeholder}
                className={
                    !props.inputValues.inputValid && props.inputValues.isDirty
                        ? "contact__form-input contact__form-input__error"
                        : "contact__form-input"
                }
            />
            {props.inputValues.isDirty && (
                <ErrorMsg>{returnFirstError(props.inputValues.valid)}</ErrorMsg>
            )}
        </div>
    );
};

export default Input;
