var i = 0;
var txt = 'ahora practica  ';
var speed = 500; 
var level = "Mayúsculas"

function main () {
document.getElementById("header").innerHTML += level;
document.getElementById("pic").src = level+".PNG"
switch(level){
    case "Minúsculas":
        txt = "ahora practica   ";
        document.getElementById("tutorial").innerHTML = "Encuentras la letra que deseas escribir en el teclado y oprimir el botón." 
        break;
    case "Mayúsculas":
        txt = "AHORA PRACTICA    ";
        document.getElementById("tutorial").innerHTML = 'Encuentras <mark class = "red"> el botón resaltado en rojo </mark> y también <mark class = "green"> la letra </mark> que deseas escribir en el teclado. Primero oprimes <mark class = "red"> el botón rojo </mark> y manten presionado al oprimir <mark class = "green"> la letra </mark> que quieres.' 
        break
}
typeWriter();
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i== txt.length){
    document.getElementById("output").innerHTML = "";  
    i=0;
  }
}