import emailjs from '@emailjs/browser';
import config from '../config/settings.js'

export function sendEmailJs(ref) {

    const sendEmail = emailjs.sendForm(config.emailJsConfig.SERVICE_ID, config.emailJsConfig.TEMPLATE_ID, ref.current, config.emailJsConfig.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    return {
        sendEmail
    };
}