//const h1Value = document.querySelector("h1")

//console.log(h1Value.innerHTML);

//h1Value.innerHTML +=" This value was added in the DOM "

console.log(document)

const myButton = document.querySelector(".btn")
const username = document.querySelector(".username")
const myMessage = document.querySelector(".myMessage")
const timermessage = document.querySelector(".timermessage")
const theMessageButton = document.querySelector('.theMessageButton');

theMessageButton.addEventListener('click', function () {
    alert("Button pressed")
 //timermessage.innerText ="button pressed"
});

timermessage.innerText ="This is a message in the DOM!"

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function () {
    timermessage.innerText =" "
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

setTimeout(function () {
    myMessage.innerText = 'This is message will appear after 3 seconds'
}, 3000);

setTimeout(function () {
    myMessage.innerText = ' '
}, 6000);

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function () {
    if (inputBox.value.trim().length > 0) {
        timermessage.innerText = inputBox.value;
    }
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
};

const FruitName = document.querySelector(".FruitName")

//alert(myButton);

myButton.addEventListener('click', function () {

    if (username.value.length > 0) {

        // alert('Hello,' + username.value);
        myMessage.innerText = username.value;

        username.value = '';
    }
    else {
        setTimeout(function () {
            myMessage.innerText = 'This is a message in the DOM!'
        }, 3000)
    }

});

const buttonElem = document.querySelector("#KP")
const fruitNameInput= document.querySelector("#MK")

buttonElem.addEventListener('click', ()=> {
    fruits.push(fruitNameInput.value)
       // const fruit = fruits[i];
        const li = document.createElement('li');
        li.innerText = fruitNameInput.value;
        fruitList.appendChild(li);
            console.log(fruits)
})