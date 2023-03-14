import { useEffect, useState } from "react";
import { validateEmail } from "../utils/validations/validation";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState({
        valid: true,
        label: "field must not be empty",
    });
    const [minLengthError, setMinLengthError] = useState({
        valid: false,
        label: "too short",
    });
    const [maxLengthError, setMaxLengthError] = useState({
        valid: false,
        label: "too much",
    });
    const [emailError, setEmailError] = useState({
        valid: false,
        label: "email is invalidate",
    });
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    setMinLengthError({
                        ...minLengthError,
                        valid: value.length < validations[validation],
                    });
                    break;
                case "maxLength":
                    value.length > validations[validation]
                        ? setMaxLengthError({ ...maxLengthError, valid: true })
                        : setMaxLengthError({
                              ...maxLengthError,
                              valid: false,
                          });
                    break;
                case "isEmpty":
                    !value
                        ? setEmpty({ ...isEmpty, valid: true })
                        : setEmpty({ ...isEmpty, valid: false });
                    break;
                case "isEmail":
                    !validateEmail(value)
                        ? setEmailError({ ...emailError, valid: true })
                        : setEmailError({ ...emailError, valid: false });
                    break;
                default:
                    setInputValid(true);
            }
        }
    }, [value]);

    useEffect(() => {
        if (
            isEmpty.valid ||
            maxLengthError.valid ||
            minLengthError.valid ||
            emailError.valid
        ) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [
        isEmpty.valid,
        maxLengthError.valid,
        minLengthError.valid,
        emailError.valid,
    ]);

    return {
        valid: [isEmpty, minLengthError, maxLengthError, emailError],
        inputValid,
    };
};
