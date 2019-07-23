const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
const rectWidth = 100;
const rectHeight = 100;
let score = 0;
let difficulty = 1;
const squareShown = {
	w: rectWidth,
	h: rectHeight,
	x: 100,
	y: 200
}

document.addEventListener("click", function(e){
  checkUserClick(e.clientX, e.clientY)
});

const draw = () => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillText("Puntaje: " + score, 10, 50);
	drawRectangle();
}

const drawRectangle = () => {
	ctx.beginPath();
	ctx.rect(squareShown.x, squareShown.y, squareShown.w, squareShown.h);
	ctx.fillStyle = "#AAA";
	ctx.fill();
    ctx.closePath();
}

const checkUserClick = (userX, userY) => {
	if(userX >= squareShown.x &&
	userX <= squareShown.x + squareShown.w && 
	userY >= squareShown.y &&
	userY <= squareShown.y + squareShown.h){
		score++;
		generateSquareProps();
		draw();
	} 
}

const generateSquareProps = () => {
	//Generate new coords so square changes
	squareShown.x = Math.random() * (canvas.width - rectWidth);
	squareShown.y = Math.random() * (canvas.height - rectHeight);
	//Reset width
	squareShown.w = rectWidth;
	squareShown.h = rectHeight;
}	

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



if(difficulty == 1){
	setInterval(decreaseSquareSize, 50);
}else{
	draw();
}