import React, { useEffect } from "react";
import "./notification.scss";
import { useSelector, useDispatch } from "react-redux";
import { closeNotofication } from "../../reducers/notificationReducer";

const Notification = () => {
    const dispatch = useDispatch();
    const [notificationText, notificationModeStyle] = useSelector((state) => [
        state.notification.notoficationText,
        state.notification.notificationModeStyle,
    ]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeNotofication());
        }, 5000);
    }, []);

    return (
        <div
            className={`notification__contentBox ${notificationModeStyle}`}
            onClick={() => dispatch(closeNotofication())}
        >
            <p>{notificationText}</p>
        </div>
    );
};

export default Notification;
