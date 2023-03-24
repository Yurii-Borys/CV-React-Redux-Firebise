import {
    getUser
} from '../reducers/userReducer';
import {
    doc,
    updateDoc
} from "firebase/firestore";
import {
    db
} from "../FirebaseInitialize";

export const getUserInformation = (dispatch, profileData) => {
    dispatch(getUser({
        payload: {
            ...profileData || {}
        }
    }))
}

export const uploadPlofileImage = async (dispatch, image) => {
    const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
    try {
        await updateDoc(profile, {
            imgBase64: image,
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}