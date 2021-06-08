import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3Y39pt6mkmcrhgU3KO29lbVs6Tfit8zw",
  authDomain: "disneyplus-clone-b2b38.firebaseapp.com",
  projectId: "disneyplus-clone-b2b38",
  storageBucket: "disneyplus-clone-b2b38.appspot.com",
  messagingSenderId: "631291706299",
  appId: "1:631291706299:web:4343a5e60760025c56e29e",
  measurementId: "G-ZWWR4E1099"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;