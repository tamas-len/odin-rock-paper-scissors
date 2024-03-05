let states = ['rock', 'paper', 'scissors'];
console.log(states);

function play(comp)
{
    const choice = prompt("choose")
    console.log("player's choice: " + choice);
    return playRound(choice.toLowerCase(), comp);
}

function getComputerChoice()
{
    return states[Math.floor(Math.random() * 3 + 0)];
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors")
    {
        return "comp wins"
    }
    else{
        if(computerSelection == "paper" && playerSelection == "rock")
        {
            return "comp wins"
        }
        else
        {
            if (computerSelection == "scissors" && playerSelection == "paper")
            {
                return "comp wins"
            }
            else {
                if (computerSelection == playerSelection)
                {
                    return "tie"
                }
                else
                {
                    return "player wins"
                }
            }
        }
    }
}
  
const playerSelection = "roCk";
let computerSelection = getComputerChoice();

console.log(computerSelection);
 
console.log("automatic")
console.log(playRound(playerSelection.toLowerCase(), computerSelection));

let rounds = prompt("how many rounds do you want to play")

for (i = 0; i < rounds; i++)
{
    computerSelection = getComputerChoice();
    console.log(" ");
    console.log("ur " + (i + 1) + "th game");
    console.log(play(computerSelection));
    console.log("computer's play: " + computerSelection);
}