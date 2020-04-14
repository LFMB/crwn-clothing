import firebase from 'firebase/app';
// database
import 'firebase/firestore';
// auth 
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


export const createUserProfileDocument = async (userAuth, additionalData) => {
// if userAuth object does not exist
	if(!userAuth){
		return;
	}
	// so if it exists
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const {displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}
	// console.log(snapShot)

	return userRef;

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;