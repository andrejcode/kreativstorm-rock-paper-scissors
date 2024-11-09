const CHOICES = ['rock', 'paper', 'scissors'];

function validateSelection(selection) {
  if (!CHOICES.includes(selection) || typeof selection !== 'string') {
    throw new Error(
      'Invalid selection! Please choose "rock", "paper", or "scissors".'
    );
  }
}

function getComputerSelection() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getPlayerSelection(roundNumber) {
  while (true) {
    const input = prompt(
      `Round ${roundNumber}: Choose rock, paper, or scissors`
    );

    if (input === null) {
      const confirmCancel = confirm('Are you sure you want to leave the game?');

      if (confirmCancel) {
        return null;
      }

      continue;
    }

    try {
      const playerSelection = input.toLowerCase().trim();
      validateSelection(playerSelection);
      return playerSelection;
    } catch (error) {
      alert(error.message);
    }
  }
}

function capitalizeFirstLetter(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

function playRound(playerSelection, computerSelection) {
  const capitalizedPlayerSelection = capitalizeFirstLetter(playerSelection);
  const capitalizedComputerSelection = capitalizeFirstLetter(computerSelection);

  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${capitalizedPlayerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win this round! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}.`;
  } else {
    return `Computer wins this round! ${capitalizedComputerSelection} beats ${capitalizedPlayerSelection}.`;
  }
}

function getFinalScoreMessage(playerScore, computerScore) {
  let message = `Game over! Final score:\nYou: ${playerScore}\nComputer: ${computerScore}`;

  if (playerScore > computerScore) {
    message += '\nCongratulations! You won the game!';
  } else if (playerScore < computerScore) {
    message += '\nThe computer wins this time. Better luck next time!';
  } else {
    message += "\nIt's a tie! Well played by both sides.";
  }

  return message;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameCancelled = false;

  alert('Welcome to Rock-Paper-Scissors!');
  alert(
    "You're about to face off against the computer in a 5-round match.\n" +
      'The goal is simple: get the higher score by the end of 5 rounds!'
  );
  alert("Let's get started!");

  for (let i = 0; i < 5; i++) {
    const roundNumber = i + 1;
    const playerSelection = getPlayerSelection(roundNumber);

    if (playerSelection === null) {
      gameCancelled = true;
      alert("We're sorry you're leaving.");
      break;
    }

    const computerSelection = getComputerSelection();
    const roundMessage = playRound(playerSelection, computerSelection);

    if (roundMessage.includes('You win')) {
      playerScore += 1;
    }

    if (roundMessage.includes('Computer wins')) {
      computerScore += 1;
    }

    alert(roundMessage);
  }

  if (!gameCancelled) {
    const finalScoreMessage = getFinalScoreMessage(playerScore, computerScore);
    alert(finalScoreMessage);
  }

  alert('Thanks for playing Rock-Paper-Scissors!');
}

game();
