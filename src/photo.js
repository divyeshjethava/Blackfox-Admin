import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";   


const firebaseApp ={
    apiKey: "AIzaSyA4B2H-_JzOObgCECHNINNlckvfHeAiuKM",
   authDomain: "blackfox-the-fashion-stu-c124e.firebaseapp.com",
   databaseURL: "https://blackfox-the-fashion-stu-c124e-default-rtdb.firebaseio.com",
   projectId: "blackfox-the-fashion-stu-c124e",
   storageBucket: "blackfox-the-fashion-stu-c124e.appspot.com",
   messagingSenderId: "256903505813",
   appId: "1:256903505813:web:2eff7266b25555ab98789c",
   measurementId: "G-ZMLGX9F0CP"
 };

 const app =initializeApp(firebaseApp);

