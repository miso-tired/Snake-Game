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