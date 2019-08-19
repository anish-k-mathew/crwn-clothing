import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAoZztjP1Suh6RCTgBq4_hFi0svKCZzBC4",
  authDomain: "crwn-db-2ec83.firebaseapp.com",
  databaseURL: "https://crwn-db-2ec83.firebaseio.com",
  projectId: "crwn-db-2ec83",
  storageBucket: "",
  messagingSenderId: "780170672885",
  appId: "1:780170672885:web:3176e541fc6bfa6f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user', error.message)
    }
  }
return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
