import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1KXNzszIoL1h3fAqop_mqecevRrnzi3I",
    authDomain: "imessage-clone-faa63.firebaseapp.com",
    databaseURL: "https://imessage-clone-faa63.firebaseio.com",
    projectId: "imessage-clone-faa63",
    storageBucket: "imessage-clone-faa63.appspot.com",
    messagingSenderId: "863839194709",
    appId: "1:863839194709:web:18b4038d0107d7cd664edc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db

