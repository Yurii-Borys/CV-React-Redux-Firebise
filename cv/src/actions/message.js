import {
    getMessage
} from '../reducers/messageReducer';
import {
    db
} from "../FirebaseInitialize";

import {
    doc,
    updateDoc,
    deleteField
} from "firebase/firestore";

export const getAllMessages = (dispatch, messages) => {

    dispatch(getMessage({
        payload: messages
    }))
}

export const deleteMessage = async (dispatch, messageId, email) => {

    const messageRef = doc(db, 'message', email);
    try {
        await updateDoc(messageRef, {
            [messageId]: deleteField()
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}