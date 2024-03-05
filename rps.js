let states = ['rock', 'paper', 'scissors'];
console.log(states);

const playerSelection = "roCk";
let computerSelection = getComputerChoice();

let pointsComp = 0;
let pointsPlayer = 0;

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