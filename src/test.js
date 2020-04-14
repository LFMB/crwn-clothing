import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// gets specific doc in collection
firestore.collection('users').doc('cXzMUMDH3A6dO59gJZa8').collection('cartItems').doc('fYJQ8fhP7mnng7nOaUND');

// do the same thing
firestore.doc('/users/cXzMUMDH3A6dO59gJZa8/cartItems/fYJQ8fhP7mnng7nOaUND');
firestore.collection('/users/cXzMUMDH3A6dO59gJZa8/cartItems');





