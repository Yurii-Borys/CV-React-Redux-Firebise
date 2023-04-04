import React, { useState } from "react";
import "../input/input.scss";
import ErrorMsg from "../errorMsg/ErrorMsg";
import {
    validateImageFormat,
    validatePdfFormat,
} from "../../utils/validations/validation";
import { getBase64 } from "../formatting/formattingFiles ";

const InputFile = ({ setFile, typeValidation, multiple }) => {
    const [errorMassage, setErrorMassage] = useState("");

    const handleUploadFiles = (e) => {
        if (typeValidation === "pdf") {
            if (!validatePdfFormat(e.target.files[0])) {
                setErrorMassage("Select valid pdf file.");
                return;
            } else {
                setFile(e.target.files[0]);
                setErrorMassage("");
            }
        }
        if (typeValidation === "image") {
            if (!validateImageFormat(e.target.files[0])) {
                setErrorMassage("Select valid image jpg/jpeg/png.");
                return;
            } else {
                // Formating file in base64
                getBase64(e.target.files[0])
                    .then((data) => {
                        setFile(data);
                        console.log("data", data);
                    })
                    .catch((error) => console.log(error));
            }
        }
    };

    return (
        <div>
            <input
                onChange={(e) => {
                    handleUploadFiles(e);
                }}
                type="file"
                className={"contact__form-input contact__form-input__error"}
                multiple={multiple}
            />
            {errorMassage && <ErrorMsg>{errorMassage}</ErrorMsg>}
        </div>
    );
};

export default InputFile;
