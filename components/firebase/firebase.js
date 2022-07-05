
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDeDRycwdmHl5uSkBroDIdDNzu7M4OjF3Y",
  authDomain: "chat-app-ce3c5.firebaseapp.com",
  projectId: "chat-app-ce3c5",
  storageBucket: "chat-app-ce3c5.appspot.com",
  messagingSenderId: "201936171434",
  appId: "1:201936171434:web:dbe812cf5ea81fcde43bd3",
  measurementId: "G-3VWYQ4MHF5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

