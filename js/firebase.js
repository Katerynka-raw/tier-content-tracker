import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = { const firebaseConfig = {
  apiKey: "AIzaSyA6nZPWUHhIK-VSthnXjcip2gB74rgn_W8",
  authDomain: "tier-content-department-8ee30.firebaseapp.com",
  databaseURL: "https://tier-content-department-8ee30-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tier-content-department-8ee30",
  storageBucket: "tier-content-department-8ee30.firebasestorage.app",
  messagingSenderId: "49982737218",
  appId: "1:49982737218:web:ebb8a07e08fc3c0d3096db"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
