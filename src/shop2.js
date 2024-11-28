import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref ,set, get,child, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
  const db = getDatabase();
  const storage = getStorage();
  var s_id = document.getElementById("shop_id");
var pincode = document.getElementById("pincode");
var address_shop = document.getElementById("shop_address");
var w_no = document.getElementById("w_no");
var imefile = document.getElementById("shopimg");
var spimg = document.getElementById("spimg");
var shop_status = 1 ;
let area = document.getElementById("area");



  document.getElementById('shopimg').addEventListener('change',function(e){
    const subCatRef1 = sRef(storage, 'shops/' +city+s_id.value);
    var file=e.target.files[0];
    
    const metadata = {
      contentType: 'image/jpeg'
    };
    const uploadTask = uploadBytesResumable(subCatRef1, file, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
     
      const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if(progress == 100)
      {
       
       alert("image is uploaded");  
      }
      });
     
  })
  document.getElementById("shopbtn").addEventListener("click", () => {
  


    const subCatRef2 = sRef(storage, 'shops/' +city+s_id.value);
    let branch = "Blackfox-"+" "+city+","+area.value;
    let time = "8:00 AM to 10:00 PM ";
    let sun_time = "Sunday, 8:00 AM to 1:00 PM";
    let day = "Monday - Sunday";
    getDownloadURL(subCatRef2)
    .then((dURL) => {
      
      set(ref(db,'shops/'  + city+s_id.value),{
        s_id:s_id.value,
        branch:branch,
        s_image:dURL,
        address:address_shop.value,
        s_status:1,
        state:state,
        city:city,
        week:day,
        time:time,
        s_time:sun_time

      });
      alert("Shop Detail is uploaded");
      
    })

  })