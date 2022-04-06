import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ5ULG7yCs9Scyx9qrofoJVvkI61qVqck",
  authDomain: "advis-d626f.firebaseapp.com",
  projectId: "advis-d626f",
  storageBucket: "advis-d626f.appspot.com",
  messagingSenderId: "544079579422",
  appId: "1:544079579422:web:f8a0c8d8a2d6f1af75610f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;