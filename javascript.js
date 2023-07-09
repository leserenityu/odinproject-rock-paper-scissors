const choices = [
    "rock", 
    "paper", 
    "scissors"
];

const results = [
    "You won!",
    "Oh no! You lost.",
    "It's a tie!",
    "UNKNOWN ERROR"
];

let scoreBoard = {playerScore: 0, comScore: 0, errors: 0};
let playerScore = results[0];
let comScore = results[1];
let errors = results[3];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // random selection
};

function getPlayerChoice() {
    return prompt("Type in rock, paper, or scissors.").toLowerCase();
};

function game() {
    function playRound(playerSelection, computerSelection) {
        if 
        (computerSelection === choices[0] && playerSelection === choices[1] ||
         computerSelection === choices[1] && playerSelection === choices[2] ||
         computerSelection === choices[3] && playerSelection === choices[0]) {
            return playerScore;
        } else if 
        (computerSelection === choices[0] && playerSelection === choices[2] ||
         computerSelection === choices[1] && playerSelection === choices[0] ||
         computerSelection === choices[2] && playerSelection === choices[1]) {
            return comScore;
        } else if (playerSelection == computerSelection) {
            return results[2];
        } else {
            return errors;;
        };
    };

    for (let i = 0; i < 5; i++) {
        // choice per round
        let com = getComputerChoice();
        let player = getPlayerChoice();
        // playing
        let round = playRound(player, com);
        console.log("You chose " + player);
        console.log("The computer chooses " + com);
        console.log(round); // for results message
        // scoreboard
        if (round === results[0]) {
            scoreBoard.playerScore++;
        } else if (round === results[1]) {
            scoreBoard.comScore++;
        } else {
            scoreBoard.errors++;
        };
    };

    console.log(`Player Score: ${scoreBoard.playerScore}
                \nComputer Score: ${scoreBoard.comScore}
                \nErrors: ${scoreBoard.errors}`);
};

game()