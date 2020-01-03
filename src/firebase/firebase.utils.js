import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  // authDomain: 'crwn-db.firebaseapp.com',
  // databaseURL: 'https://crwn-db.firebaseio.com',
  // projectId: 'crwn-db',
  // storageBucket: 'crwn-db.appspot.com',
  // messagingSenderId: '850995411664',
  // appId: '1:850995411664:web:7ddc01d597846f65'
  apiKey: "AIzaSyCGcIVOZoE2UZIIzGIis1hwM_CZLbJRVKc",
  authDomain: "graphqldb.firebaseapp.com",
  databaseURL: "https://graphqldb.firebaseio.com",
  projectId: "graphqldb",
  storageBucket: "graphqldb.appspot.com",
  messagingSenderId: "226883476148",
  appId: "1:226883476148:web:11e1118a809c91741695e1",
  measurementId: "G-W83BNE3VKB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
