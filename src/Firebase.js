import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcEUIavzlYXklvIqdYMOMaCcFXrSE18rU",
  authDomain: "openinappassignment-acf63.firebaseapp.com",
  projectId: "openinappassignment-acf63",
  storageBucket: "openinappassignment-acf63.appspot.com",
  messagingSenderId: "883556984849",
  appId: "1:883556984849:web:ae4e73bb51ee78d71729b0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
