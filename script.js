
/*test
console.log("Hello, World!");
*/

function getComputerChoice() {
    //the function randomly returns computer choice of either "rock", "paper", or "scissors"
    const max = 3, min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const computerChoice = (randomNumber === 1)
        ? "scissors" : (randomNumber === 2)
        ? "rock" : "paper";
    //console.log(`computer choice is ${randomNumber}: ${computerChoice}`);
    return computerChoice;
}
//getComputerChoice();

function getHumanChoice() {
    //the function takes the player's input (a number between 1 and 3) and returns either "rock", "paper", or "scissors"
    const playerInput = parseInt(prompt(`1 is "rock", 2 is "paper", and 3 is "scissors". Enter your choice`));
    const playerChoice = (playerInput === 1)
        ? "rock" : (playerInput === 2)
        ? "paper" : (playerInput === 3)
        ? "scissors" : "It is invalid!";
    //console.log(`Your choice is ${playerInput}: ${playerChoice}`);
    return playerChoice;
}
//getHumanChoice();

 //score trackers
const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //playRound takes getComputerChoice() and getHumanChoice() as arguments, plays a round, increments the winner's score and prints a winner announcement
    //rock beats scissors, scissors beats paper, and paper beats rock
}