const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const scores = document.querySelectorAll("p");
let [humanScoreOutput, computerScoreOutput] = scores;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const max = 3, min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const computerChoice = (randomNumber === 1) ? "scissors" :
        (randomNumber === 2) ? "rock" : "paper";
    return computerChoice;
}

buttons.forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();

    //track score and declare winner
    function playGame() {
        //capitalize each player's choice in announcement
        function capitalizeFirstLetter(playerChoice) {
            return `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)}`;
        }
        const computer = getComputerChoice();
        const human = `${button.id}`;

        function playRound(humanChoice, computerChoice) {
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
        playRound(human, computer);

        displayText = [];
        displayText.push(`Computer choice is ${computer} and human choice is ${human}.`);

        switch (true) {
            case humanScore > computerScore:
                displayText.push(` You are winning!`);
                humanScoreOutput.innerText = `You: ${humanScore}.`;
                computerScoreOutput.innerText = `Computer: ${computerScore}.`;
                break;
            case humanScore === computerScore:
                displayText.push(` Score is even.`);
                humanScoreOutput.innerText = `You: ${humanScore}.`;
                computerScoreOutput.innerText = `Computer: ${computerScore}.`;
                break;
            case computerScore > humanScore:
                displayText.push(` You are loosing.`);
                humanScoreOutput.innerText = `You: ${humanScore}.`;
                computerScoreOutput.innerText = `Computer: ${computerScore}.`;
        }
        display.textContent = displayText.join("");
    }

    console.log(playGame());
}));
