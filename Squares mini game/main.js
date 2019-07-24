const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
const circleRadius = 50;
const squareSize = 100;
const circles = [];
const squares = [];
let numCircles = 1;
let numSquares = 0;
let circlesClicked = 0;
let squaresClicked = 0;
const sizeDecrease = 20;
let score = 0;
let difficulty = 0;
let level = 5;
let startTime = null;
let theInterval;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

document.addEventListener("click", function(e){
  checkUserClick(e.clientX, e.clientY);
});

document.addEventListener('dblclick', function (e) {
  checkUserDblClick(e.clientX, e.clientY);
});

const draw = () => {
	// if(circles.length === 0 && squares.length === 0) {
	// 	level++;
	// }; //Starts at level 0 but inmmediatly goes to level 1
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillText("Nivel " + level, 20, 50); 
	switch(level){
		case 1:
			ctx.fillText("Para pasar el nivel presiona sobre el circulo una vez el boton izquiero del raton.", 20, 80);
			circles.push({
				r: 100,
				color: getRandomColor(),
				x: canvas.width / 2,
				y: canvas.height / 2
			}) 
		break;
		case 2:
			numCircles = 4;
			generateNewCircles();
		break;
		case 3:
			ctx.fillText("Para pasar el nivel presiona sobre el circulo 2 veces rapidamente el boton izquiero del raton.", 20, 80);
			squares.push({
				size: 200,
				color: getRandomColor(),
				x: canvas.width / 2 - 100,
				y: canvas.height / 2 - 100
			}) 
		break;
		case 4:
			numSquares = 4;
			generateSquares();
		break;
		case 5:
			if(startTime === null){
				startTime=new Date();
				numCircles = 5;
				numSquares = 5;
				generateSquares();
				generateNewCircles();
				// turn on the ticker and get a reference to the object
				theInterval=setInterval(drawElapsedTime, 20);			
			}
			if(circles.length === 0 && squares.length === 0){
				// turn off the ticker
				clearInterval(theInterval);
				drawFinalElapsedTime();
			}
		break;
	}
	
	drawCircles();
	drawSquares();
}

const drawFinalElapsedTime = () =>{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillText("Nivel " + level, 20, 50); 
    let elapsed = parseInt((new Date() - startTime)/1000);
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle="#000";
    ctx.font="40px Verdana"
    // draw the running time at half opacity
    ctx.fillText("Terminaste en " + elapsed +" segundos.", canvas.width / 2 - 500,canvas.height / 2);
    ctx.fillText("Puedes hacerlo en menor tiempo?",canvas.width / 2 - 500,canvas.height / 2 + 100);
    ctx.restore();
    setTimeout(tryAgain, 3000);
}

const tryAgain = () => {
	if(window.confirm("Intentar de nuevo?")){
    	startTime = null;
    	draw();
    }
}

const drawElapsedTime = () =>{
	draw();
    let elapsed = parseInt((new Date() - startTime)/1000);
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.font="15px Verdana"
    // draw the running time at half opacity
    ctx.globalAlpha=0.50;
    ctx.fillText(elapsed +" seg",canvas.width -75, 25);
    ctx.restore();
}

const drawSquares = () => {
	for (let i = 0; i < squares.length; i++) {
		drawSquare(squares[i]);
	}
}

const drawSquare = (square) => {
	ctx.beginPath();
	ctx.rect(square.x, square.y, square.size, square.size);
	ctx.fillStyle = square.color;
	ctx.fill();
    ctx.closePath();
}

const generateSquares = () => {
	squaresClicked = 0;
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
			circlesClicked++;
			circles.splice(i,1);
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
			squaresClicked++;
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
	circlesClicked = 0;
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


if(difficulty == 1){
	setInterval(decreaseSquareSize, 50);
}else{
	draw();
}

