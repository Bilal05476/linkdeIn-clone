import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESS}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
});

//for authentication connect with google, (login, sign up)
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, db, provider, storage };
