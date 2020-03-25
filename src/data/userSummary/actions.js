import '@firebase/firestore'
import * as firebase from 'firebase'

export const GET_USER_SUMMARY_SUCCESS = 'GET_USER_SUMMARY_SUCCESS'

export function getUserSummary(id) {
    return (dispatch) => {

        const docRef = firebase.firestore().collection('users').doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(getUserSummarySuccess({id: doc.id, ...doc.data()}));
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };
}

export function getUserSummarySuccess(user) {
    return {
        type: `GET_USER_SUMMARY_SUCCESS`,
        user
    };
}