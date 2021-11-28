const getUserChoice = userInput => {
  userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('ERROR wrong input');
  }
}

const getComputerChoice = () => {
  var temp = Math.floor(Math.random() * 3);
  switch(temp){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return console.log('Game was a Tie');
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return console.log('Computer won');
    }
    else{
      return console.log('User Won');
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return console.log('Computer Won');
    }
    else{
      return console.log('User Won');
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return console.log('Computer won');
    }
    else{
      return console.log('User Won');
    }
  }
}

const playGame = () =>{
  var userChoice = getUserChoice('rock');
  console.log('User: ' + userChoice);

  var computerChoice = getComputerChoice();
  console.log('Computer: ' + computerChoice);

  determineWinner(userChoice, computerChoice);
}

playGame();
