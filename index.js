
const suit = ["♥", "♠" , "♦" , "♣" ];
const value = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
        
    shuffle() {
        //this.cards.sort(a, b => Math.random() - .5)
        for(let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }

    dealToPlayers() {
        let player1 = [];
        let player2 = [];
        let points1 = 0;
        let points2 = 0;
        let tie = 0;
        for(let i = 0; i < this.cards.length; i++) {
            if(i % 2 == 0) {
                player1.push(deck.cards[i]);
            } else {            
                player2.push(deck.cards[i]);
                }
        }        
        playWar(player1,player2);
    }
}

class Card {
    constructor(suit, value,) {
        this.suit = suit;
        this.value = value;
        if(this.value === "A") {this.number = 14}
        else if (this.value === "K") {this.number = 13 }
        else if (this.value === "Q") {this.number = 12 }
        else if (this.value === "J") {this.number = 11 }
        else {this.number = Number(this.value);}
    }
}

function freshDeck()  {
    return suit.flatMap(suit => {
       return value.map(value => {
            return new Card(suit, value);
        });
    });
}

function playWar(player1,player2) {
    let points1 = 0;
    let points2 = 0;
    let tie = 0;
    for(let i = 0; i < 26; i++) {
        console.log("")
        console.log(`*********Round ${[i+1]} **********`)
        if(player1[i].number > player2[i].number) {
            console.log(`Player 1 plays, ${player1[i].value}${player1[i].suit} Player 2 plays, ${player2[i].value}${player2[i].suit}`);
            points1 = points1 + 1;
            console.log("Player 1 Wins!!!");
        } else if(player1[i].number < player2[i].number)  { 
            console.log(`Player 1 plays, ${player1[i].value}${player1[i].suit} Player 2 plays, ${player2[i].value}${player2[i].suit}`);
            points2 = points2 + 1;
            console.log("Player 2 Wins!!!");
        } else {
            console.log(`Player 1 plays, ${player1[i].value}${player1[i].suit} Player 2 plays, ${player2[i].value}${player2[i].suit}`);
            tie = tie + 1;
            console.log("It's A Draw!");
        }
    }
    console.log("")
    console.log("****************************************************")
    console.log(`Player1 ${points1} Player2 ${points2} Draw ${tie}`);
} 


const deck = new Deck();
deck.shuffle();
deck.dealToPlayers();


