// board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows; // 32 * 16
let context;

// ship
let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipX = tileSize * columns / 2 - tileSize;
let shipY = tileSize * rows - tileSize * 2;

let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight
};

let shipImg;
let shipVelocityX = tileSize; // ship moving speed

// aliens
let alienArray = [];
let alienWidth = tileSize * 2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienRows = 2;
let alienColumns = 3;
let alienCount = 0; // number of aliens to defeat
let alienVelocityX = 1; // alien moving speed

// bullets
let bulletArray = [];
let bulletVelocityY = -10; // bullet moving speed

let score = 0;
let gameOver = false;

// Audio files
let shootSound = new Audio('./shoot.wav'); // Shooting sound
let alienDeathSound = new Audio('./alienDeath.wav'); // Alien death sound
let gameOverSound = new Audio('./gameOver.wav'); // Game over sound (you need to provide this)

// At the top of your JavaScript file, add this line to track the Game Over element
let gameOverText;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); // used for drawing on the board

    // Load images and draw initial ship
    shipImg = new Image();
    shipImg.src = "ship.png";
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    alienImg = new Image();
    alienImg.src = "alien-magenta.png";
    createAliens();

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
    
    // Add event listener for the new game button only
    document.getElementById("newGameBtn").addEventListener("click", newGame);
};

// Draw "Game Over!" text in the center of the canvas
function drawGameOverText() {
    context.fillStyle = "red"; // Change text color to red
    context.font = "48px courier"; // Set the font size and family
    context.textAlign = "center"; // Center align the text
    context.textBaseline = "middle"; // Middle baseline for vertical alignment
    context.fillText("Game Over!", board.width / 2, board.height / 2); // Draw the text in the center of the board
}

// Main game loop
function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        // Play game over sound
        gameOverSound.play();
        // Display the Game Over text
        drawGameOverText();
        return;
    }

    context.clearRect(0, 0, board.width, board.height);

    // Ship
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

    // Aliens
    let alienArrayLength = alienArray.length; // Cache the length of the alien array

    for (let i = 0; i < alienArrayLength; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            alien.x += alienVelocityX;

            // If alien touches the borders
            if (alien.x + alien.width >= board.width || alien.x <= 0) {
                alienVelocityX *= -1;
                alien.x += alienVelocityX * 2;

                // Move all aliens down by one row
                for (let k = 0; k < alienArrayLength; k++) {
                    alienArray[k].y += alienHeight;
                }
            }

            context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);

            if (alien.y >= ship.y) {
                gameOver = true; // Set gameOver to true when aliens reach the ship
            }
        }
    }

    // Bullets
    let bulletArrayLength = bulletArray.length; // Cache the length of the bullet array

    for (let m = 0; m < bulletArrayLength; m++) {
        let bullet = bulletArray[m];
        bullet.y += bulletVelocityY;
        context.fillStyle = "white";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

        // Bullet collision with aliens
        for (let n = 0; n < alienArrayLength; n++) {
            let alien = alienArray[n];
            if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
                bullet.used = true;
                alien.alive = false;
                alienCount--;
                score += 100;

                // Play alien death sound
                alienDeathSound.play();
            }
        }
    }

    // Clear bullets
    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
        bulletArray.shift(); // removes the first element of the array
    }

    // Next level
    if (alienCount === 0) {
        // Increase the number of aliens in columns and rows by 1
        score += alienColumns * alienRows * 100; // bonus points :(
        alienColumns = Math.min(alienColumns + 1, columns / 2 - 2); // cap at 16/2 -2 = 6
        alienRows = Math.min(alienRows + 1, rows - 4);  // cap at 16-4 = 12
        if (alienVelocityX > 0) {
            alienVelocityX += 0.2; // increase the alien movement speed towards the right
        } else {
            alienVelocityX -= 0.2; // increase the alien movement speed towards the left
        }

        // Reset alien count and create new aliens
        alienCount = alienColumns * alienRows; // Reset alien count
        alienArray = []; // Clear current alien array
        createAliens(); // Recreate aliens
    }

    // Score
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 10, 20); // Display score
}

// Function to create aliens
function createAliens() {
    for (let r = 0; r < alienRows; r++) {
        for (let c = 0; c < alienColumns; c++) {
            let alien = {
                x: alienX + c * (alienWidth + 10), // Space between aliens
                y: alienY + r * (alienHeight + 10), // Space between aliens
                width: alienWidth,
                height: alienHeight,
                alive: true
            };
            alienArray.push(alien);
        }
    }
    alienCount = alienArray.length; // Update alien count
}

// Move the ship
function moveShip(event) {
    if (gameOver) return; // Prevent moving the ship if the game is over
    if (event.key === "ArrowLeft" && ship.x > 0) {
        ship.x -= shipVelocityX; // Move left
    } else if (event.key === "ArrowRight" && ship.x < board.width - ship.width) {
        ship.x += shipVelocityX; // Move right
    }
}

// Shoot a bullet
function shoot(event) {
    if (gameOver) return; // Prevent shooting if the game is over
    if (event.key === " ") { // Spacebar to shoot
        let bullet = {
            x: ship.x + ship.width / 2 - 2, // Center the bullet
            y: ship.y,
            width: 4,
            height: 10,
            used: false // Track if the bullet has hit something
        };
        bulletArray.push(bullet);
        shootSound.play(); // Play shooting sound
    }
}

// Detect collision between two rectangles
function detectCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Start a new game
function newGame() {
    gameOver = false; // Reset gameOver status
    score = 0; // Reset score
    alienArray = [];
    bulletArray = [];
    createAliens(); // Recreate aliens
    requestAnimationFrame(update); // Restart the game loop
    board.focus(); // Focus on the board to allow spacebar shooting
}



function resizeCanvas() {
    const scaleFactor = 0.9; // Scale to 90% of the screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Update the board dimensions
    board.width = Math.min(screenWidth * scaleFactor, boardWidth);
    board.height = Math.min(screenHeight * scaleFactor, boardHeight);

    board.style.width = `${board.width}px`;
    board.style.height = `${board.height}px`;

    // Optionally redraw any static elements here
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.getElementById("moveLeft").addEventListener("touchstart", () => {
    if (ship.x > 0) ship.x -= shipVelocityX; // Move left
});
document.getElementById("moveRight").addEventListener("touchstart", () => {
    if (ship.x < board.width - ship.width) ship.x += shipVelocityX; // Move right
});
document.getElementById("fire").addEventListener("touchstart", () => {
    if (!gameOver) {
        let bullet = {
            x: ship.x + ship.width / 2 - 2,
            y: ship.y,
            width: 4,
            height: 10,
            used: false
        };
        bulletArray.push(bullet);
        shootSound.play();
    }
});
