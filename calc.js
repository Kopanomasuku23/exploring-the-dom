const theNumber = document.querySelector(".theNumber");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

let myCounter = 0;

theNumber.innerText = myCounter;

incrementBtn.addEventListener('click', function(){
//alert("+");
myCounter++;
theNumber.innerText = myCounter;

});

decrementBtn.addEventListener('click', function(){
//alert("-");
if (myCounter > 0) {   

myCounter--;
theNumber.innerText = myCounter;
}

});