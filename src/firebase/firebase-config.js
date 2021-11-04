
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYafI-4tHA3CQ_t7eDRZhQOCrdljQ-cN0",
  authDomain: "appguessmusic.firebaseapp.com",
  projectId: "appguessmusic",
  storageBucket: "appguessmusic.appspot.com",
  messagingSenderId: "145764241535",
  appId: "1:145764241535:web:708b1cfd0e585443632f4a"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
	firebase,
	storage
}
