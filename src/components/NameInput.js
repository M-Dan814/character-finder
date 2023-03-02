import { Link } from "react-router-dom";
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

const Form = (props) => {
  const addUser = () => {
    const user = {
      name: document.querySelector("#name").value,
      time: `${props.hours < 10 ? "0" + props.hours : props.hours}: ${props.minutes < 10 ? "0" + props.minutes : props.minutes}: ${props.seconds < 10 ? "0" + props.seconds : props.seconds}`,
    };
    db.collection("leaderboard")
      .add(user)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <form className="form none">
      <h1>Congratulations!</h1>
      <h3>
        Your Time: {props.hours < 10 ? "0" + props.hours : props.hours}:{" "}
        {props.minutes < 10 ? "0" + props.minutes : props.minutes}:{" "}
        {props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </h3>
      <label htmlFor="name">Please enter your name: </label>
      <input type="text" id="name" />
      <Link id="btn" to="leaderboard" onClick={addUser}>Submit</Link>
    </form>
  );
};

export { Form };
