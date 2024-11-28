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
  var complete = 0;
var ctx = document.getElementById('myChart').getContext('2d');
const orderRef = ref(db, 'order_master/');
get(orderRef).then((snapshot) => {
    const orderItems = snapshot.val();
    var numberOfItems = Object.keys(orderItems).length;
    for (const orderId in orderItems) {
        const order = orderItems[orderId];

    if (order.order_status === "5") {
        complete++;
    }
}
    const orderRef1 = ref(db, 'payment_master/');
    get(orderRef1).then((snapshot) => {
        const orderItems = snapshot.val();
        var numberOfItems = Object.keys(orderItems).length;
        var totalPayment = 0;
        var profitMargin = 40;
        for (const orderId in orderItems) {
            const payment = orderItems[orderId];
            
      
            if (payment.hasOwnProperty('amount')) {
                totalPayment += parseFloat(payment.amount);
            }
        }
        var profit =(totalPayment * profitMargin) / 100;
var data = {
    labels: ['Total Payment Collection', 'Profits'],
    datasets: [
        {
            label: 'Total Payment Collection & Profits',
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 5,
            data: [totalPayment, profit],
            type: 'bar'
        },
     
    ]
   
};
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: { stacked: true
            },
            y: { stacked: true }
        }
    }
});







var data2 = {
    labels: ['Sells', 'Number Of sell Product'],
    datasets: [
        {
            label:'Sells & Number Of sell Product',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
           
            data: [complete,numberOfItems],
            fill: true,
            type: 'line'
        }
    ]
};
var ctx2 = document.getElementById('myChart2').getContext('2d');
const stackedLine1 = new Chart(ctx2, {
    type: 'line',
    data: data2,
    options: {
        scales: {
            y: {
                stacked: false
            }
        }
    }
});
    })

})