const items = document.querySelectorAll('.item');
const restart = document.querySelector('.restart');
const choices = ['rock', 'paper', 'scissors'];


//Select any of the items
items.forEach( item => {
    item.addEventListener("click", () =>{
        const userChose = item.id;
        const computerChose = computerChoice();
        const score = getScore(userChose, computerChose);

        document.querySelector('.score').innerText = score;
        document.querySelector('.bot-chose').innerText = computerChoice();
    })

})

//to get computer choice at random
function computerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};


//
let playerScore = 0;
let botScore = 0;

function getScore(userChose, computerChose){
    if (userChose === computerChose){
        return "Its's a tie";

    }else if (
        (userChose === 'rock' && computerChose === 'scissors') ||
        (userChose === 'paper' && computerChose === 'rock') ||
        (userChose === 'scissors' && computerChose === 'paper')
    ){
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        return "You won!";
    } else {
        botScore++;
        document.querySelector('.bot-score').innerText = botScore;
        return "You lost, try again!";
    }
}

function resetGame() {
    document.querySelector('.bot-score').textContent = botScore = 0;
    document.querySelector('.player-score').textContent = playerScore = 0;
    document.querySelector('.bot-chose').textContent = " ";
    document.querySelector('.score').innerHTML = " ";

}