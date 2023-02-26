import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const collectionRef = db.collection("coordinates");

const getDatabaseCoordinates = (item) => {
  console.log("Getting coordinates....");
  const query = collectionRef.doc(item);
    return query.get().then((doc) => {
      return doc.data()
    })
};

export { getDatabaseCoordinates };
