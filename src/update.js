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
  const urlParams = new URLSearchParams(window.location.search);
  const upid = urlParams.get('id');
  
  
  var colorp = document.getElementById('cpro');
  var tag = document.getElementById('tag');
 var type = document.getElementById('ptype');
 
  var pname = document.getElementById('pname');
  var pid = document.getElementById('pid');
  var pdecs = document.getElementById('decrip');
  var pcat = document.getElementById('upcat');
  var pscat = document.getElementById('upsubcat');
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
  var addBtn = document.getElementById('p_add');
  let main = document.getElementById("imc");
  let clrbtn = document.getElementById('adclr');
  clrbtn.style.display='initial';
  var categories=[];
  var clrinput = document.getElementById('crlinput');
  var colorName = document.getElementById('crlinputname');
colorp.addEventListener('click',() => {
  window.location.href='color.html?id='+upid;
});

  const getup = ref(db,'Products/' +upid);
  
  get(getup).then((snapshot) => {
      if(snapshot.exists()){
          const P_id1 = snapshot.child('p_id').val();
          const P_name1 = snapshot.child('p_name').val();
          const P_des1 = snapshot.child('description').val();
          const cat12 = snapshot.child('category').val();
          const scat1 = snapshot.child('sub_category').val();
          const qty1 = snapshot.child('quantity').val();
          const cover1 = snapshot.child('cover_image').val();
          const sub_im1 = snapshot.child('sub_image').val();
          const price1 = snapshot.child('price').val();
          const size1 = snapshot.child('size').val();
          const clr1 = snapshot.child('colour').val();
          const clrName = snapshot.child('colorname').val();
          const tag1 = snapshot.child('tag').val();
          const ptype = snapshot.child('p_type').val();
          type.value=ptype;
          tag.value = tag1;
          colorName.value = clrName;
          pid.value=P_id1;
          pname.value=P_name1;
          pdecs.value=P_des1;

        pcat.value=cat12;
        pscat.value=scat1;
        pqun.value=qty1;
     main.src=cover1;
     price.value = price1;

     const container = document.getElementById('image-container');   
     var contain = document.getElementById('discolor');
     sub_im1.forEach((url) => {
   
        let img1 = document.createElement('img');
        img1.src = url;   
        img1.classList.add('uploaded-image');
        container.appendChild(img1);
       
    });
    checkboxes.forEach(checkbox => {
       
        if (size1.includes(checkbox.value)) {
            checkbox.checked = true; 
        } else {
            checkbox.checked = false; 
        }
    });
    var clrar = [];
  
    clrar.push(clr1);
    clrar.forEach(function(color){
      clrinput.value=color;
        var div = document.createElement('div');
        div.style.width='25px';
        div.style.height='25px';
        div.style.borderRadius='50%'
        div.style.marginTop='10px'
        div.style.marginRight='5px'
        div.style.background=color;
        contain.appendChild(div);
   
      })






      }
  });

  document.getElementById('cancel').addEventListener('click', () => {
    window.history.back();
});

checkboxes.forEach(function (checkbox){
  checkbox.addEventListener("change", function() {
   
    var checkedCheckboxes = [];

   
    checkboxes.forEach(function(currentCheckbox) {
        
        if (currentCheckbox.checked) {
        
            checkedCheckboxes.push(currentCheckbox.value);
      
        }
        const getupc = ref(db,'Products/' +upid);
        update(getupc,{
          size: checkedCheckboxes
      })
    });

    
    categories=checkedCheckboxes;
});
});
var myclr= [];

clrbtn.addEventListener('click', () =>{

    var contain = document.getElementById('discolor');
    contain.innerHTML='';
    var clrinput = document.getElementById('crlinput').value;
    document.getElementById('crlinput').value="";
  
  
    myclr.push(clrinput);
    myclr.forEach(function(color){
      var div = document.createElement('div');
      div.style.width='25px';
      div.style.height='25px';
      div.style.borderRadius='50%'
      div.style.marginTop='10px'
      div.style.marginRight='5px'
      div.style.background=color;
      contain.appendChild(div);
    })
    update(getup,{
        colour:myclr
    })
});



addBtn.addEventListener('click',function(event){


    const getup1 = ref(db,'Products/' +upid);
      const ctg = pcat.value;
      const stg = pscat.value;
      const cname1 = pcat.value;
    
      const strg = sRef(storage, 'cover/'+cname1+'/'+ pid.value);
      var fstaus = 0;
    
   
        
      
     update(getup1,{
        p_id : pid.value,
        p_name:pname.value,
        description:pdecs.value,
        category:ctg,
        sub_category:stg,
        quantity:pqun.value,
        price:price.value,
       colour:color.value,
       tag:tag.value,
       p_type:type.value,
        f_status:0,
        colorname:colorName.value,
        status:1
      }).then(() => {
       
        alert('Product updated successfully');
      }).catch((error) => {
        console.error('Error updating product:', error);
      });
    
    
  
    
    
    
    
    
    
    });
    
 
      
    
    
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
      const storageRef1 = sRef(storage, 'cover/'+ pid.value+'/'+'subImage/');
    listAll(storageRef1).then(function(result) {
      result.items.forEach(function(imageRef) {
       
        getDownloadURL(imageRef).then(function(url) {
          imagesData.push(url);
         console.log(imagesData)
          
      })
      });
    })
    });
   


