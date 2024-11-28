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
  
  var pname = document.getElementById('pname');
  var pid = document.getElementById('pid');
  var pdecs = document.getElementById('decrip');
  var pcat = document.getElementById('s1');
  var pscat = document.getElementById('s2');
  var pqun = document.getElementById('quntity');
  var price = document.getElementById('price');
  var checkboxes = document.querySelectorAll(".sizec");
  var color =document.getElementById('crlinput');
  var chechdata = document.getElementById('checkimg');
  var special_pro = document.getElementById('checkSpecial');
  var coverImg;
  var subImg;
  const text = document.getElementById('text');
  const text1 = document.getElementById('text1');
  const load = document.getElementById('loader-container');
  const load1 = document.getElementById('loader-container1');
  var ciupload = document.getElementById("file-up");
  var siupload = document.getElementById("file-sub");
  var click_sub = document.getElementById('checkimg');
  var sub_cont = document.getElementById('checj');
  var sPcial_btn_pro = document.getElementById('p_add_special')  ;
  var data;
  var addBtn = document.getElementById('p_add')
  const randomNum = Math.floor(Math.random() * 10000);
  var tag = document.getElementById('tag');
  var type = document.getElementById('ptype');
  var cinput = document.getElementById('crlinput');
  var color_container = document.getElementById('discolor');
  const urlParams = new URLSearchParams(window.location.search);
  const upid = urlParams.get('id');
  var colorName = document.getElementById('crlinputname');
// for checkbox
const getup = ref(db,'Products/' +upid);
get(getup).then((snapshot) => {
    if(snapshot.exists()){
        const clr1 = snapshot.child('colour').val();
        clr1.forEach(function(color){
        
              var div = document.createElement('div');
              div.style.cursor='pointer';
              div.style.width='25px';
              div.style.height='25px';
              div.style.borderRadius='50%'
              div.style.border='0.5px solid black'
              div.style.marginTop='10px'
              div.style.marginRight='5px'
              div.style.background=color;
              color_container.appendChild(div);

              div.addEventListener('click',(event) => {
                var backgroundColor = getComputedStyle(event.target).backgroundColor;
                cinput.value=backgroundColor
              })
         
            })
    }

})

var categories;

checkboxes.forEach(function (checkbox){
  checkbox.addEventListener("change", function() {
   
    var checkedCheckboxes = [];

   
    checkboxes.forEach(function(currentCheckbox) {
        
        if (currentCheckbox.checked) {
        
            checkedCheckboxes.push(currentCheckbox.value);
      
        }
    });

    
    categories=checkedCheckboxes;
});
});




// store cover Image
let imageUrl;
document.getElementById('file-up').addEventListener('change',function(e){
 
  const cname1 = pcat.options[pcat.selectedIndex].text;
  const subCatRef = ref(db, 'main_cat/' + cname1);
    var file=e.target.files[0];
    load.style.opacity=1;
    get(child(subCatRef,'c_id')).then((snapshot) => {
        
      data = snapshot.val();


    const metadata = {
      contentType: 'image/jpeg'
    };
    const storageRef = sRef(storage, 'cover/'+cname1+'/'+ pid.value+randomNum);
    
    
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
     
      const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if(progress == 100)
      {
        text.style.display='initial';
        load.style.opacity=0;
           
      }
      });
   
    });
     
});

// store sub Image
var imagesData=[];
var ifile =document.getElementById('file-sub');
ifile.addEventListener('change', function(e){

  
  var file1=ifile.files;
  const cname1 = pcat.options[pcat.selectedIndex].text;
  const subCatRef = ref(db, 'main_cat/' + pcat.value);
  load1.style.opacity=1;

  const metadata = {
    contentType: 'image/jpeg'
  };

  for (var i = 0; i < file1.length; i++) {
    var file=e.target.files[i];
    var fileName = file.name;

    const storageRef = sRef(storage, 'cover/'+ pid.value+randomNum+'/'+'subImage/'+fileName);
   
   

   
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
     
      const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if(progress == 100)
      {
      
        text1.style.display='initial';
        load1.style.opacity=0;
        sub_cont.style.display='initial';
           
      }
      });
 
   
}

})




