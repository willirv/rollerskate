import * as firebase from 'firebase';
import { FIREBASE_DATA } from './config/env.js';

var fconfig = {
    apiKey: FIREBASE_DATA.APIKEY,
    authDomain: FIREBASE_DATA.AUTHDOMAIN,
    databaseURL: FIREBASE_DATA.DATABASEURL,
    projectId: FIREBASE_DATA.PROJECTID,
    storageBucket: FIREBASE_DATA.STORAGEBUCKET,
    messagingSenderId: FIREBASE_DATA.MESSAGINGSENDERID
}

firebase.initializeApp(fconfig);

export default firebase