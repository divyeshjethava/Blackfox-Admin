import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase ,set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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
 
function fun(){
    var c = document.getElementById("checked");

    if (c.checked == true) {
       document.getElementById("imurl").classList.add("show");
       
    }else{
        document.getElementById("imurl").classList.remove("show");
        
    }
}
let propic = document.getElementById("mainimg");
let inputimg = document.getElementById("file-up");




inputimg.onchange = function(){
   propic.src = URL.createObjectURL(inputimg.files[0]);
  const mainImg = propic.src;
 
    
}

let add = document.getElementById("cancel");

  
   

const storage = getStorage();

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};
const meta = {
  contentType: 'video/mp4'
};



inputimg.addEventListener('change', (e) => {
  const id = document.getElementById("pid").value;
  // Get the selected file from the input element
  const file = e.target.files[0];

  // Now you can use the 'file' variable in your code
  const storageRef = ref(storage, 'products/'+"woman/"+id+"/"+file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress == 100) {
        alert("inserted")
      }
      
    });

});
let dURL;
let vid=document.getElementById("vid-up");
let upbtn=document.getElementById("video");
upbtn.addEventListener('click', (e) => {
   var files =vid.files;
  for (let i=0 ;i<files.length;i++){
    const file = files[i];
    const storageRef = ref(storage, "video/"+file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, meta);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        
        if (progress == 100) {
          alert("video inserted")
        }
        
      });
     
     getDownloadURL(storageRef)
     .then((dURL) => {
      console.log(dURL);
     })
             
      
        
   
}
 


});




 
    
   
  
    

