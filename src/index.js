import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref,set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";



//import { getDatabase, ref, set } from "firebase/database"

const firebaseApp =initializeApp({
   apiKey: "AIzaSyA4B2H-_JzOObgCECHNINNlckvfHeAiuKM",
  authDomain: "blackfox-the-fashion-stu-c124e.firebaseapp.com",
  databaseURL: "https://blackfox-the-fashion-stu-c124e-default-rtdb.firebaseio.com",
  projectId: "blackfox-the-fashion-stu-c124e",
  storageBucket: "blackfox-the-fashion-stu-c124e.appspot.com",
  messagingSenderId: "256903505813",
  appId: "1:256903505813:web:2eff7266b25555ab98789c",
  measurementId: "G-ZMLGX9F0CP"
});


const pname = document.getElementById("pname").value;
const price = document.getElementById("price").value;
const stock = document.getElementById("stock").value;

const deatil = document.getElementById("detail").value;


document.getElementById("upload").addEventListener("click", function(){
    const selected = document.getElementById("select").value;
    const id = document.getElementById("pid").value;
   
        const db = getDatabase();
        set(ref(db, 'woman/' + selected +'/'+id ), {
          Pname: document.getElementById("pname").value,
          PID:document.getElementById("pid").value,
          Price:document.getElementById("price").value,
          Stocks : document.getElementById("stock").value,
          category:document.getElementById("select").value,
          deatils:document.getElementById("detail").value

        });
        alert("data uploaded successfully");
        document.getElementById("pname").value="";
        document.getElementById("pid").value="";
        document.getElementById("price").value="";
        document.getElementById("stock").value="";
        document.getElementById("select").value="";
        document.getElementById("detail").value="";
     
      
});







