const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
const circleRadius = 50;
const circles = [];
const numCircles = 50;
const sizeDecrease = 20
let score = 0;
let difficulty = 0;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

document.addEventListener("click", function(e){
  checkUserClick(e.clientX, e.clientY);
});

const draw = () => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCircles();
}

const drawCircles = () => {
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
			if(circles.length === 0) generateNewCircles();
			score++;
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

const generateCircleProps = (circle) => {
	//Generate new coords so square changes
	circle.x = Math.random() * (canvas.width - circleRadius);
	circle.y = Math.random() * (canvas.height - circleRadius);
	//Reset width
	circle.r = circleRadius;
	//Color
	circle.color = getRandomColor();
}	

const generateNewCircle = () => {
	let circle = {};
	generateCircleProps(circle);
	return circle;
}

const generateNewCircles = () => {
	for (let i = 0; i < numCircles; i++) {
		circles.push(generateNewCircle());
	}
}

//Still has to be change to circles
const decreaseSquareSize = () => {
	if(squareShown.w >= 0 && squareShown.h >= 0){
		squareShown.w--;
		squareShown.h--;
		draw();
	}else {
		gameOver();
	}
}

const gameOver = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText("Puntaje: " + score + " Quieres jugar de nuevo? ", 0, canvas.height / 2);
}


generateNewCircles();
if(difficulty == 1){
	setInterval(decreaseSquareSize, 50);
}else{
	draw();
}