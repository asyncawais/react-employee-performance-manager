import '@firebase/firestore';
import * as firebase from 'firebase';

export function createFeedback(item) {
    item.isNewlyCreated = false;
    return (dispatch) => {
        firebase.firestore().collection('feedback')
            .add(item)
            .then(docRef => dispatch(createFeedbackSuccess({id: docRef.id, ...item})))
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
}

export function createFeedbackSuccess(item) {   
    return (dispatch) => {
        dispatch({
            type: 'CREATE_FEEDBACK_SUCCESS',
            item
        })
    };
}