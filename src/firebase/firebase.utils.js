import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// find app settings at firebase.com
// used in sign-in.component.jsx

const config = {
	apiKey: "AIzaSyBQCsX8ZMWMCYwsqNT_3fKcmUuhqnmXxZI",
	authDomain: "crwn-db-4f090.firebaseapp.com",
	databaseURL: "https://crwn-db-4f090.firebaseio.com",
	projectId: "crwn-db-4f090",
	storageBucket: "crwn-db-4f090.appspot.com",
	messagingSenderId: "792384078737",
	appId: "1:792384078737:web:e817bc82d522c213e7d030"
};

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;