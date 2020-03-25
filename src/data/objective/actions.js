import '@firebase/firestore'
import * as firebase from 'firebase'

export function getObjective(objectiveId) {
    return (dispatch) => {

        const objectivesRef = firebase.firestore().collection('objectives').doc(objectiveId)

        objectivesRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(getObjectiveSuccess({id: doc.id, ...doc.data()}))
            } else {
                console.log("No such document!")
            }
        }).catch(function(error) {
            console.log("Error getting document:", error)
        })
    }
}

export function getObjectiveSuccess(objective) {
    return {
        type: 'GET_OBJECTIVE_SUCCESS',
        objective
    }
}