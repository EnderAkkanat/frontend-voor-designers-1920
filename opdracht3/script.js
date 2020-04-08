//referentie naar de img en section
const header = document.querySelector('img');
const section = document.querySelector('section');

//url json opslaan in een variable om later eruit te halen. 
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';


//Request aanmaken dmv object
let request = new XMLHttpRequest();
//Request openen dmv open()
request.open('GET', requestURL);
//Response type naar JSON zetten.
request.responseType = 'json';
request.send();




//Wachten op response van de server, daarna verwerken.
request.onload = function() {
var allMovies = request.response;
    console.log(allMovies);
//maakt img element aan en laad de json erin.
//zet de img in de section    
var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[0].cover)
section.appendChild(newImage);
    
var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[1].cover)
section.appendChild(newImage);
    
var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[2].cover)
section.appendChild(newImage);
    
var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[3].cover)
section.appendChild(newImage);    
    
var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[4].cover)
section.appendChild(newImage);   

var newImage = document.createElement("img");
newImage.setAttribute("src", allMovies[5].cover)
section.appendChild(newImage);   

}

//carousel code
var currentfoto = 1;
var prevfoto = 1; 

//Proberen te navigeren met de arrows dmv keydown event.
document.getElementsByID("prev").addEventListener("keydown",prev);
//Voer vorige function uit.
function prev(){
    vorige();
}
document.getElementsByID("next").addEventListener("keydown",next);
//Voer volgende function uit.
function next(){
    volgende();
}

function volgende() {
    
    currentfoto = currentfoto+1;
    if (currentfoto >4){
        currentfoto =1;
    }
    console.log(currentfoto)
    
    beweeg();

}
function vorige() {
    currentfoto = currentfoto-1;
    if (currentfoto <1){
        currentfoto=4;
    }
    console.log(currentfoto)

    beweeg();
}

function beweeg(){
    console.log("beweeg")
    if(currentfoto == 1){
            document.getElementById("container").style.marginLeft = "0px";
    }
    
    if(currentfoto == 2){
            document.getElementById("container").style.marginLeft = "-600px";
    }1
    if(currentfoto == 3){
            document.getElementById("container").style.marginLeft = "-1200px";
    }
    if(currentfoto == 4){
            document.getElementById("container").style.marginLeft = "-1800px";
    }
}
