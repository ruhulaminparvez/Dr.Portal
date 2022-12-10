// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBwZ3-50tCvRqQULcYk5uF8wvLCZycJoRw",
  authDomain: "doctors-portal-434f0.firebaseapp.com",
  projectId: "doctors-portal-434f0",
  storageBucket: "doctors-portal-434f0.appspot.com",
  messagingSenderId: "303038848973",
  appId: "1:303038848973:web:b6ffddc0d3e66231ecae84"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;