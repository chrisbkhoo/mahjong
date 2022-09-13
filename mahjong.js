class Tile {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }    
}

const suits = ["bamboo", "buckets", "numbers", "winds", "dragon", "flower"];
const windValues = ["north", "south", "east", "west"];
const dragonValues = ["red", "green", "white"];

function checkValidTile (t) {
    if (suits.includes(t.suit)){
        switch (t.suit) {
            case "bamboo":
                if (t.value >= 1 && t.value <= 9) { return true; }
                break;
            case "buckets":
                if (t.value >= 1 && t.value <= 9) { return true; }
                break;
            case "numbers":
                if (t.value >= 1 && t.value <= 9) { return true; }
                break;
            case "winds":
                if (windValues.includes(t.value)) { return true; }
                break;
            case "dragon":  
                if (dragonValues.includes(t.value )){ return true;}
                break;
            case "flower":
                if (t.value >= 1 && t.value <= 4) { return true; }   
                break;
            default:
                return  false;
        }
    }
    return false;
}

function checkHandLength (h) {
    if (h.length == 14 || h.length == 15) {return true;}
    return false;
}

function checkHandTilesValid (hand) {
    if (hand.map(checkValidTile).includes(false)) {return false};
    return true;
}

function checkValidHand (hand) {
    if (checkHandLength(hand) && checkHandTilesValid(hand)) {
        return true;
    }    
    return false;
}

let test = new Tile("dragon", "blue");
console.log(checkValidTile(test));