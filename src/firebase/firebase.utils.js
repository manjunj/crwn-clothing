import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAXLOKKm-CHeBwuxi_SMcGUuGZMLDS7Sl4",
    authDomain: "crwn-db-fc4f0.firebaseapp.com",
    projectId: "crwn-db-fc4f0",
    storageBucket: "crwn-db-fc4f0.appspot.com",
    messagingSenderId: "843143683635",
    appId: "1:843143683635:web:f17234c1a955cae2b84d46",
    measurementId: "G-M333YR5NQM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  export default firebase;