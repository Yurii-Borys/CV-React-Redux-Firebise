import {
    getUser
} from '../reducers/userReducer';
import {
    doc,
    updateDoc
} from "firebase/firestore";
import {
    db,
    storage
} from "../FirebaseInitialize";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject
} from "firebase/storage";

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

export const uploadPlofileCV = async (dispatch, file, cvName) => {
    const date = new Date();
    const FileName = date.getTime() + file.name;
    let newPdfUrl = '';

    const storageRef = ref(storage, FileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
        (snapshot) => {
            // // Observe state change events such as progress, pause, and resume
            // // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //     case 'paused':
            //         console.log('Upload is paused');
            //         break;
            //     case 'running':
            //         console.log('Upload is running');
            //         break;
            // }
        },
        (error) => {
            console.log(error);
            return false
        },
        async () => {

            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                newPdfUrl = downloadURL
            });
            if (newPdfUrl) {

                const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
                try {
                    updateDoc(profile, {
                        cv_pdf: newPdfUrl,
                        cv_pdf_name: FileName
                    });
                    
                    //Delete old pdf file
                    const desertRef = ref(storage, cvName);
                    deleteObject(desertRef).then(() => {
                        // File deleted successfully
                    }).catch((error) => {
                        console.log(error)
                    });
                    return true
                } catch (error) {
                    console.log(error)
                    return false
                }
            }
        }

    );
    return true;
}

export const uploadPlofileMainInformation = async (dispatch, {
    ...uploadInformation
}) => {
    const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
    try {
        await updateDoc(profile, {
            ...uploadInformation
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const uploadEducationInformation = async (dispatch, [
    ...uploadInformation
]) => {
    const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
    try {
        await updateDoc(profile, {
            qualification_education: [...uploadInformation]
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const uploadExperienceInformation = async (dispatch, [
    ...uploadInformation
]) => {
    const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
    try {
        await updateDoc(profile, {
            qualification_expirience: [...uploadInformation]
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const uploadSkillsInformation = async (dispatch, {
    backSkills,
    frontSkills,
    languageSkills
}) => {
    const profile = doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz")
    try {
        await updateDoc(profile, {
            back_skills: [...backSkills],
            font_skills: [...frontSkills],
            languages: [...languageSkills],
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}