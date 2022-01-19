import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQ0T9kjuO6u0mEED1IayYa0ga9CBAeBd0",
    authDomain: "neutrinovpn-4303b.firebaseapp.com",
    projectId: "neutrinovpn-4303b",
    storageBucket: "neutrinovpn-4303b.appspot.com",
    messagingSenderId: "659838306130",
    appId: "1:659838306130:web:2ba3e4e8ed2daafdef1c8b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
