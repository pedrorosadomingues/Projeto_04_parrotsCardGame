let cardsNumber = 0;

let cardsArea = document.querySelector(".cards-area");

let backCards = ["./assets/images/bobrossparrot.gif", "./assets/images/bobrossparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/unicornparrot.gif", "./assets/images/unicornparrot.gif"];

let contador = 0;

let contador2 = 0;

let cronometro = document.querySelector(".timer");

let minutos = 0;
let segundos = 0;
let finalTime = 0;
let playAgain2 = null;

function playAgain() {
   if (playAgain2 !== null){
    
    if (playAgain2 !== "sim") {
    playAgain2 = prompt("Do you want to play again?"); 
     playAgain();
  
     } else { 
      cardsArea.innerHTML = "";
      cronometro.innerHTML = "";
      minutos = 0;
      segundos = 0;
      contador = 0;
      finalTime = 0;
      contador2 = 0;
      backCards = ["./assets/images/bobrossparrot.gif", "./assets/images/bobrossparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/unicornparrot.gif", "./assets/images/unicornparrot.gif"];
       askNumber();
    }
  }
}
function timer () {

  finalTime++;
  segundos++;
  if (segundos === 60) {
    minutos++;
    segundos = 0;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  cronometro.innerHTML = minutos + ":" + segundos;

}
function comparador() { 
	return Math.random() - 0.5; 
}

function flipCard(cardFlipped, cardsNumber) {

  contador2 ++

  let firstCard = document.querySelector(".flipped");
  let secondCard = document.querySelector(".flipped2");
if ( firstCard !== null && secondCard !== null) {
    return
  
}
  if (firstCard === null) {
    cardFlipped.classList.add("flipped");
  }
  if (firstCard !== null) {

    cardFlipped.classList.add("flipped2");

    if (cardFlipped.classList[1] === firstCard.classList[1]) {

      firstCard.classList.remove("flipped");
      firstCard.classList.add("matched");
      cardFlipped.classList.add("matched");
      cardFlipped.classList.remove("flipped2");
      contador++;
    }
    if (cardFlipped.classList[1] !== firstCard.classList[1]) {

      setTimeout(function () {
        firstCard.classList.remove("flipped");
        firstCard.classList.add("rotate");
        cardFlipped.classList.remove("flipped2");
        cardFlipped.classList.add("rotate");

      }, 1500);
    }
  }
  
  if (contador === cardsNumber / 2){

   alert(`You won in ${contador2} turns and ${finalTime} seconds!`);
    clearInterval(1);
    playAgain2 = prompt("Do you want to play again?");  
    playAgain();
  }
}

function askNumber() {

  
  cardsNumber = prompt("How many cards do you want to play with?");
  
  if (Number(cardsNumber) < 4 || Number(cardsNumber) > 14) {
    alert("Please enter a number between 3 and 15");
    return askNumber();
  }
  if (Number(cardsNumber) % 2 !== 0) {
    alert("Please enter an even number");
    return askNumber();
  }

    backCards = backCards.slice(0, Number(cardsNumber));
    backCards.sort(comparador);

  for (let i = 0; i < cardsNumber; i++) {

    let card = document.createElement("div");
    card.classList.add("card");
   
    card.classList.add(backCards[i]);
    let backCard = document.createElement("img");
    backCard.src = backCards[i];

    backCard.classList.add("hidden");

    card.onclick = function () { flipCard(this, Number(cardsNumber)) };
    
    card.appendChild(backCard);

    cardsArea.appendChild(card);
  }
  const meuInterval = setInterval(timer, 1000);
   
    console.log(meuInterval);
}


askNumber();

