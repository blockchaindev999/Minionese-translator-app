var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output");
var apiUrl = "https://api.funtranslations.com/translate/minion.json";
//


document.querySelector("#btn-translate").addEventListener("click", translateText);


function translateText() {
    var fullUrl = apiUrl + "?text=" + inputText.value;
    fetch(fullUrl)
    .then(resp => resp.json())
    .then(data => outputText.innerText = data.contents.translated)
    .catch(error => outputText.innerText = "Minions are sleeping right now. Come again tomorrow.");
}