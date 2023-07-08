const choices = [
    "rock", 
    "paper", 
    "scissors"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // random selection
};

function getPlayerChoice() {
    // let player_choice = prompt("Type in rock, paper, or scissors.").toLowerCase()
    // return(`You chose ${player_choice}!`);
    return prompt("Type in rock, paper, or scissors.").toLowerCase();
};

function playRound(playerSelection, computerSelection) {
    if 
    (computerSelection === choices[0] && playerSelection === choices[1] ||
     computerSelection === choices[1] && playerSelection === choices[2] ||
     computerSelection === choices[3] && playerSelection === choices[0]) {
        return "You won!";
    } else if 
    (computerSelection === choices[0] && playerSelection === choices[2] ||
     computerSelection === choices[1] && playerSelection === choices[0] ||
     computerSelection === choices[2] && playerSelection === choices[1]) {
        return "Oh no! You lost.";
    } else if (playerSelection == computerSelection){
        return "It's a tie!";
    } else {
        return "UNKNOWN ERROR"
    };
};

let com = getComputerChoice()
let player = getPlayerChoice()

console.log("You chose " + player);
console.log("The computer chooses " + com);
console.log(playRound(player, com));