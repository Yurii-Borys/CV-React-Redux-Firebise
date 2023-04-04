import React, { useEffect } from "react";
import "./privateMessages.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../../actions/message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../FirebaseInitialize";
import { deleteMessage } from "../../../actions/message";
import { showNotification } from "../../../reducers/notificationReducer";
import Notification from "../../../utils/notification/Notification";

const PrivateMessage = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user?.currentUser.payload.email);
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );

    useEffect(() => {
        const unsub = onSnapshot(
            doc(db, "message", email),
            (doc) => {
                //Updated message object after get firestore
                const message = [];
                Object.entries(doc.data()).forEach(([key, value]) => {
                    let date = new Date(value.time.seconds);
                    message.push({
                        id: key,
                        name: value.saveMassage.name,
                        email: value.saveMassage.email,
                        message: value.saveMassage.message,
                        time: date.toLocaleString("en-GB", {
                            timeZone: "UTC",
                        }),
                    });
                });

                getAllMessages(dispatch, message);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => {
            unsub();
        };
    }, []);

    const messages = useSelector((state) => state.messages.allMessages.payload);

    //Delete meessage firebase
    const handleDeleteMessage = (messageId) => {
        deleteMessage(dispatch, messageId, email)
            ? dispatch(
                  showNotification(
                      "Message has been deleted.",
                      "notification__success"
                  )
              )
            : dispatch(
                  showNotification(
                      "Message has not deleted.",
                      "notification__error"
                  )
              );
    };

    
    return (
        <section>
            <h2 className="section__title">Message</h2>
            <span className="section__subtitle">Sent messages</span>
            <div className="message__container container grid">
                {messages?.map((message) => (
                    <div className="message__content" key={message?.id || " "}>
                        <div>
                            <span>Sender: </span> {message?.name || " "}
                        </div>
                        <div>
                            <span>Email: </span>
                            {message?.email || " "}
                        </div>
                        <div>
                            <span>Message: </span>
                            {message?.message || " "}
                        </div>
                        <div>
                            <span>Time: </span>
                            {message?.time || " "}
                        </div>
                        <div
                            className="message__button-delete"
                            onClick={() => handleDeleteMessage(message?.id)}
                        >
                            <i className="uil uil-times"></i>
                        </div>
                    </div>
                ))}
            </div>
            {isNotificationVisible && <Notification />}
        </section>
    );
};

export default PrivateMessage;
