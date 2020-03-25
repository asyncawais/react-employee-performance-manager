import { GET_USER_SUMMARY_SUCCESS } from "./actions"

const INITIAL_STATE = {
    data: {},
};

export function userSummary(state = INITIAL_STATE, action) {

    switch (action.type) {
        case GET_USER_SUMMARY_SUCCESS:
            return {
                ...state, 
                data: action.user,
            }
        default:
            return state
    }
}