import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyDeJMoAlxTRRiZ6MYX3-Yd_x6nGhyWS_DU",
  authDomain: "movie-app-2fb59.firebaseapp.com",
  projectId: "movie-app-2fb59",
  storageBucket: "movie-app-2fb59.appspot.com",
  messagingSenderId: "758382405547",
  appId: "1:758382405547:web:82a8461f7c286d230b14ee",
  measurementId: "G-083TVDDGMH",

  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });

export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
