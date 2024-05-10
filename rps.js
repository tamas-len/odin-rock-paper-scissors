let states = ['rock', 'paper', 'scissors'];
console.log(states);

var dict = 
{
    "rock" : "paper",
    "paper" : "scissors",
    "scissors" : "rock"
};

/*

1 < 2 < 3
rock < paper < scissors

rock - paper
paper - scissors
scissors - rock

*/

let computerSelection = getComputerChoice();

let round = 0;

let pointsComp = 0;
let pointsPlayer = 0;
let ties = 0;

const paperbtn = document.querySelector('#paper'); //get the buttons from the DOM
const rockbtn = document.querySelector('#rock');
const scissorsbtn = document.querySelector('#scissors');

const results = document.querySelector('#results');
const comppoints = document.querySelector('#comppoints')
const playerpoints = document.querySelector('#playerpoints');

const roundElement = document.querySelector('#round');
const tieCounter = document.querySelector('#tiecounter');

function getComputerChoice()
{
    return states[Math.floor(Math.random() * 3 + 0)]; //chooses randomly from the 'states' array
}

function writeOut()
{
    playerpoints.textContent = "player's points: " + pointsPlayer;
    comppoints.textContent = "computer's points: " + pointsComp;
    tieCounter.textContent = "ties: " + ties;
}

function playRound(playerSelection, computerSelection) { //compares the players and computers choices
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    round++;
    roundElement.textContent = 'round ' + round;

    if (playerSelection == computerSelection)
    {
        ties++;
        writeOut();
        return "tie"
    }
    else
    {
        if(dict[playerSelection] == computerSelection)
        {
            pointsComp++;
            writeOut();
            return "comp wins"
        }
        else
        {
            pointsPlayer++;
            writeOut();
            return "player wins"
        }
    }
}


//buttons

paperbtn.addEventListener('click', () => {results.textContent = playRound('paper', computerSelection)});
rockbtn.addEventListener('click', () => {results.textContent = playRound('rock', computerSelection)});
scissorsbtn.addEventListener('click', () => {results.textContent = playRound('scissors', computerSelection)});

//note to self: add dark mode light mode switch