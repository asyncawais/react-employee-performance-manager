import '@firebase/firestore';
import * as firebase from 'firebase';

export function getUsers() {
    return (dispatch) => {
        
        firebase.firestore().collection('users')
            .onSnapshot((querySnapshot) => {

                let collection = [];

                querySnapshot.forEach(doc => collection.push({ id: doc.id, ...doc.data()}));

                dispatch(getUsersSuccess(collection));

            }, (error) => console.log(error))
    };
}

export function getUsersSuccess(items) {
    return {
        type: 'GET_USERS_SUCCESS',
        items
    };
}