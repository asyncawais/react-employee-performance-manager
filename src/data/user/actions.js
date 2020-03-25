import '@firebase/firestore';
import * as firebase from 'firebase';

export function getUser(actionId, id) {
    return (dispatch) => {

        const docRef = firebase.firestore().collection('users').doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(getUserSuccess(actionId, {id: doc.id, ...doc.data()}));
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };
}

export function getUserSuccess(actionId, item) {
    return {
        id: actionId,
        type: `GET_USER_SUCCESS/${actionId}`,
        item
    };
}