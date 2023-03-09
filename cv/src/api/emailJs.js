import emailjs from '@emailjs/browser';
import EmailJsConfig from '../config/settings'

export function sendEmailJs(ref) {
    const sendEmail = emailjs.sendForm(EmailJsConfig.SERVICE_ID, EmailJsConfig.TEMPLATE_ID, ref.current, EmailJsConfig.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    return {
        sendEmail
    };
}