import {
    db
} from '../FirebaseInitialize.js';
import {
    doc,
    getDoc
} from "firebase/firestore";
import {
    getUser
} from '../reducers/userReducer';

export const getUserInformation = async (dispatch) => {
    try {
        const docRef = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz");
        const docSnap = await getDoc(docRef);
        dispatch(getUser({
            payload: docSnap.data(),
        }))

    } catch (e) {
        console.log(e)
        return null
    }
}