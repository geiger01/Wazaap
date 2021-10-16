import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBGOHMY_VgKOBzodb7Nj4TUhm4UnPcltSk",
    authDomain: "wazaap-23488.firebaseapp.com",
    projectId: "wazaap-23488",
    storageBucket: "wazaap-23488.appspot.com",
    messagingSenderId: "353712948985",
    appId: "1:353712948985:web:ebf967940985fb90284428",
    measurementId: "G-JZFSW7WLX2"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const firebaseService = {
    firebase,
    auth,
    firestore
}