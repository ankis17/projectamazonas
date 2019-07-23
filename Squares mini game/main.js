const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rectWidth = 100;
const rectHeight = 100;

document.addEventListener("click", function(){
  draw();
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
	ctx.rect(x,y, rectWidth, rectHeight);
	ctx.fillStyle = "#000000";
	ctx.fill();
    ctx.closePath();
}
