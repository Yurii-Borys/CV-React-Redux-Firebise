const GET_MESSAGE = "GET_MESSAGE";


const defaultState = {
    allMessages: []
}

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state, allMessages: action.payload
            }
            default:
                return state


    }
}

export const getMessage = (message) => ({
    type: GET_MESSAGE,
    payload: message
})