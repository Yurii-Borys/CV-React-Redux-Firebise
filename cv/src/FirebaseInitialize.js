import {
    getFirestore
} from "firebase/firestore";
import {
    initializeApp
} from "firebase/app";
import {
    getStorage
} from "firebase/storage";

import config
    from "./config/settings.js";
import {
    getAuth
} from "firebase/auth";


const app = initializeApp(config.firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);