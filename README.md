# Snake-Game
A basic snake game. Try to collect the nodes to make the snake big as possible and try to survive as long as you can!
In order to make a grid in the CSS file I used CodingNepal to help code:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [.wrapper {
    display: flex;
    flex-direction: column;
    width: 70vmin;
    height: 70vmin;
    background: #ccc;
    border-radius: 10px;
}
.grid {
    background: #b7b1e6;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: repeat(25, 1fr) / repeat(25, 1fr);
}]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

To make a node for the snake to eat and the snake head I used CodingNepal for help again:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [const startGame = () => {
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    grid.innerHTML = htmlMarkup;
}]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

Used CodingNepal to help figure out how to randomize node position once the snake "eats" the node:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [if(snakeX === nodeX && snakeY === nodeY) {
        randomizeNode();
    }]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

Needed help extending snake body after each node eaten, used CodingNepal:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1]
    }]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

Used CodingNepal to reload page after pressing "OK" to restart the game:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [const initiateGameOver = () => {
    clearInterval(restartButton);
    alert("Game Over. Press OK to restart.")
    location.reload();
}]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/
