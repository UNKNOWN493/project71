import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyAk2y2mkWl2o22ZH5WxVoWxkTEY8uxYm6c",
    authDomain: "e-ride-74e34.firebaseapp.com",
    projectId: "e-ride-74e34",
    storageBucket: "e-ride-74e34.appspot.com",
    messagingSenderId: "910434277973",
    appId: "1:910434277973:web:148f202cdf2e5932e112dc"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
