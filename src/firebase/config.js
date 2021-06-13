import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDTqnZuCjGpdK5aDiCgU3ZA8jd8AsjcZiw",
  authDomain: "live-chat-983f6.firebaseapp.com",
  projectId: "live-chat-983f6",
  storageBucket: "live-chat-983f6.appspot.com",
  messagingSenderId: "903723737985",
  appId: "1:903723737985:web:35954f510d7496b4fb7e80",
  measurementId: "G-QQ0CYP0WMY"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }