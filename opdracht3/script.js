//referentie naar de header en section
//const header = document.querySelector('header');
//const section = document.querySelector('section');

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
    var newImage = document.createElement("img");
    newImage.setAttribute("src", allMovies[3].cover)
    document.body.appendChild(newImage);
    
  //titleMovies(allMovies);
}

//Object komt van JSON, maak h1, maak textcontent, zet het in Header.
//function populateHeader(jsonObj) {
//  const myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['squadName'];
//  header.appendChild(myH1);
//
//  const myPara = document.createElement('p');
//  myPara.textContent = 'Title ' + jsonObj['title'] + ' // releasedate' + jsonObj['release_date'];
//  header.appendChild(myPara);
//}

//De superhero cards. 
//Members wordt gestored in een nieuwe variable.
//Array bevat informatie voor de hero's.
//function showHeroes(jsonObj) {
//  const heroes = jsonObj['members'];
//    
    //1. Create nieuwe elements  
//  for (let i = 0; i < heroes.length; i++) {
//    const myArticle = document.createElement('article');
//    const myH2 = document.createElement('h2');
//    const myPara1 = document.createElement('p');
//    const myPara2 = document.createElement('p');
//    const myPara3 = document.createElement('p');
//    const myList = document.createElement('ul');
//    //2. Secret id voor introduceert informatie.
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = ' ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//    //3. Sla de powers property op.
//    //4. Nieuwe for loop om door de loop te gaan.  
//    const superPowers = heroes[i].powers;
//    for (let j = 0; j < superPowers.length; j++) {
//      const listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//
//    section.appendChild(myArticle);
//    }
//}
