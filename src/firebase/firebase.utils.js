import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
  
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return;
    else{
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();
      if (!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
            displayName, email, createdAt, ...additionalData
          })
        }catch(error){}
      }
      return userRef;
    }
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  export default firebase;

