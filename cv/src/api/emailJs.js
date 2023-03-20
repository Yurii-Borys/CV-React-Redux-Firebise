import emailjs from '@emailjs/browser';
import config from '../config/settings.js';


export function sendEmailJs(templateParams) {

    let result = false;
    emailjs.send(config.emailJsConfig.SERVICE_ID, config.emailJsConfig.TEMPLATE_ID, templateParams, config.emailJsConfig.PUBLIC_KEY)
        .then((response) => {
            if (response.text === "Ok") {
                result = true;
            };
        }, (error) => {
            result = false;
            console.log(error.text);
        })
        .catch((error) => {
            console.log(error)
        })

    return {
        result
    };
}