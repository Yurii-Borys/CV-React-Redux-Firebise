import emailjs from '@emailjs/browser';
import config from '../config/settings.js'

export function sendEmailJs(templateParams) {

    const sendEmail = emailjs.send(config.emailJsConfig.SERVICE_ID, config.emailJsConfig.TEMPLATE_ID, templateParams, config.emailJsConfig.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        .catch((error) => {
            console.log(error)
        })

    return {
        sendEmail
    };
}