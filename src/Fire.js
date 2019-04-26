import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDUHjQyAfquANQZG2nb0uJTEh3Bra4i9jE",
    authDomain: "cit436-ultimate-final.firebaseapp.com",
    databaseURL: "https://cit436-ultimate-final.firebaseio.com",
    projectId: "cit436-ultimate-final",
    storageBucket: "cit436-ultimate-final.appspot.com",
    messagingSenderId: "896567610060"
};
var fire = firebase.initializeApp(config);


export default fire;