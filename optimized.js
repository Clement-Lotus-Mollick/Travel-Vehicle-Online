// conv 
function convert(id){
    const cost = document.getElementById(id).innerText;
    const costConvert = parseInt(cost) ;
    return costConvert;
}

// function for total cost 

function totalCost(vlu){
    const theTotalCost = convert("tPriceInit");
    const sum = theTotalCost+vlu;
    document.getElementById("tPriceInit").innerText = sum;
}


// function for grand total 
function grandTotal(){
    const theTotalCost = convert("tPriceInit");
    document.getElementById("tGrandT").innerText =theTotalCost;
}


// function for coupon 
function couponCode(){
    const theTotalCost = convert("tPriceInit");
    const cuponCodeNumber = document.getElementById("coupon_input").value;
    if(cuponCodeNumber=="NEW15"){
        const discount = theTotalCost*.15;
        document.getElementById("tGrandT").innerText = theTotalCost - discount;
    }else if(cuponCodeNumber == "Couple20"){
        const discount = theTotalCost*.2;
        document.getElementById("tGrandT").innerText = theTotalCost - discount;
    }else{
        alert("please enter a valid code number");
    }
}


// function for left sit and count sit 
       
      function sitLeft(){
const leftSit = convert("leftSit");
document.getElementById("leftSit").innerText = leftSit-1;

const theSitCount = convert("cartCount");
            document.getElementById("cartCount").innerText = theSitCount+1;
}



// function to scrool 
function scrool(){
    const targetSec = document.getElementById("targetedSection");
    targetSec.scrollIntoView({ behavior: "smooth" });
}