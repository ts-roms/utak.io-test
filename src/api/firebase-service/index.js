import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "./firebase.config";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp)
export { database, ref, set } ;