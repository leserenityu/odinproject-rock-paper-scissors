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

console.log(getComputerChoice());
console.log(playerSelection());