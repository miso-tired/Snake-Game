const grid = document.querySelector(".grid");

const randomizeNode = () => {
    nodeX = Math.floor(Math.random() * 25) + 1;
    nodeY = Math.floor(Math.random() * 25) + 1;
}

let nodeX, nodeY;
let snakeX = 5, snakeY = 10;


/* Title: How to Create A Snake Game in HTML CSS & JavaScript * Author:(CodingNepal) * Date: (February, 17, 2023) * Code version:(v1) * Availability: (https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/ */
const startGame = () => {
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    grid.innerHTML = htmlMarkup;
}


randomizeNode()
startGame()