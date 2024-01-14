import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT10E8NT49e9ME3FBcD8kJwO8N2mTnJ80",
  authDomain: "sniff-n-paws.firebaseapp.com",
  projectId: "sniff-n-paws",
  storageBucket: "sniff-n-paws.appspot.com",
  messagingSenderId: "143384035412",
  appId: "1:143384035412:web:8f851cc9c35f4004dc6dc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
