const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rectWidth = 100;
const rectHeight = 100;
const squareShown = {
	x: 0,
	y: 0
}

document.addEventListener("click", function(e){
  checkUserClick(e.clientX, e.clientY)
});

const draw = () => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawRectangle();
}

const drawRectangle = () => {
	ctx.beginPath();
	let x = Math.random() * (canvas.width - rectWidth);
	let y = Math.random() * (canvas.height - rectHeight);
	squareShown.x = x;
	squareShown.y = y;
	ctx.rect(x,y, rectWidth, rectHeight);
	ctx.fillStyle = "#000000";
	ctx.fill();
    ctx.closePath();
}

const checkUserClick = (userX, userY) => {
	if(userX >= squareShown.x &&
	userX <= squareShown.x + rectWidth && 
	userY >= squareShown.y &&
	userY <= squareShown.y + rectHeight){
		draw();
	} 
}

draw();