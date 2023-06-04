let grid = document.getElementById("grid");
const scoreText = document.querySelector("#scoreText");
const highScoreText = document.querySelector("#highScoreText");
const resetButton = document.querySelector("#resetButton");
let square = document.getElementsByClassName("square");
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
const gameOverText = document.createTextNode("GAME OVER!");
const span = document.createElement("span");
let running = false;
let snake = {
    body: [[0, 0], [0, 1], [0, 2], [0, 3]],
    nextDirection: [0, 1],
};
let gameState = {
    appleArr: [],
    snake: snake
};
let score = 0;
let appleX;
let appleY;
let apple = [];
let tableArray = [
    ["0, 0", "0, 1", "0, 2", "0, 3", "0, 4", "0, 5", "0, 6", "0, 7", "0, 8", "0, 9", "0, 10", "0, 11", "0, 12", "0, 13", "0, 14", "0, 15", "0, 16", "0, 17", "0, 18", "0, 19"],
    ["1, 0", "1, 1", "1, 2", "1, 3", "1, 4", "1, 5", "1, 6", "1, 7", "1, 8", "1, 9", "1, 10", "1, 11", "1, 12", "1, 13", "1, 14", "1, 15", "1, 16", "1, 17", "1, 18", "1, 19"],
    ["2, 0", "2, 1", "2, 2", "2, 3", "2, 4", "2, 5", "2, 6", "2, 7", "2, 8", "2, 9", "2, 10", "2, 11", "2, 12", "2, 13", "2, 14", "2, 15", "2, 16", "2, 17", "2, 18", "2, 19"],
    ["3, 0", "3, 1", "3, 2", "3, 3", "3, 4", "3, 5", "3, 6", "3, 7", "3, 8", "3, 9", "3, 10", "3, 11", "3, 12", "3, 13", "3, 14", "3, 15", "3, 16", "3, 17", "3, 18", "3, 19"],
    ["4, 0", "4, 1", "4, 2", "4, 3", "4, 4", "4, 5", "4, 6", "4, 7", "4, 8", "4, 9", "4, 10", "4, 11", "4, 12", "4, 13", "4, 14", "4, 15", "4, 16", "4, 17", "4, 18", "4, 19"],
    ["5, 0", "5, 1", "5, 2", "5, 3", "5, 4", "5, 5", "5, 6", "5, 7", "5, 8", "5, 9", "5, 10", "5, 11", "5, 12", "5, 13", "5, 14", "5, 15", "5, 16", "5, 17", "5, 18", "5, 19"],
    ["6, 0", "6, 1", "6, 2", "6, 3", "6, 4", "6, 5", "6, 6", "6, 7", "6, 8", "6, 9", "6, 10", "6, 11", "6, 12", "6, 13", "6, 14", "6, 15", "6, 16", "6, 17", "6, 18", "6, 19"],
    ["7, 0", "7, 1", "7, 2", "7, 3", "7, 4", "7, 5", "7, 6", "7, 7", "7, 8", "7, 9", "7, 10", "7, 11", "7, 12", "7, 13", "7, 14", "7, 15", "7, 16", "7, 17", "7, 18", "7, 19"],
    ["8, 0", "8, 1", "8, 2", "8, 3", "8, 4", "8, 5", "8, 6", "8, 7", "8, 8", "8, 9", "8, 10", "8, 11", "8, 12", "8, 13", "8, 14", "8, 15", "8, 16", "8, 17", "8, 18", "8, 19"],
    ["9, 0", "9, 1", "9, 2", "9, 3", "9, 4", "9, 5", "9, 6", "9, 7", "9, 8", "9, 9", "9, 10", "9, 11", "9, 12", "9, 13", "9, 14", "9, 15", "9, 16", "9, 17", "9, 18", "9, 19"],
    ["10, 0", "10, 1", "10, 2", "10, 3", "10, 4", "10, 5", "10, 6", "10, 7", "10, 8", "10, 9", "10, 10", "10, 11", "10, 12", "10, 13", "10, 14", "10, 15", "10, 16", "10, 17", "10, 18", "10, 19"],
    ["11, 0", "11, 1", "11, 2", "11, 3", "11, 4", "11, 5", "11, 6", "11, 7", "11, 8", "11, 9", "11, 10", "11, 11", "11, 12", "11, 13", "11, 14", "11, 15", "11, 16", "11, 17", "11, 18", "11, 19"],
    ["12, 0", "12, 1", "12, 2", "12, 3", "12, 4", "12, 5", "12, 6", "12, 7", "12, 8", "12, 9", "12, 10", "12, 11", "12, 12", "12, 13", "12, 14", "12, 15", "12, 16", "12, 17", "12, 18", "12, 19"],
    ["13, 0", "13, 1", "13, 2", "13, 3", "13, 4", "13, 5", "13, 6", "13, 7", "13, 8", "13, 9", "13, 10", "13, 11", "13, 12", "13, 13", "13, 14", "13, 15", "13, 16", "13, 17", "13, 18", "13, 19"],
    ["14, 0", "14, 1", "14, 2", "14, 3", "14, 4", "14, 5", "14, 6", "14, 7", "14, 8", "14, 9", "14, 10", "14, 11", "14, 12", "14, 13", "14, 14", "14, 15", "14, 16", "14, 17", "14, 18", "14, 19"],
    ["15, 0", "15, 1", "15, 2", "15, 3", "15, 4", "15, 5", "15, 6", "15, 7", "15, 8", "15, 9", "15, 10", "15, 11", "15, 12", "15, 13", "15, 14", "15, 15", "15, 16", "15, 17", "15, 18", "15, 19"],
    ["16, 0", "16, 1", "16, 2", "16, 3", "16, 4", "16, 5", "16, 6", "16, 7", "16, 8", "16, 9", "16, 10", "16, 11", "16, 12", "16, 13", "16, 14", "16, 15", "16, 16", "16, 17", "16, 18", "16, 19"],
    ["17, 0", "17, 1", "17, 2", "17, 3", "17, 4", "17, 5", "17, 6", "17, 7", "17, 8", "17, 9", "17, 10", "17, 11", "17, 12", "17, 13", "17, 14", "17, 15", "17, 16", "17, 17", "17, 18", "17, 19"],
    ["18, 0", "18, 1", "18, 2", "18, 3", "18, 4", "18, 5", "18, 6", "18, 7", "18, 8", "18, 9", "18, 10", "18, 11", "18, 12", "18, 13", "18, 14", "18, 15", "18, 16", "18, 17", "18, 18", "18, 19"],
    ["19, 0", "19, 1", "19, 2", "19, 3", "19, 4", "19, 5", "19, 6", "19, 7", "19, 8", "19, 9", "19, 10", "19, 11", "19, 12", "19, 13", "19, 14", "19, 15", "19, 16", "19, 17", "19, 18", "19, 19"]
];
let highScore = "0";
const selectMode = document.getElementById("Mode");
selectMode.addEventListener("click", function () {
    var options = selectMode.querySelectorAll("option");
    var count = options.length;
    if (typeof (count) === "undefined" || count < 2) {
        console.log('hello')
        nextTick();
    }
});


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    const goingRight = (snake.nextDirection[1] === 1);
    const goingLeft = (snake.nextDirection[1] === -1);
    const goingDown = (snake.nextDirection[0] === 1);
    const goingUp = (snake.nextDirection[0] === -1);

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {

        if ( xDiff > 0 && !goingRight) {
            /* left swipe */ 
            console.log('left swipe')
            snake.nextDirection[0] = 0;
            snake.nextDirection[1] = -1;
        } 
        if ( xDiff < 0 && !goingLeft) {
            /* right swipe */
            console.log('right swipe')
            snake.nextDirection[0] = 0;
            snake.nextDirection[1] = 1;
        }                       
    } else {           
        if ( yDiff > 0 && !goingDown) {
            /* up swipe */ 
            console.log('up swipe')
            snake.nextDirection[0] = -1;
            snake.nextDirection[1] = 0;
        }
        if( yDiff < 0 && !goingUp)  { 
            /* down swipe */
            console.log('down swipe')
            snake.nextDirection[0] = 1;
            snake.nextDirection[1] = 0;                                                     
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
}

document.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);
document.getElementById("grid").appendChild(span);
selectMode.addEventListener("change", nextTick);
initializeGame();

