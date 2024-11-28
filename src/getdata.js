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
  //add data for product

var srno = 0;
var tbody = document.getElementById("tbody");
var tbody1 = document.getElementById("tbody1");
let photos = [];
function Addtotable(pname,cp,photo,price,qty,des,cat,clr,size,status,pid){
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
  let cimage = document.createElement('img');
  let btndelete = document.createElement('div');
  let btnupdate = document.createElement('div');
  let action = document.createElement('div');
  let icon1 = document.createElement('i');
  let icon2 = document.createElement('i');
  
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
  cimage.classList.add('cimaes');
  icon1.classList.add('fa','fa-trash');
  icon2.classList.add('fa','fa-edit');
  action.classList.add('action');
  
  icon1.style.marginLeft="4px";
  icon1.style.marginTop="3px";
  icon2.style.marginLeft="4px";
  icon2.style.marginTop="3px";
  btndelete.classList.add('delete');
  btnupdate.classList.add('update');
  for (let i = 0; i < photo.length; i++) {
    let simage = document.createElement('img');
    simage.classList.add('imagesUb');
    simage.src = photo[i];
    simage.style.width = '50px';
    
    td4.appendChild(simage);
  }
  var clrar = [];
  clrar.push(clr);
  if (!clr.length <= 0) {
  
    clrar.forEach(function(color1){
      let color = document.createElement('div');
      color.classList.add('col');
      color.style.backgroundColor = color1;
      color.style.width = '20px';
      color.style.height = '20px';
      td7.appendChild(color);
    })
  }else{
    let tx = document.createElement('span');
    tx.textContent="No Colours Available";
    td7.appendChild(tx);
  }
 
 cimage.src=cp;
 cimage.style.width='50px';
 td3.appendChild(cimage);
  btndelete.appendChild(icon1);
  btnupdate.appendChild(icon2);
 action.appendChild(btndelete);
 action.appendChild(btnupdate);   
  btndelete.style.background="transparent";
  
  
  td1.innerHTML = ++srno;
  td2.innerHTML = pname;

  
 // td4.innerHTML = photo;
  td5.innerHTML = price;
  td10.innerHTML = qty;
  td6.innerHTML = des;
  td11.innerHTML= cat;
 // td7.innerHTML = clr;
  td8.innerHTML = size;
  td9.innerHTML = status;

 td12.appendChild(action);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td10);
  //trow.appendChild(td6);
  trow.appendChild(td11);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td12);
  

  tbody.appendChild(trow);


  btndelete.addEventListener('click', () => {
    document.getElementById('confirmationModal').style.display = 'block';
    document.getElementById('alertimg').src=cp;
    document.getElementById('apname').textContent="Product Name: "+pname;
    document.getElementById('apri').textContent="Product Price: "+"Rs."+price;
    document.getElementById('aqty').textContent="Product Quantity: "+qty;
    document.getElementById('acat').textContent="Product Category: "+cat;
    document.getElementById('confirm').addEventListener('click',() => {
      const getup = ref(db,'Products/' +pid);
      const icover = sRef(storage, 'cover/'+cat+'/'+ pid);
      const storage2Forsub = sRef(storage, 'cover/'+cat+'/'+ pid+'/'+'subImage/');
      remove(getup)
      .then(function() {
        deleteObject(icover).then(() => {
          alert('Product is Deleted Successfully');
          document.getElementById('confirmationModal').style.display = 'none';
         }) 
      })

    });

  })

  btnupdate.addEventListener('click', () => {
   window.location.href="update.html?id="+pid;
})
}
function Addtotable1(pname,cp,photo,price,qty,des,cat,clr,size,status,prid){
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
  let cimage = document.createElement('img');
  let btndelete1 = document.createElement('div');
  let btnupdate1 = document.createElement('div');
  let action = document.createElement('div');
  let icon11 = document.createElement('i');
  let icon12 = document.createElement('i');
  
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
  cimage.classList.add('cimaes');
  icon11.classList.add('fa','fa-trash');
  icon12.classList.add('fa','fa-edit');
  action.classList.add('action');
  
  icon11.style.marginLeft="4px";
  icon11.style.marginTop="3px";
  icon12.style.marginLeft="4px";
  icon12.style.marginTop="3px";
  btndelete1.classList.add('delete');
  btnupdate1.classList.add('update');
  for (let i = 0; i < photo.length; i++) {
    let simage = document.createElement('img');
    simage.classList.add('imagesUb');
    simage.src = photo[i];
    simage.style.width = '50px';
    
    td4.appendChild(simage);
  }
  if (!clr.length <= 0) {
   for (let i = 0; i < clr.length; i++) {
      let color = document.createElement('div');
      color.classList.add('col');
      color.style.backgroundColor = clr[i];
      color.style.width = '20px';
      color.style.height = '20px';
      td7.appendChild(color);
    }
  }else{
    let tx = document.createElement('span');
    tx.textContent="No Colours Available";
    td7.appendChild(tx);
  }
  btndelete1.appendChild(icon11);
  btnupdate1.appendChild(icon12);
 action.appendChild(btndelete1);
 action.appendChild(btnupdate1);  
 btndelete1.style.background="transparent"; 
 cimage.src=cp;
 cimage.style.width='50px';
 td3.appendChild(cimage);
   
    
 action.appendChild(btndelete1);
 action.appendChild(btnupdate1);
  
  td1.innerHTML = ++srno;
  td2.innerHTML = pname;

  
 //td4.innerHTML = photo;
  td5.innerHTML = price;
  td10.innerHTML = qty;
  td6.innerHTML = des;
  td11.innerHTML= cat;
 // td7.innerHTML = clr;
  td8.innerHTML = size;
  td9.innerHTML = status;
  td12.appendChild(action);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td10);
  //trow.appendChild(td6);
  trow.appendChild(td11);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td12);
 
  tbody1.appendChild(trow);

  btndelete1.addEventListener('click', () => {
    alert('product deleted'+prid);
  })
  btnupdate1.addEventListener('click', () => {
    window.location.href="update1.html?id="+prid;
})
}
function addAllProduct(product){
  srno = 0;
  tbody.innerHTML="";
  product.forEach(element => {
    Addtotable(element.p_name,element.cover_image,element.sub_image,element.price,element.quantity,element.description,element.category,element.colour,element.size,element.status,element.p_id);
  });
}
function addAllProduct1(product){
  srno = 0;
  tbody1.innerHTML="";
  product.forEach(element => {
    Addtotable1(element.p_name,element.cover_image,element.sub_image,element.price,element.quantity,element.description,element.category,element.colour,element.size,element.status,element.p_id);
  });
}
//get data from firebase
function getdataProduct() {

 
  const subCatRef = ref(db, 'Products/');
  get(subCatRef).then((snapshot) => {
        
    var products = [];

    snapshot.forEach(childSnapshot =>{
         products.push(childSnapshot.val());
    });
    addAllProduct(products);
  });

}
function getdataProduct1() {

 
  const subCatRef = ref(db, 'B&W Collection/');
  get(subCatRef).then((snapshot) => {
        
    var products = [];

    snapshot.forEach(childSnapshot =>{
         products.push(childSnapshot.val());
    });
    addAllProduct1(products);
  });

}
getdataProduct();
getdataProduct1();
document.getElementById('cancel').addEventListener('click',() => {
  document.getElementById('confirmationModal').style.display = 'none';
});

document.getElementById('close').addEventListener('click',() => {
  document.getElementById('confirmationModal').style.display = 'none';
});