import firebase from 'firebase/app'     
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp9Pu1REKPij0AkMUXvRgIZa-uWJDOvuw",
    authDomain: "slack-clone-cbb3f.firebaseapp.com",
    projectId: "slack-clone-cbb3f",
    storageBucket: "slack-clone-cbb3f.appspot.com",
    messagingSenderId: "201897479613",
    appId: "1:201897479613:web:028c4d5575083e414416d4",
    measurementId: "G-LBJPBC6HG7"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export default db
export {auth, provider}