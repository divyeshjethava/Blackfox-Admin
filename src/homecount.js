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
const orderconunt = document.getElementById('ocount');
  const orderRef = ref(db, 'order_master/');
  get(orderRef).then((snapshot) => {
      const orderItems = snapshot.val();
      var numberOfItems = Object.keys(orderItems).length;
      orderconunt.textContent=numberOfItems;

      var nosell;
 var complete = 0;
 for (const orderId in orderItems) {
    const order = orderItems[orderId];
    const orderRef = ref(db, 'order_master/' + order.order_id + '/order_prod');
    var totalNumberOfItems = 0;
           
    
    // Check if the order_status is equal to 5 (completed)
    if (order.order_status === "5") {
        complete++;
        get(orderRef).then((snapshot) => {
            const orderItems1 = snapshot.val();
            var numberOfItems = Object.keys(orderItems1).length;
            totalNumberOfItems += numberOfItems;
            
            document.getElementById('nos').textContent=totalNumberOfItems


        })
    }
}           let pbar2 = document.querySelector(".loader-con2");
let pvalue2 = 0;
var total = 1000;
var percentage =  Math.round((complete / total) * 100);
let plastvalue2 = percentage;
let speed2 = 10;

let progress2 = setInterval(() => {
  pvalue2++;
  pbar2.style.background = `conic-gradient(
           red ${pvalue2 * 3.9}deg,
           #cadcff ${pvalue2 * 3.9}deg
           
  )`;
  if (pvalue2 == plastvalue2){

    clearInterval(progress2);
  }
},speed2);
     document.getElementById('complete').textContent = complete;
     document.getElementById('sel').textContent = complete;

 nosell =complete;


     var data1 = {
        labels: ['Orders', 'Complete'],
        datasets: [
            {
                label: 'Total Orders & Delivered Oreder',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
               
                data: [numberOfItems, complete],
                fill: true,
                type: 'line'
            }
        ]
    };
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    const stackedLine = new Chart(ctx1, {
        type: 'line',
        data: data1,
        options: {
            scales: {
                y: {
                    stacked: true
                }
            }
        }
    });





     let pbar = document.querySelector(".loader-con");
     let pvalue = 0;
     



var total = 1000;
var percentage =  Math.round((numberOfItems / total) * 100);

let plastvalue = percentage;
let speed = 10;
     
     let progress = setInterval(() => {
       pvalue++;
       pbar.style.background = `conic-gradient(
                #4d5bf9 ${pvalue * 3.9}deg,
                #cadcff ${pvalue * 3.9}deg
                
       )`;
       if (pvalue == plastvalue){
     
         clearInterval(progress);
       }
     },speed);
  })
  const orderRef1 = ref(db, 'payment_master/');
  get(orderRef1).then((snapshot) => {
      const orderItems = snapshot.val();
      var numberOfItems = Object.keys(orderItems).length;
      var totalPayment = 0;

      for (const orderId in orderItems) {
          const payment = orderItems[orderId];
          
    
          if (payment.hasOwnProperty('amount')) {
              totalPayment += parseFloat(payment.amount);
          }
      }
      var profitMargin = 40;
      document.getElementById('uvisitor').textContent = totalPayment.toLocaleString();
      document.getElementById('nop').textContent = numberOfItems;
      document.getElementById('profit').textContent = (totalPayment * profitMargin) / 100;
      document.getElementById('margin').textContent =profitMargin+'%';

























      let pbar1 = document.querySelector(".loader-con1");
      var total = 1000000;


var percentage =  Math.round((totalPayment / total) * 100);

      let pvalue1 = 0;
      let plastvalue1 = percentage;
      let speed1 = 10;
      
      let progress1 = setInterval(() => {
        pvalue1++;
        pbar1.style.background = `conic-gradient(
                 green ${pvalue1 * 3.9}deg,
                 #cadcff ${pvalue1 * 3.9}deg
                 
        )`;
        if (pvalue1 == plastvalue1){
      
          clearInterval(progress1);
        }
      },speed1);
      
   

  })
  

