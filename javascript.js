let choice = [
    "rock", 
    "paper", 
    "scissors"
];

function getComputerChoice() {
    choice = choice[Math.floor(Math.random() * choice.length)]; // random selection
    return(choice);
};

let selectedChoice = prompt("Type in rock, paper, or scissors.");
function playerSelection() {
    selectedChoice = selectedChoice.toLowerCase();
    return(selectedChoice);
};

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("You have recieved a tie for your next meeting.");
    } else if 
    (computerSelection === "rock" && playerSelection === "scissors" ||
     computerSelection === "paper" && playerSelection === "rock" ||
     computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You've lost.");
    } else if
    (computerSelection === "rock" && playerSelection === "paper" ||
    computerSelection === "paper" && playerSelection === "scissors" ||
    computerSelection === "scissors" && playerSelection === "rock") {
        console.log("You have won a point! Prepare for many more victories!");
    } else {
        console.log("You have recieved a tie for your next meeting.")
    }
};

console.log(computerSelection);
console.log(playerSelection());

console.log(playRound(selectedChoice, computerSelection));