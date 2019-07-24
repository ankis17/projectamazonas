const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
const circleRadius = 50;
const squareSize = 100;
const circles = [];
const squares = [];
const numCircles = 1;
const numSquares = 2;
const sizeDecrease = 20;
let score = 0;
let difficulty = 0;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

document.addEventListener("click", function(e){
  checkUserClick(e.clientX, e.clientY);
});

document.addEventListener('dblclick', function (e) {
  checkUserDblClick(e.clientX, e.clientY);
});

const draw = () => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCircles();
	drawSquares();
}

const drawSquares = () => {
	if(squares.length === 0) generateSquares();
	for (let i = 0; i < squares.length; i++) {
		drawSquare(squares[i]);
	}
}

const drawSquare = (square) => {
	ctx.beginPath();
	ctx.rect(square.x, square.y, squareSize, squareSize);
	ctx.fillStyle = square.color;
	ctx.fill();
    ctx.closePath();
}

const generateSquares = () => {
	for (let i = 0; i < numSquares; i++) {
		squares.push(generateSquare());
	}
}

const generateSquare = () => {
	let {x, y} = generateRandCoords(squareSize);
	return {
		size: squareSize,
		color: getRandomColor(),
		x,
		y
	}
}

const drawCircles = () => {
	if(circles.length === 0) generateNewCircles();
	for (let i = 0; i < circles.length; i++) {
		drawCircle(circles[i]);
	}
}

const drawCircle = (circle) => {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
	ctx.fillStyle = circle.color;
	ctx.fill();
	ctx.stroke(); 
	ctx.closePath();
}


const checkUserClick = (userX, userY) => {
	for (let i = circles.length - 1; i >= 0; i--) {
		let dx = circles[i].x - userX;
		let dy = circles[i].y - userY;
		let distance = Math.sqrt((dx * dx) + (dy * dy));
		if(distance <= circles[i].r){
			circles.splice(i,1);
			score++;
			draw();
			break;
		} 
	}
	
}

const checkUserDblClick = (userX, userY) => {
	for (let i = squares.length - 1; i >= 0; i--) {
		if(userX >= squares[i].x &&
		userX <= squares[i].x +  squares[i].size && 
		userY >= squares[i].y &&
		userY <= squares[i].y + squares[i].size){
			squares.splice(i,1);
			draw();
			break;
		} 
	}
	
}

const getRandomColor = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random()* 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}	

const generateNewCircle = () => {
	let circle = {};
	generateCircleProps(circle);
	return circle;
}

const generateCircleProps = (circle) => {
	//Reset width
	circle.r = circleRadius;
	//Color
	circle.color = getRandomColor();
	//Coorddenates
	let {x,y} = generateRandCoords(circle.r);
	circle.x = x;
	circle.y = y;
}

const generateNewCircles = () => {
	for (let i = 0; i < numCircles; i++) {
		circles.push(generateNewCircle());
	}
}

const gameOver = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText("Puntaje: " + score + " Quieres jugar de nuevo? ", 0, canvas.height / 2);
}

const generateRandCoords = (offset) => {
	//Generate new coords so square changes
	x = Math.random() * (canvas.width - offset);
	y = Math.random() * (canvas.height - offset);
	return {x,y};
}


generateNewCircles();
if(difficulty == 1){
	setInterval(decreaseSquareSize, 50);
}else{
	draw();
}