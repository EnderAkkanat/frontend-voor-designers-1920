//referentie naar de img en section
const header = document.querySelector('img');
const section = document.querySelector('section');

//url json opslaan in een variable om later eruit te halen. 
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';


//Request aanmaken dmv object
let request = new XMLHttpRequest();

//Response type naar JSON zetten.
request.responseType = 'json';


//Wachten op response van de server, daarna verwerken.
request.onload = function() {
var allMovies = request.response;
    console.log(allMovies);

    
//Een for loop om door de array heen te lopen voor de images. 
for (var item of allMovies) {
        //maak een article element om alle film dat in te zetten
        var article = document.createElement('article');
        //maak een image aan
        var newImage = document.createElement('img');
        //haal de url uit de json data
        newImage.setAttribute("src", item.cover)
        //koppel de image aan het article
        article.appendChild(newImage);

        //koppel de <article> aan de section op de pagina
        section.appendChild(article);
      };

}
//Request openen dmv open()
request.open('GET', requestURL);
request.send();

//carousel code, geef de waarde van de foto aan.
var currentfoto = 1;
var prevfoto = 1; 

document.addEventListener('keydown', logKey);

//functie voor pijltjes aanmaken
function logKey(e) {
  console.log("key",e.key);
  console.log("keyCode",e.keyCode);
  //Als e.key arrowright is voer dan de functie volgende() uit. 
  if(e.key == "ArrowRight"){
    volgende();
  }
  //Als e.key arrowleft is voer dan de functie vorige() uit.     
  if (e.key =="ArrowLeft"){
    vorige();  
  }     
}


function volgende() {
//Code voor de teller reset.    
    currentfoto = currentfoto+1;
//Als de waarde van de foto boven de 4 is, reset de foto waarde naar 1.     
    if (currentfoto >4){
        currentfoto =1;
    }
    console.log(currentfoto)
//Voer functie beweeg uit.    
    beweeg();

}
function vorige() {
    currentfoto = currentfoto-1;
//Als de waarde van de foto onder de 1 is, reset de foto waarde naar 4.      
    if (currentfoto <1){
        currentfoto=4;
    }
    console.log(currentfoto)
//Voer functie beweeg uit.
    beweeg();
}

function beweeg(){
    console.log("beweeg")
 
    if(currentfoto == 1){
            document.getElementById("container").style.marginLeft = "0px";
    }
 //Als de waarde van de foto 2 is, schuif de container dan op naar links met 600px.       
    if(currentfoto == 2){
            document.getElementById("container").style.marginLeft = "-600px";
    }
    if(currentfoto == 3){
            document.getElementById("container").style.marginLeft = "-1200px";
    }
    if(currentfoto == 4){
            document.getElementById("container").style.marginLeft = "-1800px";
    }
}
