// console.log("script is working on different files");
// alert("This script is workk");

// input 
// var username = prompt("Give me username");

// // processing 

// var welcomeMessage = "This script is working " + username;

// // output

// alert(welcomeMessage);

// I write code for neogcamp exercise then running anfd after running this i comment it out . 

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = "ajmjajmj " + txtInput.value;
};

btnTranslate.addEventListener ("click", clickHandler)
