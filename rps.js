let states = ['rock', 'paper', 'scissors'];
console.log(states);

let computerSelection = getComputerChoice();
console.log(computerSelection); //only for dev purposes

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
    if (computerSelection == "rock" && playerSelection == "scissors")
    {
        pointsComp += 1;
        writeOut();
        return "comp wins"
    }
    else{
        if(computerSelection == "paper" && playerSelection == "rock")
        {
            pointsComp += 1;
            writeOut();
            return "comp wins"
        }
        else
        {
            if (computerSelection == "scissors" && playerSelection == "paper")
            {
                pointsComp += 1;
                writeOut();
                return "comp wins"
            }
            else {
                if (computerSelection == playerSelection)
                {
                    ties++;
                    writeOut();
                    return "tie"
                }
                else
                {
                    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")
                    {
                        pointsPlayer += 1;
                        writeOut();
                        return "player wins"
                    }
                    else
                    {
                        pointsComp += 1;
                        writeOut();
                        return "not a valid move, u loose, comp wins"
                    }
                }
            }
        }
    }
}


//buttons

paperbtn.addEventListener('click', () => {results.textContent = playRound('paper', computerSelection)});
rockbtn.addEventListener('click', () => {results.textContent = playRound('rock', computerSelection)});
scissorsbtn.addEventListener('click', () => {results.textContent = playRound('scissors', computerSelection)});

//note to self: add dark mode light mode switch