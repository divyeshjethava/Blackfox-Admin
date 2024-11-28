import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child,update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { listAll } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
  // initialized varibles
  const storage = getStorage();
  const db = getDatabase();


const vid = document.getElementById('vid');
const vtitle = document.getElementById('vtitle');
const vdes  = document.getElementById('vdes');
const inputvid = document.getElementById('ivid');
const vidbtn = document.getElementById('vidBtn');

inputvid.addEventListener('change',function(e){
    const vid = document.getElementById('vid');
    vidbtn.disabled=true;
    var file=e.target.files[0];
    const storageRef = sRef(storage, 'video/' + vid.value);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
    (snapshot) => {
     
      const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if(progress == 100)
      {
                 alert('video uploaded successfully');
                 vidbtn.disabled=false;
      }
      });

});
vidbtn.addEventListener('click', () =>{
    const storageRef = sRef(storage, 'video/' + vid.value);
    const video = ref(db,'video/' +vid.value);
    getDownloadURL(storageRef).then((url) =>{
    const result = {
        v_id : vid.value,
        v_title : vtitle.value,
        description:vdes.value,
        v_url:url
     };
     set(video,result)
     .then(() => {
     
      alert('video is uploaded successfully');
      location.reload();
    
     });
    });
});
const vid_contain = document.getElementById('video_container');

const subCatRef = ref(db, 'video/');
get(subCatRef).then((snapshot) => {
    if(snapshot.exists()){
     
        snapshot.forEach((childSnapshot) => {
          const vid_url = childSnapshot.child('v_url').val();
          const vid = childSnapshot.child('v_id').val();
          const videos = document.createElement('video');
          videos.src = vid_url;
          vid_contain.appendChild(videos);
          videos.addEventListener('click',() => {
              window.location.href='vid_product.html?v_id='+vid;
          });
      
          videos.addEventListener("mouseleave", function() {
            videos.pause();
          });
          
         
          videos.addEventListener("mouseenter", function() {
            videos.play();
          });
        })
      }
 
});

