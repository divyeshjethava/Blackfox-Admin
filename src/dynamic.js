 //categories.html

 const d1=document.getElementById("s1");
 const d2=document.getElementById("s2");
 var cat={
   "WOMEN":[{name:"All", sid:"100"},
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

   "MEN":[{name:"All", sid:"201"},
      {name:"T-Shirts", sid:"203"},
   {name:"Shirts",sid:"202"},
   {name:"Hoodie",sid:"204"},
   {name:"Denim",sid:"205"},
   {name:"Sweater",sid:"206"},
   {name:"Shorts", sid:"207"}],
   
   "BOYS":[{name:"T-Shirts",sid:"301"},
   {name:"Shirts",sid:"302"},
   {name:"Paints",sid:"303"},
   {name:"Formal",sid:"304"},
   {name:"jeance",sid:"305"}],

   "GIRLS":[
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
  
     let option = new Option(el,el);
    
     option.text = el.name;
     option.value = el.sid;

     d2.appendChild(option);
    });
 
    
 
 });


function adbackground(){
   var cback= document.getElementById("cback").value;
 document.getElementById("catback").style.background=cback;
}


 //responsive navbar
 let btn =document.getElementById("btnMenu");
let sidebar=document.querySelector(".slidbar");
let letop=document.getElementById("left-top");
 btn.onclick=function(){
   sidebar.classList.toggle("active")
   document.querySelector(".logo").classList.toggle("active")
   letop.classList.toggle("active")

};
