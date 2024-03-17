function getComputerChoice() {
  const number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else if (number === 3) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const a =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const b = computerSelection;
  if (a === b) {
    return `Both are ${b}, let's try again.`;
  } else if (
    (a === "Scissors" && b === "Rock") ||
    (a === "Rock" && b === "Paper") ||
    (a === "Paper" && b === "Scissors")
  ) {
    return `You lose! ${b} beats ${a}`;
  }
  return `You win! ${a} beats ${b}`;
}

function playGame() {
  let a = 0;
  let b = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection).startsWith("You win!")
      ? a++
      : b++;
    console.log(playRound(playerSelection, computerSelection));
  }

  if (a === b) {
    return "It's a tie";
  } else if (a > b) {
    return "You win";
  } else {
    return "You lose";
  }
}

console.log(playGame());
