const INITIAL_STATE = {
    users: [],
}

export function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return {
                ...state, 
                users: action.items
            }
        default:
            return state
    }
}