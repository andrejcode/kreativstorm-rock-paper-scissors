const CHOICES = ['rock', 'paper', 'scissors'];

function validateSelection(selection) {
  if (!CHOICES.includes(selection) || typeof selection !== 'string') {
    throw new Error(
      'Invalid selection! Please choose "rock", "paper", or "scissors".'
    );
  }
}

function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getPlayerSelection() {
  while (true) {
    const input = prompt('Enter your choice: rock, paper, or scissors');

    if (input === null) {
      return null;
    }

    try {
      const playerSelection = input.toLowerCase();
      validateSelection(playerSelection);
      return playerSelection;
    } catch (error) {
      alert(error.message);
    }
  }
}

/**
 * Capitalizes the first letter of a string
 *
 * @param {string} inputString - The input string to be transformed.
 * @returns {string} - The input string with the first letter capitalized.
 */
function capitalizeFirstLetter(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

/**
 * Plays a round of the rock-paper-scissors game between the player and the computer.
 *
 * @param {string} playerSelection - The player's choice of "rock", "paper", or "scissors".
 * @param {string} computerSelection - The computer's choice of "rock", "paper", or "scissors".
 * @returns {string} - A message indicating the result of the round, specifying if the player won, lost, or tied.
 */
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
    return `You Won! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}`;
  } else {
    return `You Lose! ${capitalizedComputerSelection} beats ${capitalizedPlayerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();

    if (playerSelection === null) {
      alert('Game canceled!');
      return; // Use break if you want to show the score after the game is canceled
    }

    const computerSelection = computerPlay();
    const roundMessage = playRound(playerSelection, computerSelection);

    if (roundMessage.includes('Won')) {
      playerScore += 1;
    }

    if (roundMessage.includes('Lose')) {
      computerScore += 1;
    }

    alert(roundMessage);
  }

  alert(`Player: ${playerScore} - Computer: ${computerScore}`);
}

game();
