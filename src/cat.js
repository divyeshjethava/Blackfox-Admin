import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyA4B2H-_JzOObgCECHNINNlckvfHeAiuKM",
    authDomain: "blackfox-the-fashion-stu-c124e.firebaseapp.com",
    databaseURL: "https://blackfox-the-fashion-stu-c124e-default-rtdb.firebaseio.com",
    projectId: "blackfox-the-fashion-stu-c124e",
    storageBucket: "blackfox-the-fashion-stu-c124e.appspot.com",
    messagingSenderId: "256903505813",
    appId: "1:256903505813:web:2eff7266b25555ab98789c",
    measurementId: "G-ZMLGX9F0CP"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var a =1;
  var cid =document.getElementById("cid").value;

  const add = document.getElementById("add");
  let pro = document.getElementById("pro");
  let pro1 = document.getElementById("pro1");

 

let inp = document.getElementById("cat-img");
let img1 = document.getElementById("c-image");
let inp1 = document.getElementById("scat-img");
let img2 = document.getElementById("s-image");
const storage = getStorage();
//category image
document.getElementById("cat-img").addEventListener("change", function(){
    pro.classList.add("hidd");
    var cid =document.getElementById("cid").value;
  img1.src=URL.createObjectURL(inp.files[0]);
  var file=inp.files[0];
 
const metadata = {
    contentType: 'image/jpeg'
  };
  const storageRef = sRef(storage, 'catgories/'+ cid);

const uploadTask = uploadBytesResumable(storageRef, file, metadata);
uploadTask.on('state_changed',
  (snapshot) => {
   
    const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if (progress == 100){
        pro.textContent="Image Uploaded Successfully !!!";
    }
   
   
   
  });

});
//sub-category image
document.getElementById("scat-img").addEventListener("change", function(){
  pro1.classList.add("hidd");
  var sname=document.getElementById("sn").value;
img2.src=URL.createObjectURL(inp1.files[0]);
var file=inp1.files[0];

const metadata = {
  contentType: 'image/jpeg'
};
const storageRef = sRef(storage, 'Sub-catgories/'+ sname);

const uploadTask = uploadBytesResumable(storageRef, file, metadata);
uploadTask.on('state_changed',
(snapshot) => {
 
  const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  if (progress == 100){
      pro1.textContent="Image Uploaded Successfully !!!";
  }
 
 
 
});
});
function refreshPage() {
  location.reload();
}
add.addEventListener("click",() => {
  let pro = document.getElementById("pro");
  let pro1 = document.getElementById("pro1");
    var cid =document.getElementById("cid").value;
    var sname=document.getElementById("sn").value;
    var sname1=document.getElementById("sn");
    const sname2 = sname1.options[sname1.selectedIndex].text;
    const storageRef = sRef(storage, 'catgories/'+ cid);
    const storageRef1 = sRef(storage, 'Sub-catgories/'+ sname);
    var cname=document.getElementById("cn");
    const cname1 = cname.options[cname.selectedIndex].text;
    var cback= document.getElementById("cback").value;
 
    var cstatus=1;
   var s = getDownloadURL(storageRef)
  .then((url) => {
    const db = getDatabase();
    set(ref(db, 'main_cat/' + cid), {
       c_id:cid,
       c_name:cname1,
       c_image:url,
       c_status:cstatus,
       cback:cback
      

    });
    getDownloadURL(storageRef1).then((url1) => {
      set(ref(db, 'sub_cat/' + cname1 + '/' + sname), {

        c_id:cid,
        S_id:sname,
        s_name:sname2,
        s_image:url1,
        s_status:cstatus,
        
 
     });
   
     
    });
    
    alert("data uploaded successfully");
   
  });
  
  
});
