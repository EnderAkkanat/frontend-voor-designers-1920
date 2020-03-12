var currentfoto = 1;
var prevfoto = 1; 

document.getElementsByID("container").addEventListener("keydown",prev);

function prev(){
    vorige();
}
document.getElementsByID("container").addEventListener("keydown",next);

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
    }
    if(currentfoto == 3){
            document.getElementById("container").style.marginLeft = "-1200px";
    }
    if(currentfoto == 4){
            document.getElementById("container").style.marginLeft = "-1800px";
    }
}