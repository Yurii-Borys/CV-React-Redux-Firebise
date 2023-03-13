const GET_USER_INFORMATION = "GET_USER_INFORMATION";

const defaultState = {
    currentUser: {},
    isVisible: false,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USER_INFORMATION:
            return {
                ...state,
                currentUser: action.payload,
                    isVisible: true,
            }
            default:
                return state
    }
}


export const getUser = user => ({
    type: GET_USER_INFORMATION,
    payload: user
})