function initializeGame() {
    running = true;
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    grid = "";
    createTable(tableArray);
    createApple();
    paintApple();
    paintSnake();
    nextTick();
}

function createTable(tableData) {

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
            for (let i = 0; i < 20; i++) {
                cell.className = "square"
                // cell.
            }
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function nextTick() {
    if (running && selectMode.value == "easyMode") {
        setTimeout(() => {
            console.log('this is easy');
            checkGameOver();
            moveSnake();
            paintSnake();
            nextTick();
        }, 100);
    };
    if (running && selectMode.value == "mediumMode") {
        setTimeout(() => {
            console.log('this is medium');
            checkGameOver();
            moveSnake();
            paintSnake();
            nextTick();
        }, 75);
    };
    if (running && selectMode.value == "difficultMode") {
        setTimeout(() => {
            console.log('this is difficult');
            checkGameOver();
            moveSnake();
            paintSnake();
            nextTick();
        }, 50);
    };
};


function createApple() {
    function randomFood(min, max) {
        const randomNum = Math.round((Math.random() * (max - min) + min) / 25)
        return randomNum;
    }
    appleX = randomFood(0, (500 - 25));
    apple.push(appleX);
    appleY = randomFood(0, (500 - 25));
    apple.push(appleY);
    gameState.appleArr.push(apple);
    paintApple();
};


function paintApple() {
    let tbody = table.childNodes[0];
    let tr = tbody.childNodes;
    for (let i = 0; i < tr.length; i++) {
        let tds = tr[i].childNodes;
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j]
            if ((apple[0] !== i) || (apple[1] !== j)) {
                td.classList.remove('apple');
            };
            if (apple[0] === i && apple[1] === j) {
                td.classList.add('apple')
            };
        }
    };
};

