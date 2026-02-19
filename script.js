const buttons = document.querySelectorAll("buttons");

function getComputerChoice() {
    const max = 3, min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const computerChoice = (randomNumber === 1) ? "scissors" :
        (randomNumber === 2) ? "rock" : "paper";
    return computerChoice;
}

function getHumanChoice() {
    const playerInput = parseInt(
        prompt(`1 is "rock", 2 is "paper", and 3 is "scissors". Enter your choice.`)
    );
    const playerChoice = (playerInput === 1) ? "rock" : (playerInput === 2) ?
        "paper" : (playerInput === 3) ? "scissors" : "invalid!";
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
        console.log("Round " + round + ": " + "Computer choice is " + computer + " and human choice is " + human);
    }

    function playRound(humanChoice, computerChoice) {
        //rock beats scissors, scissors beats paper, and paper beats rock

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return `It is a draw.`;
        }

        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return `${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}. You win!`;
        }

        if (computerChoice === "rock" && humanChoice === "scissors" ||
            computerChoice === "scissors" && humanChoice === "paper" ||
            computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            return `${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}! You loose.`;
        }

        if (humanChoice === "invalid!" && computerChoice ===
            "rock" || "paper" || "scissors") {
            computerScore++;
            return "Your choice is invalid.";
        }
    }

    switch (true) {
        case humanScore > computerScore:
            return `You win!
        You: ${humanScore}. Computer: ${computerScore}.`;
            break;
        case humanScore === computerScore:
            return `The game was a draw.
        You: ${humanScore}. Computer: ${computerScore}.`
            break;
        case computerScore > humanScore:
            return `You loose.
        You: ${humanScore}. Computer: ${computerScore}.`
    }
}

console.log(playGame());
