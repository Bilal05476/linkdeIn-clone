import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESS}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASID}`,
});

//for authentication connect with google, (login, sign up)
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
