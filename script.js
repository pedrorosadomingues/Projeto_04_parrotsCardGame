let cardsNumber = 0;

let cardsArea = document.querySelector(".cards-area");

const backCards = ["./assets/images/bobrossparrot.gif", "./assets/images/bobrossparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/explodyparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/fiestaparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/metalparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/revertitparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/tripletsparrot.gif", "./assets/images/unicornparrot.gif", "./assets/images/unicornparrot.gif"];

let contador = 0;

function flipCard(cardFlipped, cardsNumber) {

  let firstCard = document.querySelector(".flipped");


  if (firstCard === null) {
    cardFlipped.classList.add("flipped");
  }
  if (firstCard !== null) {

    cardFlipped.classList.add("flipped");

    if (cardFlipped.classList[1] === firstCard.classList[1]) {

      firstCard.classList.remove("flipped");
      firstCard.classList.add("matched");
      cardFlipped.classList.add("matched");
      cardFlipped.classList.remove("flipped");
      contador++;
    }
    if (cardFlipped.classList[1] !== firstCard.classList[1]) {

      setTimeout(function () {
        firstCard.classList.remove("flipped");
        cardFlipped.classList.remove("flipped");
      }, 1000);
    }
  }
  
  if (contador === cardsNumber / 2)
    alert("You win!");
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
}
askNumber();

