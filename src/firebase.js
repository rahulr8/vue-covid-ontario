import firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "covid-19-58a06.firebaseapp.com",
  databaseURL: "https://covid-19-58a06.firebaseio.com",
  projectId: "covid-19-58a06",
  storageBucket: "covid-19-58a06.appspot.com",
  messagingSenderId: "574163657763",
  appId: "1:574163657763:web:c33dbaba7b3e1d4973fd96",
  measurementId: "G-G0DY8QCPSM"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
