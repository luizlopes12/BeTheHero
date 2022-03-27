import firebase from "firebase/compat/app";

import { getAuth } from 'firebase/auth'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const database = firebase.database();

export {firebase, auth, database}
