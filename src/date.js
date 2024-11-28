var cdate = new Date();
var cdt = cdate.toLocaleString();
document.getElementById("date").innerHTML=cdt;

// for order


//unique visitor

//Impressions



//follower
let pbar3 = document.querySelector(".loader-con3");
let pvalue3 = 0;
let plastvalue3 = 40;
let speed3 = 10;

let progress3 = setInterval(() => {
  pvalue3++;
  pbar3.style.background = `conic-gradient(
           gold ${pvalue3 * 3.9}deg,
           #cadcff ${pvalue3 * 3.9}deg
           
  )`;
  if (pvalue3 == plastvalue3){

    clearInterval(progress3);
  }
},speed3);

document.getElementById('order').addEventListener('click', () =>{
window.location.href='order.html';
});

document.getElementById('payment').addEventListener('click', () => {
  window.location.href='payment.html';
});