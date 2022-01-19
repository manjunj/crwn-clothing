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
      const collectionRef = firestore.collection('users');
      const collectionSnapshot = await collectionRef.get();
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
  
  export const addCollectionAndItems = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      // console.log(obj)
      const newDocRef = collectionRef.doc();
      // console.log(newDocRef);
      batch.set(newDocRef,obj);
    })
    await batch.commit();
  }

  export const getCollection = (store)=> store.get().then((querySnapshot) => {
      const collections={};
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        // console.log(doc.id, " => ", doc.data());
          // doc.data() is never undefined for query doc snapshots
          const {items,title} = doc.data();
          // console.log(items)
          const item = {
            items,
            title,
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id
          }
          collections[item.title]=item;
        });
        // console.log(collections);
        return collections
      });

  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  export default firebase;

