import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: import.meta.env.REACT_APP_API_KEY,
    // authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
    // projectId: import.meta.env.REACT_APP_PROJECT_ID,
    // storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: import.meta.env.REACT_APP_APP_ID,


    apiKey: "AIzaSyBdCTdsXFG5IG1gATKmfApAo09jR-OflJo",
    authDomain: "b8-assignment9.firebaseapp.com",
    projectId: "b8-assignment9",
    storageBucket: "b8-assignment9.appspot.com",
    messagingSenderId: "985637537910",
    appId: "1:985637537910:web:bd0beedc2a5f9c7258f757",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;