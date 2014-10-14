// We should probably check for canvas support first...

// Canvas parameters
var context;
var canvasHeight = 500;
var canvasWidth  = 800;

// Ball start dimensions
var ballX = 100;
var ballY = 200;

//Player start dimensions
var playerHeight = 30;
var playerWidth  = 150;
var playerX = canvasWidth/2 - playerWidth/2;
var playerY = canvasHeight - playerHeight;

// Movement speed
var dx = 5;
var dy = 5;

// Other game elements
var currentLevel = 1;

// Start the game
function init() {
  context = gameCanvas.getContext('2d');
  setInterval(draw, 10);
}

// Update the canvas
function draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.beginPath();
    
    // Draw game objects
	drawBall();
	drawPlayer(); // TODO
	
	context.closePath();

    // Update game objects
    updateBallAcceleration(dx, dy, 0);
	checkCollision(ballX, ballY);
	updateBallPosition();
	updatePlayerPosition(); //TODO
}

/********* Helper functions *********/

function updatePlayerPosition(){
	// TODO
}

function drawPlayer() {
	// TODO: colour this
	context.fillRect(
		playerX, 
		playerY, 
		playerWidth, 
		playerHeight
	);
}

function drawBall() {
	context.fillStyle = "#00c39c";
    context.arc(ballX, ballY, 20, 0, Math.PI*2, true);
    context.fill();
}

/* Update the ball's position. */
function updateBallPosition(){
	ballX += dx; 
	ballY += dy;
}

/* Keep the ball within the canvas dimensions. */
function checkCollision(ballX, ballY) {
	if (ballX < 0 || ballX > canvasWidth) {
		dx =- dx;
	}; 
	if (ballY < 0 || ballY > canvasHeight) {
		dy =- dy;
	};
}

/* Needed for second level, when acceleration increases */
function updateBallAcceleration(dx, dy, acceleration_factor) {
	dx += acceleration_factor;
	dy += acceleration_factor;
}
