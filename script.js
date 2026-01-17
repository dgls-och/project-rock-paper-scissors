function getComputerChoice() {
    const max = 3, min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const computerChoice = (randomNumber === 1) ? "scissors" :
        (randomNumber === 2) ? "rock" : "paper";
    return computerChoice;
}

function getHumanChoice() {
    const playerInput = parseInt(
        prompt(`1 is "rock", 2 is "paper", and 3 is "scissors". Enter your choice`)
    );
    const playerChoice = (playerInput === 1) ? "rock" : (playerInput === 2) ?
        "paper" : (playerInput === 3) ? "scissors" : "It is invalid!";
    return playerChoice;
}

function playGame() {
    //tracks score and declares winner

    let humanScore = 0;
    let computerScore = 0;

    //capitalize each player's choice in announcement
    function capitalizeFirstLetter(playerChoice) {
        return `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)}`;
    }

    for (let round = 1; round <= 5; round++) {
        const computer = getComputerChoice();
        const human = getHumanChoice();

        playRound(human, computer);
        console.log(round);
    }

    function playRound(humanChoice, computerChoice) {
        //rock beats scissors, scissors beats paper, and paper beats rock

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return `It is a draw.`;
        } else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                return `${capitalizeFirstLetter(getHumanChoice())} beats ${
                    capitalizeFirstLetter(getComputerChoice())}. You win!`;
        } else if (humanChoice === "It is invalid!" && computerChoice ===
            "rock" || "paper" || "scissors") {
                computerScore;
                humanScore;
                return "Your choice is invalid.";
        } else {
            computerScore++;
            return `${capitalizeFirstLetter(getComputerChoice())} beats ${
                capitalizeFirstLetter(getHumanChoice())}! You loose.`;
        }
    }

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
