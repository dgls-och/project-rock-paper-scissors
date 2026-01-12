
/*test
console.log("Hello, World!");
*/

function getComputerChoice() {
    //the function, getComputerChoice randomly returns computer choice of either "rock", "paper", or "scissors"
    const max = 3, min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const computerChoice = (randomNumber === 1)
        ? "scissors" : (randomNumber === 2)
        ? "rock" : "paper";
    //console.log(`computer choice is ${randomNumber}: ${computerChoice}`);
    return computerChoice;
}

getComputerChoice();