import firebase from "firebase";
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGtZS-5bG9Et7xysXcB0uSgF0ng2S2Y7Q",
    authDomain: "projecteesa.firebaseapp.com",
    databaseURL: "https://projecteesa-default-rtdb.firebaseio.com",
    projectId: "projecteesa",
    storageBucket: "projecteesa.appspot.com",
    messagingSenderId: "314055550864",
    appId: "1:314055550864:web:2d28988b326058a3863515",
    measurementId: "G-NJH0Q6MVDT"
  };
firebase.initializeApp(firebaseConfig)
export default firebase