import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref ,set, get,child,remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL,deleteObject} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
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


  document.getElementById("cpbtn").addEventListener("click", () => {
    var cop_discount_amt = document.getElementById("cpamt").value;  
    var  cop_disp_discount = document.getElementById("cpoff").value; 
    var cop_discount = document.getElementById("cpdis").value; 
    var cop_description    = document.getElementById("cpdes").value; 
    var cop_expiry_date    = document.getElementById("cpexd").value; 
    var cop_start_date     = document.getElementById("cpdate").value; 
    var cop_order_value    = document.getElementById("cpvalue").value; 
    var cop_type    = document.getElementById("cptype").value; 
    var cop_id=Math.floor(Math.random() * 10000); 
    var cop_code = generateCouponCode(8);
    var cop_status =0;




   
         set(ref(db,'Offers/'+cop_code), {
          cop_discount_amt:cop_discount_amt,
          cop_code:cop_code,
          cop_description:cop_description,
          cop_discount:cop_discount,
          cop_disp_discount:cop_disp_discount,
          cop_expiry_date:cop_expiry_date,
          cop_id:cop_id,
          cop_order_value:cop_order_value,
          cop_start_date:cop_start_date,
          cop_type:cop_type,
          cop_status:cop_status

        
        }).then(() => {
            alert('DATA IS UPLOADED SUCCESSFULLY');
           window.onload
        })
       
 });

 function generateCouponCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      couponCode += characters[randomIndex];
    }
    return couponCode;
  }

  