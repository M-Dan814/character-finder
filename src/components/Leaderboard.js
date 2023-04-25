import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const LeaderBoard = () => {
  let i = 0; // For ranking
  const [users, setUsers] = useState([]);
  // Check leaderboards database and populate the table based on entries in the database
  useEffect(() => {
    db.collection("leaderboard")
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          data.sort(function (a, b) {
            // Convert the times to Date objects for comparison
            if (a.time > b.time) {
              return 1;
            } else if (a.time < b.time) {
              return -1;
            } else {
              return 0;
            }
          });
        });
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div className="leader">
        <div className="leader-header">
          <Link id="leader-head" to="/">
            Character Finder
          </Link>
          <h1>Leaderboard</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{++i}</td>
                <td>{user.name}</td>
                <td>{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { LeaderBoard };
