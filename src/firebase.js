// Import firebase
import * as firebase from 'firebase';
// Import keys for firebase
import { FIREBASE_DATA } from './config/env.js';
// Firebase config 
var fconfig = {
    apiKey: FIREBASE_DATA.APIKEY,
    authDomain: FIREBASE_DATA.AUTHDOMAIN,
    databaseURL: FIREBASE_DATA.DATABASEURL,
    projectId: FIREBASE_DATA.PROJECTID,
    storageBucket: FIREBASE_DATA.STORAGEBUCKET,
    messagingSenderId: FIREBASE_DATA.MESSAGINGSENDERID
}

// Initialise config 
firebase.initializeApp(fconfig);


// Export defult firebase 
export default firebase