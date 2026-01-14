
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

function playGame() {
    //playGame() calls playRound(), tracks score and declares winner

    //score trackers
    let humanScore = 0;
    let computerScore = 0;

    //capitalize each player's choice in announcement
    function capitalizeFirstLetter(playerChoice) {
        const firstLetter = playerChoice.slice(0, 1);
        const firstLetterToUpperCase = firstLetter.toUpperCase();
        return `${firstLetterToUpperCase}${playerChoice.slice(1)}`;
    }
    //console.log(capitalizeFirstLetter(getComputerChoice()));
     for (let round = 0; round < 5; round++) {
        const computer = getComputerChoice();
        const human = getHumanChoice();

        playRound(human, computer);
    }

    function playRound(humanChoice, computerChoice) {
        //playRound takes getComputerChoice() and getHumanChoice() as arguments, plays a round, increments the winner's score and prints a winner announcement
        //rock beats scissors, scissors beats paper, and paper beats rock

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return `It is a draw.`;
        } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                return `${capitalizeFirstLetter(getHumanChoice())} beats ${capitalizeFirstLetter(getComputerChoice)}. You win!`;
            } else if (humanChoice === "It is invalid!" && computerChoice === "rock" || "paper" || "scissors") {
                computerScore += 0;
                humanScore += 0;
                return "Your choice is invalid.";
            } else {
                computerScore++;
                return `${capitalizeFirstLetter(getComputerChoice())} beats ${capitalizeFirstLetter(getHumanChoice())}! You loose.`;
            }
    }
    //console.log(playRound(human, computer));

    playRound(human, computer);

    if (humanScore > computerScore) {
        return `You win!
        You: ${humanScore}. Computer: ${computerScore}.`;
    } else if (humanScore === computerScore) {
        return `The game was a draw.
        You: ${humanScore}. Computer ${computerScore}.`
    } else {
        return `You loose.
        You: ${humanScore}. Computer: ${computerScore}.`
    }
}

console.log(playGame());