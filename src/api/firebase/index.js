import firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.database();

export default firebaseDatabase;
