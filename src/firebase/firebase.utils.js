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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
