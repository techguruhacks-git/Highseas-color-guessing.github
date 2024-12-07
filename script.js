const colorCode = document.getElementById('color-code');
const colorButtons = document.querySelectorAll('.color-button');
const resultMessage = document.getElementById('result-message');

const score = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let scorePoint = 0;
let correctColor;

function getRandomColor(){

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r},${g}, ${b})`;
}

function startGame(){

    resultMessage.textContent = '';
    const colors = [getRandomColor(), getRandomColor() , getRandomColor()];

    correctColor = colors[Math.floor(Math.random()*colors.length)];
    colorCode.textContent = correctColor;


    colorButtons.forEach((button, index)=>{
        button.style.backgroundColor = colors[index];

        button.addEventListener("click",()=>
            checkAnswer(colors[index]));
        });

    }

    function checkAnswer(selectedColor) {

        if(selectedColor === correctColor){
            resultMessage.textContent = 'Ahoy, Correct Answer  Great Job';
            resultMessage.style.color = 'green';
            scorePoint ++;
        }

        else{
            resultMessage.textContent = 'Oh Try Again to Sail';
            resultMessage.style.color = 'red';
        }

        score.textContent = scorePoint;
        setTimeout(startGame,1000);

    }


restartButton.addEventListener('click', ()=>{

    scorePoint = 0;
    score.textContent = scorePoint;
    startGame();
    
});

startGame();


