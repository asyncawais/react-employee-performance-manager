import { AUTH_SUCCESS, SIGNOUT_SUCCESS } from "./actions"

const INITIAL_STATE = {
    authenticated: false,
    error: null,
    currentUser: null,
};

export function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                authenticated: true,
                error: null,
                currentUser: action.user,
            }    
        case SIGNOUT_SUCCESS:
            return {
                ...state, 
                authenticated: false,
                error: null,
                currentUser: null,
            }
        default:
            return state
    }
}