const playerOne = document.querySelector('#p1goal');
const playerTwo = document.querySelector('#p2goal');
const p1Dis = document.querySelector('#p1Dis');
const p2Dis = document.querySelector('#p2Dis');
const resetButs = document.querySelector('#reset');
const scoreShouldBe = document.querySelector('#playto');
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
playerOne.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Dis.classList.add('has-text-success');
            p2Dis.classList.add('has-text-danger');
            playerOne.disabled = true;
            playerTwo.disabled = true;
        }
        p1Dis.textContent = p1Score;
}
}) 
playerTwo.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
   if(p2Score === winningScore){
       isGameOver = true;
       p1Dis.classList.add('has-text-success');
       p2Dis.classList.add('has-text-danger');
       playerOne.disabled = true;
       playerTwo.disabled = true;
}
    p2Dis.textContent = p2Score;
   }
}) 
scoreShouldBe.addEventListener('change', function(){
    winningScore =  parseInt(this.value);
    reset();
})
resetButs.addEventListener('click', reset);
function reset(){2
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Dis.textContent = 0;
    p2Dis.textContent = 0;
    p1Dis.classList.remove('has-text-success', 'has-text-danger');
    p2Dis.classList.remove('has-text-success', 'has-text-danger');
    playerOne.disabled = false;
    playerTwo.disabled = false;
}