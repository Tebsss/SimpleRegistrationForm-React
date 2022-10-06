import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTOx8t0Oo789rM7ZlRzhHM1TY4hfgmioo",
  authDomain: "registration-form-ce26e.firebaseapp.com",
  databaseURL: "https://registration-form-ce26e-default-rtdb.firebaseio.com",
  projectId: "registration-form-ce26e",
  storageBucket: "registration-form-ce26e.appspot.com",
  messagingSenderId: "803484402249",
  appId: "1:803484402249:web:75c49ba64d50eafd3a3598",
  measurementId: "G-05Q51LWF6Y"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const database = getDatabase(app);

