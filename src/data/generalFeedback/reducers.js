const INITIAL_STATE = {
    showFeedbackForm: true,
    showThankYou: false,
}

export function feedbackForm(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `FORM_SUCCESS`: 
            return {
                ...state, 
                showFeedbackForm: false,
                showThankYou: false,
            }
        default:
            return state
    }
}