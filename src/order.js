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


const tbody1 = document.getElementById('tbody3');
var srno =0;

const order_container = document.getElementById('order_con');
function Addtotable(oid,odate,oprice,ostatus,otime,oadd,ocity,ocountry,oname,ophone,ostate,zipcode){
  let trow = document.createElement('trow');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');
  let td6 = document.createElement('td');
  let td7 = document.createElement('td');
  let td8 = document.createElement('td');
  let td9 = document.createElement('td');
  let td10 = document.createElement('td');
  let td11 = document.createElement('td');
  let td12 = document.createElement('td');
  let td13 = document.createElement('td');
  let edit = document.createElement('i');
 trow.classList.add('otable');
 edit.classList.add('fa','fa-edit');


 td1.classList.add('td1');
 td2.classList.add('td2');
 td3.classList.add('td3');
 td4.classList.add('td4');
 td5.classList.add('td5');
 td6.classList.add('td6');
 td7.classList.add('td7');
 td8.classList.add('td8');
 td9.classList.add('td9');
 td10.classList.add('td10');
 td11.classList.add('td11');
 td12.classList.add('td12');
 td13.classList.add('td13');

  td1.innerHTML = ++srno;
  td2.innerHTML = oname;
  td3.innerHTML = ophone
 td4.innerHTML = oadd;
  td5.innerHTML = oid;
  td6.innerHTML = odate;
  td7.innerHTML = otime;
  td8.innerHTML= oprice;
 td9.innerHTML = ocountry;
  td10.innerHTML = ostate;
  td11.innerHTML = ocity;
  td12.innerHTML = zipcode;
  td13.innerHTML = ostatus;
 
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td10);
  trow.appendChild(td11);
  trow.appendChild(td12);
  trow.appendChild(td13);
  trow.appendChild(edit);
  tbody1.appendChild(trow);

  edit.addEventListener('click', () => {
    
  document.getElementById('updateSta').style.display = 'block';
  
    document.getElementById('confirm1').addEventListener('click',() => {
      const subCatRef11 = ref(db, 'order_master/'+ oid);
   const upstatus = document.getElementById('statusValue').value;

      update(subCatRef11,{
        
        order_status:upstatus

      }).then(function() {
        document.getElementById('updateSta').style.display = 'none';
        
      })

    });

  })

}
document.getElementById('close').addEventListener('click',() => {
  document.getElementById('updateSta').style.display = 'none';
});
document.getElementById('cancel1').addEventListener('click',() => {
  document.getElementById('updateSta').style.display = 'none';
});
function addAllProduct(product){
    srno = 0;
    tbody1.innerHTML="";
    product.forEach(element => {
      Addtotable(element.order_id,element.order_date,element.order_price,element.order_status,element.order_time,element.order_u_address,element.order_u_city,element.order_u_country,element.order_u_name,element.order_u_phone,element.order_u_state,element.order_u_zipcode);
    });
  }


  function getdataProduct() {

 
    const subCatRef = ref(db, 'order_master/');
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

 
    const subCatRef = ref(db, 'order_master/');
    onValue(subCatRef,(snapshot)=>{
                     
      var orderdata = [];
  
      snapshot.forEach(childSnapshot =>{
       orderdata.push(childSnapshot.val()) ;
       
    
      });
     addAllProduct(orderdata);
    })
  
  }
getdatarealtimeOrder()