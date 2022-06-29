import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push, remove, query, update  } from "firebase/database";
import { firebaseConfig } from "./firebase.config";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp)
export { database, ref, set, get, child, push, remove, query, update  } ;