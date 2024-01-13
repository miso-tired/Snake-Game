const grid = document.querySelector(".grid");

const randomizeNode = () => {
    nodeX = Math.floor(Math.random() * 25) + 1;
    nodeY = Math.floor(Math.random() * 25) + 1;
}

const initiateGameOver = () => {
    clearInterval(restartButton);
    alert("Game Over. Press OK to restart.")
    location.reload();
}

let nodeX, nodeY;
let snakeX = 5, snakeY = 10;
let moveX = 0, moveY = 0;
let body = [];
let gameOver = false;
let restartButton


/* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/ */
const startGame = () => {
    if(gameOver) return initiateGameOver();
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;

    /* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/ */
    if(snakeX === nodeX && snakeY === nodeY) {
        randomizeNode();
        body.push([nodeX, nodeY]);
    }

    for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1]
    }

    body[0] = [snakeX, snakeY]

    snakeX += moveX;
    snakeY += moveY;

    if(snakeX <= 0 || snakeX > 25 || snakeY <= 0 || snakeY > 25) {
        gameOver = true;
    }

    for (let i = 0; i < body.length; i++) {
        htmlMarkup += `<div class="snake" style="grid-area: ${body[i][1]} / ${body[i][0]}"></div>`;
    }

    grid.innerHTML = htmlMarkup;
}

const moveSnake = (e) => {
    if(e.key === 'ArrowLeft' && moveX != 1){
        moveX = -1;
        moveY = 0;
    } else if(e.key === 'ArrowRight' && moveX != -1){
        moveX = 1;
        moveY = 0;
    } else if(e.key === 'ArrowUp' && moveY != 1){
        moveX = 0;
        moveY = -1;
    } else if(e.key === 'ArrowDown' && moveY != -1){
        moveX = 0;
        moveY = 1;
    }
    startGame()
}

randomizeNode()
restartButton = setInterval(startGame, 150)
document.addEventListener("keydown", moveSnake)