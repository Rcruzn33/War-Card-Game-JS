class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}//name, score and hand are properties of the Player class

let player1 = new Player("John");
let player2 = new Player("Eric");
//this is to call out and initiate the Player class under each name.

const card_value_map = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'Jack': 11,
  'Queen': 12,
  'King': 13,
  'Ace': 14
} //Card_value_map object assigns a numerical rank to each card value string

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.rank = card_value_map[value];
  }
}//value, suit, and rank are properties of the Card class
//this is where rank and value are combined via the card_value_map

class Deck {
    constructor() {
        this.deck =[];
    }
    createDeck() {
        let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        let values = Object.keys(card_value_map);
        //this is to call out and initiate values, suits and ranks of the Card class
        //Object.keys is used to get the keys (card values) from the card_value_map Object
        for(let valueCount=0;valueCount<values.length;valueCount++) {
            for(let suitCount=0;suitCount<suits.length;suitCount++) {
                this.deck.push(new Card (suits[suitCount], values[valueCount]))
            }//this for loop generates each card
        }
    }
    dealDeck() {
        let deckMidpoint = Math.ceil(this.deck.length / 2);
        player1.hand = this.deck.slice(0,deckMidpoint);
        player2.hand = this.deck.slice(deckMidpoint,this.deck.length);
    }
    //function to split the card deck in two for each player, calls and establishes a midpoint in the deck
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
              // loop through all cards in the deck to begin shuffling and substracting 1 card each round
            let randomIndex = Math.floor(Math.random() * (i + 1));  // select a random card, algorithm for randomness
            [this.deck[i], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[i]];
        } // swap the current card with the random card
    }
}

let newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffleDeck();
newDeck.dealDeck();
//this is to call out the deck to initiate it's methods (createDeck,shuffleDeck,dealDeck)

class Game {
    compareCards() {
        for (let round = 0; round < player1.hand.length; round++) {
            //employs if,else if and else conditionals to both console.log cards, add the score of each player and determine 
            //the winner of each round
            if(player1.hand[round].rank > player2.hand[round].rank) {
                player1.score++;
                //add the score of each player after every round
                console.log(`Round: ${round+1}
                ${player1.name} wins with ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player2.name} has ${player2.hand[round].value} of ${player2.hand[round].suit}
                ${player1.name} score: ${player1.score}
                ${player2.name} score: ${player2.score}
                `);
                //console.log to display the value and suit of a player's card per round
                //conditional initiates if player1 is the winner
            }else if(player2.hand[round].rank > player1.hand[round].rank){
                player2.score++;
                console.log(`Round: ${round+1}
                ${player2.name} wins with ${player2.hand[round].value} of ${player2.hand[round].suit}
                ${player1.name} has ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player1.name} score: ${player1.score}
                ${player2.name} score: ${player2.score}
                `); 
                //initiates if player2 is the winnner
            }else { 
                console.log(`Round: ${round+1}
                Draw! Both players have ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player1.name} score: ${player1.score}
                ${player2.name} score: ${player2.score}
                `);
                //initiates if there is a tie;
                }
                }
                console.log(player1.name + " score: " + player1.score);
        console.log(player2.name + " score: " + player2.score);
        //displays final scores

        if(player1.score > player2.score) {
            alert("John is the winner!");
        }else if (player2.score > player1.score) {
            alert("Eric is the winner!");
        } else {
            alert("Game is a tie!");
        }
        //alerts the winner of the Game by displaying a pop up
                }
                }
                
                let game = new Game();
                game.compareCards();
                
                
