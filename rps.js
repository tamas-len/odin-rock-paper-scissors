let states = ['rock', 'paper', 'scissors'];
console.log(states);

const playerSelection = "roCk";
let computerSelection = getComputerChoice();
console.log(computerSelection);

let pointsComp = 0;
let pointsPlayer = 0;

const paperbtn = document.querySelector('#paper');
const rockbtn = document.querySelector('#rock');
const scissorsbtn = document.querySelector('#scissors');

function getComputerChoice()
{
    return states[Math.floor(Math.random() * 3 + 0)];
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors")
    {
        console.log("player's points: " + pointsPlayer);
        console.log("computer's points: " + pointsComp);
        pointsComp += 1;
        return "comp wins"
    }
    else{
        if(computerSelection == "paper" && playerSelection == "rock")
        {
            console.log("player's points: " + pointsPlayer);
            console.log("computer's points: " + pointsComp);
            pointsComp += 1;
            return "comp wins"
        }
        else
        {
            if (computerSelection == "scissors" && playerSelection == "paper")
            {
                console.log("player's points: " + pointsPlayer);
                console.log("computer's points: " + pointsComp);
                pointsComp += 1;
                return "comp wins"
            }
            else {
                if (computerSelection == playerSelection)
                {
                    return "tie"
                }
                else
                {
                    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")
                    {
                        pointsPlayer += 1;
                        console.log("player's points: " + pointsPlayer);
                        console.log("computer's points: " + pointsComp);
                        return "player wins"
                    }
                    else
                    {
                        pointsComp += 1;
                        console.log("player's points: " + pointsPlayer);
                        console.log("computer's points: " + pointsComp);
                        return "not a valid move, u loose, comp wins"
                    }
                }
            }
        }
    }
}

paperbtn.addEventListener('click', () => {console.log(playRound('paper', computerSelection))});
rockbtn.addEventListener('click', () => {console.log(playRound('rock', computerSelection))});
scissorsbtn.addEventListener('click', () => {console.log(playRound('scissors', computerSelection))});