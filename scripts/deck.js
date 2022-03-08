// Constants for card SUITS and VALUE

const SUITS = ["♧", "♢", "♥", "♤"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

//Deck constructor for creating any type of deck
class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  //Getter function to save us from writing code
  get numberOfCards() {
    return this.cards.length;
  }

  //Custom shuffle function, to make it more random
  shuffle() {
    // this.cards.sort((a, b) => Math.random() - .5)
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

//Card constructor to take in a suit and value
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get;
}

//To create a Deck of cards to take in SUIT and VALUE values put them in array
function freshDeck() {
  // flatMAp to create one array, not array within array
  return SUITS.flatMap((suit) => {
    // Loop through values to map to suits
    return VALUES.map((value) => {
      // Create object Card with each value suit combo
      return new Card(suit, value);
    });
  });
}

//Creating Deck object
const deck = new Deck();

//Shuffle Deck
deck.shuffle();

console.log(deck.cards);
console.log(SUITS.flatMap(VALUES));

// Working way to get innerText from website based on class

var elementText = [].map
  .call(document.querySelectorAll(".w-full"), function (el) {
    return el.innerText;
  })
  .join();

var elementArray = elementText.split(",");

elementArray.forEach((element) => {
  console.log(element);
});


// Invert binary tree
const reverseNodes = (node) => {
    if (node == null) {
        return
    }
}
reverseNodes(node.right);
reverseNodes(node.left);

let hold = node.left
node.left = node.right
node.right = hold

