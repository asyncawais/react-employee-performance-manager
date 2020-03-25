const INITIAL_STATE = {
    user: null
}

export function user(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `GET_USER_SUCCESS/${action.id}`: 
            return {
                ...state, 
                [action.id]: action.item
            }
        default:
            return state
    }
}