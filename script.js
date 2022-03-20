import Deck from './deck.js';

const CARD_VALUE_MAP = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 1 || 10,
};

const dealerCardSlot = document.querySelector('.dealer-card-slot');
const playerCardSlot = document.querySelector('.player-card-slot');
const dealerDeckElement = document.querySelector('.dealer-deck');
const playerDeckElement = document.querySelector('.player-deck');
const text = document.querySelector('.text');

let playerDeck, dealerDeck, inRound, stop;

document.addEventListener('click', () => {
  if (stop) {
    startGame();
    return;
  }

  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
});

startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  dealerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  inRound = false;
  stop = false;

  cleanBeforeRound();
}

function cleanBeforeRound() {
  inRound = false;
  dealerCardSlot.innerHTML = '<img src="./assets/back-black.png" alt="back of card black" img>';
  playerCardSlot.innerHTML = '<img src="./assets/back-red.png" alt="back of card red" img>';
  text.innerText = '';

  updateDeckCount();
}

function flipCards() {
  inRound = true;

  const playerCard = playerDeck.pop();
  const computerCard = dealerDeck.pop();
  dealerCardSlot.innerHTML = '';
  playerCardSlot.innerHTML = '';

  playerCardSlot.appendChild(playerCard.getHTML());
  dealerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();

  // if (isRoundWinner(playerCard, computerCard)) {
  //   text.innerText = 'Win';
  //   playerDeck.push(playerCard);
  //   playerDeck.push(computerCard);
  // } else if (isRoundWinner(computerCard, playerCard)) {
  //   text.innerText = 'Lose';
  //   dealerDeck.push(playerCard);
  //   dealerDeck.push(computerCard);
  // } else {
  //   text.innerText = 'Draw';
  //   playerDeck.push(playerCard);
  //   dealerDeck.push(computerCard);
  // }

  if (isGameOver(playerDeck)) {
    text.innerText = 'You Lose!!';
    stop = true;
  } else if (isGameOver(dealerDeck)) {
    text.innerText = 'You Win!!';
    stop = true;
  }
}

// function updateDeckCount() {
//   dealerDeckElement.innerText = dealerDeck.numberOfCards;
//   playerDeckElement.innerText = playerDeck.numberOfCards;
// }

function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
}

function isGameOver(deck) {
  return deck.numberOfCards === 0;
}
