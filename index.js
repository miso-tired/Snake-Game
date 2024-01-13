const grid = document.querySelector(".grid");

const randomizeNode = () => {
    nodeX = Math.floor(Math.random() * 25) + 1;
    nodeY = Math.floor(Math.random() * 25) + 1;
}

let nodeX, nodeY;

const startGame = () => grid.innerHTML = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;

randomizeNode()
startGame()