const INITIAL_STATE = {
    data: null
}

export function objective(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_OBJECTIVE_SUCCESS':
            return {
                ...state, 
                data: action.objective
            }
        default:
            return state
    }
}