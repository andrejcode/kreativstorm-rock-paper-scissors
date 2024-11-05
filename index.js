console.log('Hello, world!');

function validateSelection(selection) {
  const validChoices = ['rock', 'paper', 'scissors'];

  if (!validChoices.includes(selection)) {
    throw new Error(
      'Invalid selection! Please choose "rock", "paper", or "scissors".'
    );
  }
}

/**
 * Capitalizes the first letter of a string
 *
 * @param {string} string - The input string to be transformed.
 * @returns {string} - The input string with the first letter capitalized.
 *
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Input must be a string.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Plays a round of the rock-paper-scissors game between the player and the computer.
 *
 * @param {string} playerSelection - The player's choice of "rock", "paper", or "scissors".
 * @param {string} computerSelection - The computer's choice of "rock", "paper", or "scissors".
 * @returns {string} - A message indicating the result of the round, specifying if the player won, lost, or tied.
 */
function playRound(playerSelection, computerSelection) {
  //Maybe moving this block in playGame would make a batter separation of concerns
  {
    playerSelection = playerSelection.toLowerCase();
    validateSelection(playerSelection);
  }

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

// Test
const playerSelection = 'ROcK';
const computerSelection = 'paper';
try {
  console.log(playRound(playerSelection, computerSelection));
} catch (error) {
  console.log(error.message);
}
