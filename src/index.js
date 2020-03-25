import '@firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import * as firebase from 'firebase'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import fireBaseConfig from './config'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { verifyAuth } from "../src/data/auth/actions"

import './index.css'

firebase.initializeApp(fireBaseConfig)

const store = configureStore()
const auth = new firebase.auth()

store.dispatch(verifyAuth());

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();

export {
    auth,
}