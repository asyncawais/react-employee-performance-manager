const INITIAL_STATE = {
    objectives: [],
    objective: null
}

export function objectives(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_OBJECTIVES_SUCCESS':
            return {
                ...state, 
                objectives: action.items
            }
        default:
            return state
    }
}

export function objective(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'GET_OBJECTIVE_SUCCESS':
            return {
                ...state, 
                objective: action.item
            }
        case 'UPDATE_OBJECTIVE_SUCCESS':
            return {
                ...state,
                objective: null
            }
        case 'CREATE_OBJECTIVE_SUCCESS':
            return {
                ...state,
                objective: action.item
            }
        case 'CLEAR_OBJECTIVE':
            return {
                ...state, 
                objective: null
            }
        case 'ADD_TO_SHARED_WITH':

            let objective = { ...state.objective }

            if (objective.sharedwith.indexOf(action.userId) === -1) {
                objective.sharedwith.push(action.userId)
            }

            return {
                ...state,
                objective 
            }
        case 'REMOVE_FROM_SHARED_WITH':

            return {
                ...state
            }
        case 'CHANGE_OBJECTIVE_STATUS':

            return {
                ...state,
                objective: { ...state.objective, status: action.value }
            }
        default:
            return state
    }
}