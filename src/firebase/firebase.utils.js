import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYQYz_Xp_J7wjKM_bL4xsXBrqvomgYANU",
  authDomain: "local-joe-db.firebaseapp.com",
  databaseURL: "https://local-joe-db.firebaseio.com",
  projectId: "local-joe-db",
  storageBucket: "",
  messagingSenderId: "208802152552",
  appId: "1:208802152552:web:185b00ba696c8886"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