//download cover image

// add all data in realtime

addBtn.addEventListener('click',function(event){

if (pid.value.trim() === "") {
  var msg ="Please Enter The Product id";
let utterance = new SpeechSynthesisUtterance(msg);

speechSynthesis.speak(utterance);
}
else if(pname.value.trim() === ""){
  var msg ="Please Enter The Product Name";
let utterance = new SpeechSynthesisUtterance(msg);
speechSynthesis.speak(utterance);
}else if (pdecs.value.trim() === "") {
  var msg ="Please Enter The Product Description";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}else if (!pcat.value) {
  var msg ="Please Select The Product Categories";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}
else if (pqun.value.trim() === "") {
  var msg ="Please Select The Product Quantity";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}else if (!ciupload.files.length) {
  var msg ="Please upload the product cover image";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}
else if (price.value.trim() === "") {
  var msg ="Please Enter The Product Price";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}
else if (![...checkboxes].some(checkbox => checkbox.checked)) {
  var msg ="Please select size of product";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}else if(!chechdata.checked){
  var msg ="Please tick the database condition";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}

else{

  const ctg = pcat.options[pcat.selectedIndex].text;
  const stg = pscat.options[pscat.selectedIndex].text;
  const cname1 = pcat.options[pcat.selectedIndex].text;

  const strg = sRef(storage, 'cover/'+cname1+'/'+ pid.value+randomNum);
  var fstaus = 0;

  getDownloadURL(strg).then((url) =>{
    
 
    
  
  const result = {
  
    p_id : pid.value+randomNum,
    p_name:pname.value,
    description:pdecs.value,
    quantity:pqun.value,
    cover_image:url,
    sub_image:imagesData,
    size:categories,
    colour:cinput.value,
    price:price.value,
    f_status:0,
    tag:tag.value,
    p_type:type.value,
    colorname:colorName.value,
    mp_id:upid,
    status:1
  
  

  

 };
  
 const pro1 = ref(db,'Products/'+upid+'/'+'varition/' +pid.value+randomNum);
 const cat1 = ref(db,ctg+'/'+stg+'/'+upid+'/'+'variation/'+ pid.value+randomNum);


 set(pro1,result)
 .then(() => {
  
 set(cat1,result)
 .then(() => {
  var msg = "Product is uploaded successfully";
  let utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
  alert('Product is uploaded successfully');
  location.reload();

 });
  });

  });



}


});

document.getElementById('cancel').addEventListener('click',function(){
  const cname1 = pcat.options[pcat.selectedIndex].text;
  const strg = sRef(storage, 'cover/'+cname1+'/'+ data+pid.value+pscat.value);

  get(child(strg,'SUB_IMAGE')).then((snapshot) => {
        
    data = snapshot.val();
  var img= document.createElement('img');
    img.src=data;
    this.appendChild(img);
  })
})
  


function get_subimg(){
  const storageRef1 = sRef(storage, 'cover/'+ pcat.value+pid1+pscat.value+'/'+'subImage/');
listAll(storageRef1).then(function(result) {
  result.items.forEach(function(imageRef) {
   
    getDownloadURL(imageRef).then(function(url) {
      imagesData.push(url);
     
      
  })
  });
})
}
click_sub.addEventListener('change',function(){
  const storageRef1 = sRef(storage, 'cover/'+ pid.value+randomNum+'/'+'subImage/');
listAll(storageRef1).then(function(result) {
  result.items.forEach(function(imageRef) {
   
    getDownloadURL(imageRef).then(function(url) {
      imagesData.push(url);
     console.log(imagesData)
      
  })
  });
})
});
special_pro.addEventListener('change',()=>{
  if(special_pro.checked){
    addBtn.style.display='none';
sPcial_btn_pro.style.display='initial';
  }else{
    addBtn.style.display='initial';
    sPcial_btn_pro.style.display='none';
  }

});

