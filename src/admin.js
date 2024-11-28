
let btn1 =document.getElementById("btnMenu");

let sidebar1=document.querySelector(".slidbar");
let letop1=document.getElementById("left-top");

btn1.onclick=function(){
    sidebar1.classList.toggle("active")
    document.querySelector(".logo").classList.toggle("active")
    letop1.classList.toggle("active")

};





const d1=document.getElementById("s1");
const d2=document.getElementById("s2");
var cat={
  "1":[
    { name: "Dress", sid:"101" },
    { name:"Frock", sid:"102"},
    { name:"Tops", sid:"103"},
    { name:"Tank Top", sid:"104"},
    { name:"Jackets", sid:"105"},
    { name:"Sweater", sid:"106"},
    { name:"coat", sid:"107"},
    { name:"Shirt", sid:"108"},
    { name:"T-Shirt", sid:"109"},
    { name:"Sports", sid:"110"},
    { name:"Skirt", sid:"111"},
    { name:"jeans & Leggings", sid:"112"}],


  "2":[{name:"T-Shirts", sid:"201"},
  {name:"Shirts",sid:"202"},
  {name:"Paints",sid:"203"},
  {name:"Formal",sid:"204"},
  {name:"jeance",sid:"205"}],
  
  "3":[{name:"T-Shirts",sid:"301"},
  {name:"Shirts",sid:"302"},
  {name:"Paints",sid:"303"},
  {name:"Formal",sid:"304"},
  {name:"jeance",sid:"305"}],

  "4":[
   {name:"Dresses",sid:"401"},
   {name:"Kurties",sid:"402"},
   {name:"Lehnga",sid:"403"},
   {name:"T-Shirt",sid:"404"},
   {name:"Shirts",sid:"405"},
   {name:"Paints",sid:"406"},
   {name:"Plazo",sid:"407"}],

  
  
}

d1.addEventListener("change",function(){
   var select_option = cat[this.value];

   while(d2.options.length > 0 ){
    d2.options.remove(0);
   }

   Array.from(select_option).forEach(function(el){
 
    let option = new Option(el.name ,el.sid);
    d2.appendChild(option);
   });

  

});
let main = document.getElementById("imc");

const inputimg =document.getElementById("file-up");
inputimg.addEventListener("change",function(){
  main.src=URL.createObjectURL(inputimg.files[0]);
 
    
});

  


  var input = document.getElementById('file-sub');
  var container = document.getElementById('image-container');
input.addEventListener("change", function(){
  container.innerHTML = '';

  // Loop through the selected files
  for (var i = 0; i < input.files.length; i++) {
      var file = input.files[i];
      

      // Check if the file is an image
      if (file.type.startsWith('image/')) {
          // Create a new image element
          var img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.classList.add('uploaded-image');
          // Append the image to the container
          container.appendChild(img);
      }
  }

});



// for color
//color store
var myArray = [];
function checkInput() {
  var clrinput = document.getElementById('crlinput').value;
  var addclr = document.getElementById('adclr');
 
  if (clrinput.trim() === "") {
   
    addclr.style.display = "none";
} else {
    
    addclr.style.display = "inline-block";
}
}
function addclor() {
  var contain = document.getElementById('discolor');
  contain.innerHTML='';
  var clrinput = document.getElementById('crlinput').value;
  document.getElementById('crlinput').value="";


  myArray.push(clrinput);
  myArray.forEach(function(color){
    var div = document.createElement('div');
    div.style.width='25px';
    div.style.height='25px';
    div.style.borderRadius='50%'
    div.style.marginTop='10px'
    div.style.marginRight='5px'
    div.style.background=color;
    contain.appendChild(div);
  
    console.log("Updated Array:", myArray);
  })
  
  var values = clrinput.split(',');

  

  
}







