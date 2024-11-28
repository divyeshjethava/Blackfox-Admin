import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref ,set, get,child,remove,onValue,update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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


const tbody1 = document.getElementById('tbody4');
var srno =0;

const order_container = document.getElementById('order_con');
function Addtotable(name,phone,date,time,pid,amount){
  let trow = document.createElement('trow');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');
  let td6 = document.createElement('td');
  let td7 = document.createElement('td');
  





  td1.innerHTML = ++srno;
  td2.innerHTML = name;
  td3.innerHTML = phone
 td4.innerHTML = date;
  td5.innerHTML = time;
  td6.innerHTML = pid;
  td7.innerHTML = amount;
 
 
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
 
  tbody1.appendChild(trow);



}

function addAllProduct(product){
    srno = 0;
    tbody1.innerHTML="";
    product.forEach(element => {
      Addtotable(element.name,element.mobile,element.date,element.time,element.paymet_id,element.amount);
    });
  }


  function getdataProduct() {

 
    const subCatRef = ref(db, 'payment_master/');
    get(subCatRef).then((snapshot) => {
          
      var orderdata = [];
  
      snapshot.forEach(childSnapshot =>{
       orderdata.push(childSnapshot.val()) ;
       
    
      });
     addAllProduct(orderdata);
      //console.log(products)

    });
  
  }
  function getdatarealtimeOrder() {

 
    const subCatRef = ref(db, 'payment_master/');
    onValue(subCatRef,(snapshot)=>{
                     
      var orderdata = [];
  
      snapshot.forEach(childSnapshot =>{
       orderdata.push(childSnapshot.val()) ;
       
    
      });
     addAllProduct(orderdata);
    })
  
  }
getdatarealtimeOrder()