const NOTIFICATION_MODE_ERROR = "NOTIFICATION_MODE_ERROR";
const NOTIFICATION_MODE_SUCCESS = "NOTIFICATION_MODE_SUCCESS";
const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";

const defaultState = {
    notificationModeStyle: " ",
    notoficationText: " ",
    isNotificationVisible: false
}

export default function notificationReducer(state = defaultState, action) {
    switch (action.type) {
        case NOTIFICATION_MODE_ERROR:
            return {
                ...state,
                notificationModeStyle: "notification__error",
                    notoficationText: action.payload.message,
                    isNotificationVisible: true
            };
        case NOTIFICATION_MODE_SUCCESS:
            return {
                ...state,
                notificationModeStyle: "notification__success",
                    notoficationText: action.payload.message,
                    isNotificationVisible: true
            };
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                notificationModeStyle: " ",
                    notoficationText: " ",
                    isNotificationVisible: false
            };
        default:
            return state
    }
}


export const showNotification = (message, notificationMode) => {
    if (notificationMode === "notification__error") {
        return {
            type: NOTIFICATION_MODE_ERROR,
            payload: {
                message
            }
        }
    }

    if (notificationMode === "notification__success") {
        return {
            type: NOTIFICATION_MODE_SUCCESS,
            payload: {
                message
            }
        }
    }

}

export const closeNotofication = () => ({
    type: CLOSE_NOTIFICATION
})