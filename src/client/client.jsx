import firebase from "firebase/app"
import "@firebase/firestore"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAanBnr0qIRpLxFb99JiHqRH5Ez0ZBgyew",
    authDomain: "tienda-npallares-firebase.firebaseapp.com",
    projectId: "tienda-npallares-firebase",
    storageBucket: "tienda-npallares-firebase.appspot.com",
    messagingSenderId: "804904918584",
    appId: "1:804904918584:web:c9ebf604a3a07bb929d0cd"
  });

  // Initialize Firebase

  export const getFirebase = () =>{
      return firebase.initializeApp(firebaseConfig);
  }

  export const getFirestore =() =>{
      return firebase.firestore(firebaseConfig);
  }

  