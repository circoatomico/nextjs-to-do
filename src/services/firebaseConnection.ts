import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1U6e2Ddm3hh8ICntt7FaViAaQid4k6uw",
  authDomain: "nextjs-todo-dev-ba19f.firebaseapp.com",
  projectId: "nextjs-todo-dev-ba19f",
  storageBucket: "nextjs-todo-dev-ba19f.appspot.com",
  messagingSenderId: "778988781947",
  appId: "1:778988781947:web:d2754e457f2b74d0bf3dde",
  measurementId: "G-PEM479T9K7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;