function moveSnake() {
    const head = {
        x: snake.body[snake.body.length - 1][0],
        y: snake.body[snake.body.length - 1][1]
    };

    let growSnake = snake.body.push([(head.x + snake.nextDirection[0]), (head.y + snake.nextDirection[1])]);
    //if head is where the apple is, push the coordinate to the end of the array to make a new head
    // else, delete the end of the array
    if ((head.x === apple[0]) && (head.y === apple[1])) {
        growSnake;
        apple = [];
        score += 1;
        scoreText.textContent = `Score: ${score}`;
        createApple();
    } else {
        snake.body.shift(snake.body[0][0], snake.body[0][1]);
    };
};

function paintSnake() {
    let tbody = table.childNodes[0];
    let tr = tbody.childNodes;
    for (let i = 0; i < tr.length; i++) {
        let tds = tr[i].childNodes
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j];
            for (let k = 0; k < snake.body.length; k++) {
                if (k === 0) {
                    td.classList.remove('snake');
                };
                if (snake.body[k][0] === i && snake.body[k][1] === j) {
                    td.classList.add('snake');
                };
            };
        };
    };
};

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingRight = (snake.nextDirection[1] === 1);
    const goingLeft = (snake.nextDirection[1] === -1);
    const goingDown = (snake.nextDirection[0] === 1);
    const goingUp = (snake.nextDirection[0] === -1);

    switch (true) {
        case (keyPressed == LEFT && !goingRight):
            snake.nextDirection[0] = 0;
            snake.nextDirection[1] = -1;
            break;
        case (keyPressed == UP && !goingDown):
            snake.nextDirection[0] = -1;
            snake.nextDirection[1] = 0;
            break;
        case (keyPressed == RIGHT && !goingLeft):
            snake.nextDirection[0] = 0;
            snake.nextDirection[1] = 1;
            break;
        case (keyPressed == DOWN && !goingUp):
            snake.nextDirection[0] = 1;
            snake.nextDirection[1] = 0;
            break;
    }
};

function checkGameOver() {
    const head = {
        x: snake.body[snake.body.length - 1][0],
        y: snake.body[snake.body.length - 1][1]
    };

    for (let i = 0; i < snake.body.length - 1; i++) {
        if ((snake.body[i][0] === head.x) && (snake.body[i][1] === head.y)) {
            running = false;
        }
    }

    switch (true) {
        case (head.x < 0):
            running = false;
            break;
        case (head.x >= 20):
            running = false;
            break;
        case (head.y < 0):
            running = false;
            break;
        case (head.y >= 20):
            running = false;
            break;
    };
    if (running === false) {
        displayGameOver();
    };

};

function displayGameOver() {
    span.appendChild(gameOverText);
    if (score > highScore) {
        highScoreText.textContent = `Highest Score: ${score}`;
    };
};

function resetGame() {
    snake = {
        body: [[0, 0], [0, 1], [0, 2], [0, 3]],
        nextDirection: [0, 1],
    };
    tableArray = [];
    span.removeChild(gameOverText);
    initializeGame();
};