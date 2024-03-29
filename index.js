const grid = document.querySelector(".grid");
const scoreBoard = document.querySelector(".score-tracker");
const highScoreBoard = document.querySelector(".high-score");

//Allows node to spawn in random spots after snake eats them
const randomizeNode = () => {
    nodeX = Math.floor(Math.random() * 25) + 1;
    nodeY = Math.floor(Math.random() * 25) + 1;
}

// Restart and Game Over Functions
let restartButton
let gameOver = false;
const initiateGameOver = () => {
    clearInterval(restartButton);
    alert("Game Over. Press OK to restart.")
    location.reload();
}

let nodeX, nodeY;
let snakeX = 12, snakeY = 7;
let moveLeftRight = 0, moveUpDown = 0;
let body = [];

// High score functions
let score = 0;
let recordScore = localStorage.getItem("high-score") || 0;
highScoreBoard.innerText = `High Score: ${recordScore}`;

let record = localStorage.getItem("high-score") || 0;

/* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/) */
const startGame = () => {
    if(gameOver) return initiateGameOver();
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;

    /* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/) */
    if(snakeX === nodeX && snakeY === nodeY) {
        randomizeNode();
        body.push([nodeX, nodeY]);
        score++
        scoreBoard.innerText = `Score: ${score}`;

        recordScore = score >= recordScore ? score : recordScore;
        highScoreBoard.innerText = `High Score: ${recordScore}`;
        localStorage.setItem("high-score", recordScore);
    }

    for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1]
    }

    body[0] = [snakeX, snakeY]

    snakeX += moveLeftRight;
    snakeY += moveUpDown;

    if(snakeX <= 0 || snakeX > 25 || snakeY <= 0 || snakeY > 25) {
        gameOver = true;
    }

    /* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/) */
    for (let i = 0; i < body.length; i++) {
        if (i === 0) {
            htmlMarkup += `<div class="snake" style="grid-area: ${body[i][1]} / ${body[i][0]}"></div>`;
        } else {
            htmlMarkup += `<div class="snake new-section" style="grid-area: ${body[i][1]} / ${body[i][0]}"></div>`;
        }
    
        if (i !== 0 && body[0][1] === body[i][1] && body[0][0] === body[i][0]) {
            gameOver = true;
        }
    }
    grid.innerHTML = htmlMarkup;
}

const moveSnake = (e) => {
    const directions = { 'ArrowLeft': [-1, 0], 'ArrowRight': [1, 0], 'ArrowUp': [0, -1], 'ArrowDown': [0, 1] };
    if (directions[e.key] && (directions[e.key][0] !== -moveLeftRight || directions[e.key][1] !== -moveUpDown)) {
        [moveLeftRight, moveUpDown] = directions[e.key];
        startGame();
    }
}

randomizeNode()
restartButton = setInterval(startGame, 150)
document.addEventListener("keydown", moveSnake)