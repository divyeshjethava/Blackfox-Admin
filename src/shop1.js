
var s_id = document.getElementById("shop_id");
var pincode = document.getElementById("pincode");
var address_shop = document.getElementById("shop_address");
var w_no = document.getElementById("w_no");
var imefile = document.getElementById("shopimg");
var spimg = document.getElementById("spimg");
var shop_status = 1 ;
let city, state;

function getPinCodeInfo() {

    const pinCode1 = pincode.value.trim();
    
    if (pinCode1 === '') {
        alert('Please enter a valid pin code.');
        return;
    }

    const apiUrl = `https://api.postalpincode.in/pincode/${pinCode1}`;
   
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {


            if (data.error) {
                alert('some error in picode check it.');
            } else {
                city = data[0].PostOffice[0].Block;
                state = data[0].PostOffice[0].State;


                const cityVariable = city;
                const stateVariable = state;
                console.log(city, state);
            
            }
         
        })
        .catch(error => console.error('Error fetching pin code information:', error));
}

imefile.addEventListener("change",function(){
    spimg.src=URL.createObjectURL(imefile.files[0]);
   
      
  });