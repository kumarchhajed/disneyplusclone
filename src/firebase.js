import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCHoqU-_lKKx28zsEPrEvy0R8Yz7IPWHmY",
  authDomain: "disneyplus-clone-1ac3f.firebaseapp.com",
  projectId: "disneyplus-clone-1ac3f",
  storageBucket: "disneyplus-clone-1ac3f.appspot.com",
  messagingSenderId: "370473104064",
  appId: "1:370473104064:web:c4e7c7e31fc334ac463325",
  measurementId: "G-XMYQL3LP2Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
