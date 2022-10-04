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

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occure", error);
    alert("something wrong with server! try again after some time");
}

function clickHandler() {
    // outputDiv.innerText = "ajmjajmj " + txtInput.value;
    var inputText = txtInput.value; // taking input


    //  calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
