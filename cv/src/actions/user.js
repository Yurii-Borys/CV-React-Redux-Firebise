import {
    getUser
} from '../reducers/userReducer';

export const getUserInformation = (dispatch, profileData) => {
    dispatch(getUser({
        payload: {
            ...profileData || {}
        }
    }))
}
