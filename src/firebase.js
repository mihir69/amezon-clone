import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBE-mvXOqlDH8LoaMxrFUmV5dtjjaQWCqg",
  authDomain: "amezon-367fb.firebaseapp.com",
  projectId: "amezon-367fb",
  storageBucket: "amezon-367fb.appspot.com",
  messagingSenderId: "496357018683",
  appId: "1:496357018683:web:12a670bab59b5b4ac8201e"
};
  // Initialize Firebase
 const firebaseapp =  firebase.initializeApp(firebaseConfig);
 const db =  firebaseapp.firestore();
 const auth = firebaseapp.auth();
 export {db,auth};