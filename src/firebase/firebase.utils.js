import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3XbaUACaoq9-LOcybNWyJFrgSj0e6ePg",
    authDomain: "crwn-db-a3f08.firebaseapp.com",
    projectId: "crwn-db-a3f08",
    storageBucket: "crwn-db-a3f08.appspot.com",
    messagingSenderId: "1073550954532",
    appId: "1:1073550954532:web:1ca97bf6ce9f6419ef08b1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
