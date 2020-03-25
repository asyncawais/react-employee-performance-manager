import { auth } from '../../index'

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

export function signIn(email, password) {
    return (dispatch) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(response => dispatch(authSuccess(response)))
            .catch(() => {
                console.log('failed to sign in')
                return
            })
    }
}

export function signOut() {
    console.log('signOut---');
    return (dispatch) => {
        auth.signOut()
            .then(dispatch(signOutSuccess()))
            .catch(function(error) {
                
            });
    }
}

export function verifyAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(authSuccess(user))
            } else {
                
            }
        });
    }
}

export function authSuccess(user) {
    return {
        type: AUTH_SUCCESS,
        user: user,
    }
}

export function signOutSuccess(user) {
    return {
        type: SIGNOUT_SUCCESS
    }
}