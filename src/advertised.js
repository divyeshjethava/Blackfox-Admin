import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

  var adid = document.getElementById("adid");  
  var adtitle = document.getElementById("adtitle"); 
  var addec = document.getElementById("addic"); 
  var adescrip = document.getElementById("adecrip"); 
  var adbtn =   document.getElementById("adbutton");


  var adimg = document.getElementById("adimg");
  adimg.addEventListener('change',function(e){
    
   
    adbtn.disabled = true;
    var adid = document.getElementById("adid").value; 
    var file=e.target.files[0];

    const metadata = {
        contentType: 'image/jpeg'
      };

      const storageRef = sRef(storage, 'advwertisedment/'+adid+'/'+"adImage");

        
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
     
      const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if(progress == 100)
      {
        
      
        adbtn.disabled = false; 
        alert('image uploaded');

      }

      });
  });
  document.getElementById("adbutton").addEventListener("click", () => {
    var adid = document.getElementById("adid").value;  
    var adtitle = document.getElementById("adtitle").value; 
    var addec = document.getElementById("addic").value; 
    var adescrip = document.getElementById("adecrip").value; 
    const storageRef = sRef(storage, 'advwertisedment/'+adid+'/'+"adImage");

    getDownloadURL(storageRef).then((url) =>{
        const result = set(ref(db,'Advertiesement/'+adid), {
            adid:adid,
            title:adtitle,
            image:url,
            descript:adescrip,
            discount:addec
        });
        alert('DATA IS UPLOADED SUCCESSFULLY');
        adid.value="";
        adtitle.value="";
        addec.value="";
        adescrip.value="";
        adimg.value="";
    });


  });