const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset');

// Table for storing results
const historyContainer = document.getElementById('history').getElementsByTagName('tbody')[0];

// Final result container
const finalResultContainer = document.getElementById('final-result');

let userScore = 0;
let computerScore = 0;
let drawCount = 0;
let roundsPlayed = 0;
const totalRounds = 10;

// Function to get computer's choice
function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the winner
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    drawCount++;
    return "Draw";
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    userScore++;
    return 'You Win';
  } else {
    computerScore++;
    return 'Computer Wins';
  }
}

// Function to update the history table
function updateHistory(userChoice, computerChoice, result) {
  const row = historyContainer.insertRow();
  row.innerHTML = `
    <td>${userChoice}</td>
    <td>${computerChoice}</td>
    <td class="winner">${result}</td>
  `;
}

// Function to display final result
function displayFinalResult() {
  finalResultContainer.innerHTML = `
    <h2>Final Results After ${totalRounds} Rounds</h2>
    <p>Your Wins: <span class="highlight">${userScore}</span></p>
    <p>Computer Wins: <span class="highlight">${computerScore}</span></p>
    <p>Draws: <span class="highlight">${drawCount}</span></p>
    <p><strong>${
      userScore > computerScore
        ? 'Congratulations! You are the overall winner!'
        : computerScore > userScore
        ? 'Computer wins the game. Better luck next time!'
        : "It's a tie! What a close match!"
    }</strong></p>
  `;
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  drawCount = 0;
  roundsPlayed = 0;

  historyContainer.innerHTML = ''; // Clear history table
  finalResultContainer.innerHTML = ''; // Clear final result

  userChoiceDisplay.textContent = 'Your Choice: -';
  computerChoiceDisplay.textContent = 'Computer\'s Choice: -';
  winnerDisplay.textContent = 'Result: -';
}

// Function to handle each round
function playRound(userChoice) {
  if (roundsPlayed >= totalRounds) {
    displayFinalResult(); // Show final result in the UI
    return;
  }

  const computerChoice = getComputerChoice();
  const result = getWinner(userChoice, computerChoice);

  // Update text displays
  userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
  computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
  winnerDisplay.textContent = `Result: ${result}`;

  // Add result to history
  updateHistory(userChoice, computerChoice, result);

  // Increment rounds
  roundsPlayed++;
  if (roundsPlayed === totalRounds) {
    displayFinalResult(); // Show final result in the UI
  }
}

// Add event listeners to choices
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id.charAt(0).toUpperCase() + choice.id.slice(1);
    playRound(userChoice);
  });
});

// Reset button functionality
resetButton.addEventListener('click', resetGame);
