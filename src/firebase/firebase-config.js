
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: "appguessmusic.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
	firebase,
	storage
}
