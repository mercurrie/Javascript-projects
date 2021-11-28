let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (userGuess, compGuess, target) =>{
  var tempU = Math.abs(userGuess - target);
  var tempC = Math.abs(compGuess - target);
  if(tempU === tempC){
    return true;
  }
  else if(tempU > tempC){
    return false;
  }
  else{
    return true;
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }
  else{
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber +=1;
}
