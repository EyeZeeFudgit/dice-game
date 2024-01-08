let rollResults = []
clear();

function diceRoll(){
    let r1 = Math.random(0) * 6;
    let r2 = Math.random(0) * 6;
    r1 = Math.floor(r1) + 1;
    r2 = Math.floor(r2) + 1;
    rollResults.push(r1, r2);

    if (r1 > r2){
         document.querySelector("h1").innerHTML = "Player 1 Wins!";
      } else if (r1 < r2){
         document.querySelector("h1").innerHTML = "Player 2 Wins!";
      } else {
         document.querySelector("h1").innerHTML = "Draw!";
      }

    if (r1 === 6){
    } else if (r1 === 5){
       document.querySelector("#p1-d4").classList.add("dissapear");
       document.querySelector("#p1-d5").classList.remove("dissapear");
       document.querySelector("#p1-d6").classList.add("dissapear");
    } else if (r1 === 4){
       document.querySelector("#p1-d4").classList.add("dissapear");
       document.querySelector("#p1-d5").classList.add("dissapear");
       document.querySelector("#p1-d6").classList.add("dissapear");
    } else if (r1 === 3) {
       document.querySelector("#p1-d3").classList.add("dissapear");
       document.querySelector("#p1-d4").classList.add("dissapear");
       document.querySelector("#p1-d5").classList.remove("dissapear");
       document.querySelector("#p1-d6").classList.add("dissapear");
       document.querySelector("#p1-d7").classList.add("dissapear");
    } else if (r1 === 2) {
       document.querySelector("#p1-d3").classList.add("dissapear");
       document.querySelector("#p1-d4").classList.add("dissapear");
       document.querySelector("#p1-d5").classList.add("dissapear");
       document.querySelector("#p1-d6").classList.add("dissapear");
       document.querySelector("#p1-d7").classList.add("dissapear");
    } else {
       document.querySelector("#p1-d1").classList.add("dissapear");
       document.querySelector("#p1-d3").classList.add("dissapear");
       document.querySelector("#p1-d4").classList.add("dissapear");
       document.querySelector("#p1-d5").classList.remove("dissapear");
       document.querySelector("#p1-d6").classList.add("dissapear");
       document.querySelector("#p1-d7").classList.add("dissapear");
       document.querySelector("#p1-d9").classList.add("dissapear");
    }
 
    if (r2 === 6){
    } else if (r2 === 5){
       document.querySelector("#p2-d4").classList.add("dissapear");
       document.querySelector("#p2-d5").classList.remove("dissapear");
       document.querySelector("#p2-d6").classList.add("dissapear");
    } else if (r2 === 4){
       document.querySelector("#p2-d4").classList.add("dissapear");
       document.querySelector("#p2-d5").classList.add("dissapear");
       document.querySelector("#p2-d6").classList.add("dissapear");
    } else if (r2 === 3) {
       document.querySelector("#p2-d3").classList.add("dissapear");
       document.querySelector("#p2-d4").classList.add("dissapear");
       document.querySelector("#p2-d5").classList.remove("dissapear");
       document.querySelector("#p2-d6").classList.add("dissapear");
       document.querySelector("#p2-d7").classList.add("dissapear");
    } else if (r2 === 2) {
       document.querySelector("#p2-d3").classList.add("dissapear");
       document.querySelector("#p2-d4").classList.add("dissapear");
       document.querySelector("#p2-d5").classList.add("dissapear");
       document.querySelector("#p2-d6").classList.add("dissapear");
       document.querySelector("#p2-d7").classList.add("dissapear");
    } else {
       document.querySelector("#p2-d1").classList.add("dissapear");
       document.querySelector("#p2-d3").classList.add("dissapear");
       document.querySelector("#p2-d4").classList.add("dissapear");
       document.querySelector("#p2-d5").classList.remove("dissapear");
       document.querySelector("#p2-d6").classList.add("dissapear");
       document.querySelector("#p2-d7").classList.add("dissapear");
       document.querySelector("#p2-d9").classList.add("dissapear");
    }
}

function clear(){
    rollResults = [];
    document.querySelector("#p1-d1").classList.remove("dissapear");
    document.querySelector("#p1-d3").classList.remove("dissapear");
    document.querySelector("#p1-d4").classList.remove("dissapear");
    document.querySelector("#p1-d5").classList.add("dissapear");
    document.querySelector("#p1-d6").classList.remove("dissapear");
    document.querySelector("#p1-d7").classList.remove("dissapear");
    document.querySelector("#p1-d9").classList.remove("dissapear");
    document.querySelector("#p2-d1").classList.remove("dissapear");
    document.querySelector("#p2-d3").classList.remove("dissapear");
    document.querySelector("#p2-d4").classList.remove("dissapear");
    document.querySelector("#p2-d5").classList.add("dissapear");
    document.querySelector("#p2-d6").classList.remove("dissapear");
    document.querySelector("#p2-d7").classList.remove("dissapear");
    document.querySelector("#p2-d9").classList.remove("dissapear");
}

diceRoll();