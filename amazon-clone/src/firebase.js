import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeIHMxKYDPW4V1r18gVcFGniq9AXbZRFA",
  authDomain: "clone-5c99c.firebaseapp.com",
  databaseURL: "https://clone-5c99c.firebaseio.com",
  projectId: "clone-5c99c",
  storageBucket: "clone-5c99c.appspot.com",
  messagingSenderId: "834069970404",
  appId: "1:834069970404:web:bcf23ef424a73ddb721bf1",
  measurementId: "G-7XBNBMSSEQ"
};

const firebaseapp= firebase.initializeApp(firebaseConfig)
const db= firebaseapp.firestore();
const auth= firebase.auth();

export{db, auth};