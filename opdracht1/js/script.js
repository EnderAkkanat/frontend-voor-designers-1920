/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/
var dragged; 
var document; 

document.addEventListener("drag", function(event){}, false);
/* events fired on the draggable target?? */

document.addEventListener("dragstart", function(event){
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);


document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if(event.target.className == "dropzone1") {
    event.target.style.background = "darkred";
   
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone1") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target??
  if (event.target.className == "dropzone1") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

/*Code herhalen om de films terug te kunnen zetten*/
document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if(event.target.className == "dropzone") {
    event.target.style.background = "darkred";
   
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target??
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


/*Gewerkt met code van: https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event*/