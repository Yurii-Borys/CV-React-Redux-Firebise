const GET_USER_INFORMATION = "GET_USER_INFORMATION";
const AUTH_USER = "AUTH_USER";
const SING_OUT_USER = "SING_OUT_USER";

const defaultState = {
    currentUser: {},
    isVisible: false,
    isAuth: false,
    uid: ''
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USER_INFORMATION:
            return {
                ...state,
                currentUser: action.payload,
                    isVisible: true,
            };
        case AUTH_USER:
            return {
                ...state,
                isAuth: true,
            };
        case SING_OUT_USER:
            return {
                ...state,
                isAuth: false,
            };
        default:
            return state
    }
}


export const getUser = user => ({
    type: GET_USER_INFORMATION,
    payload: user
})

export const authUser = () => ({
    type: AUTH_USER
})

export const signOutUser = () => ({
    type: SING_OUT_USER
})