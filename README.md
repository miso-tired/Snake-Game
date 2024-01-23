# Snake-Game

*Description*
A basic snake game. Try to collect the nodes to make the snake big as possible and try to survive as long as you can!

*Known Bugs/Flaws*
- When moving the snake, it is possible to increase its speed if the user holds down on an arrow key. This bug was not found until testing that was conducted around 2 days leading up to project presentations. I could not figure out how to resolve this bug in time.
- The game only uses arrow keys on a keyboard. This can be a drawback to some users who have keyboards that do not have arrow keys.

*Developer Issues and Things I Learned from Completing the Web Browser Game Project*
When creating the game there were a lot of features that I did not know how to tackle. For example, after creating the node and snake head, I did not know where to start to create a function that randomizes where the node spawns after being eaten. This was overcome by looking at code from a tutorial on how to make a snake game. By looking at this tutorial, I was able to learn how to use the Math.floor and Math.random functions to create a function that gives random coordinates on the grid for the next spawn point of the nodes. Another issue I needed help with was creating a grid layout for the game background. This was overcome by looking at code for the same tutorial that helped me with creating a function to randomize the spawns for the nodes. I learned that there was a "grid" and "grid-template" property in CSS that allows developers to create grid layouts in certain sections of a webpage. For this project I used the "grid" and "grid-template" properties to create a 25x25 grid for the background of the snake game. This grid layout allows the snake and nodes to move in an orgarnized section of the webpage. I also had issues creating a function for a high score tracker after creating a current score tracker. The tutorial for the snake game also helped me resolve this issue by introducing me to the local.storage API. This API stores data locally, in the user's web browser, even after the user closes the browser. The trickiest part of the high score tracker for me was the following code: "recordScore = score >= recordScore ? score : recordScore;" After reviewing the code, I learned that setting the "score" greater than or equal to "recordScore" allows the high score tracker to always display the previous highest score to what is locally stored in the user's web browser. Once the score becomes equal to or greater than the highest score stored in the browser, then the code, "let recordScore = localStorage.getItem("high-score") || 0;
highScoreBoard.innerText = `High Score: ${recordScore}`;" works to update the new high score in the game and store the new data in the user's browser.

*Citations*
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

CodingNepal demonstrates how to set up a high-score tracker, which collects data from the user's local storage:
CodingNepal (2023). How to Create A Snake Game in HTML CSS & JavaScript (v1) [recordScore = score >= recordScore ? score : recordScore;
        highScoreBoard.innerText = `High Score: ${recordScore}`;
        localStorage.setItem("high-score", recordScore);]. https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

