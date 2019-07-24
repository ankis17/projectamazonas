var i = 0;
var txt = 'ahora practica ';
var speed = 500;
var level = "Mayúsculas" //changing this variable name changes elements displayed

function main() {
  document.getElementById("header").innerHTML += level;
  switch (level) {
    case "Minúsculas": //lowercase (level 1)
      document.getElementById("tutorial").innerHTML = "Encuentras la letra que deseas escribir en el teclado y oprimir el botón."
      document.getElementById("pic").src = level + ".PNG"
      txt = "ahora practica  ";
      document.getElementById("intro").innerHTML = "El teclado esta formado por varios botones los cuales al presionarlos individualmente o al mismo tiempo generan una letra o símbolo. Como puedes observar en el teclado se encuentran las letras del alfabeto, así que cuando desees escribir una letra en el monitor de la computadora solo debes de presionarla, ten en cuenta que la letra será minúscula."
      break;
    case "Mayúsculas": //uppercase (level 2)
      document.getElementById("pic").src = level + ".PNG"
      txt = "AHORA PRACTICA   ";
      document.getElementById("tutorial").innerHTML = 'Encuentras <mark class = "red"> el botón resaltado en rojo </mark>(uno de los dos) y también <mark class = "green"> la letra </mark> que deseas escribir en el teclado. Primero oprimes <mark class = "red"> el botón rojo </mark> y manten presionado al oprimir <mark class = "green"> la letra </mark> que quieres.'
      document.getElementById("tutorial2").innerHTML = 'Para escribir oraciones, necesitas espacios para separar palabras. Para hacer esto en un teclado necesitas apretar <mark class = "purple"> la tecla de espacio </mark>.'
      document.getElementById("intro").innerHTML = 'Si deseas escribir una letra mayúscula debes presionar <mark class = "red"> la tecla (Shift) con el símbolo de la flecha que apunta hacia arriba,</mark> dejarla presionada y después oprime <mark class = green> la tecla de la letra que deseas </mark> en mayúscula. Si necesitas escribir varias letras en mayúsculas también existe <mark class = darkGreen> la tecla “Bloq. Mayús.” </mark> Después de presionar este botón una vez, todas las letras saldrán en mayúsculas hasta que lo desactives (presionarlo una segunda vez). <br> <br> Normalmente las oraciones se terminan con un punto, para esto existe <mark class = "orange"> la siguiente tecla,</mark> si la presionas aparecerá un punto.'
      break;
    case "Caracteres Especiales": //special characters (level 3)
      txt = "¡Ahora Practica!  "
      document.getElementById("intro").innerHTML = "Como puedes observar el teclado tiene diferentes símbolos aparte de las letras y el punto. ¡Vamos a aprender a escribir estas letras! ¿Recuerdas la tecla de la flecha hacia arriba, si? ¡Genial!"
      document.getElementById("message").innerHTML = "";
      document.getElementById("pic").src = "specialNoShift.PNG";
      document.getElementById("tutorial").innerHTML = '<mark class = "purple"> Estos caracteres que estan abajo en la tecla </mark>son muy similares a letras minúsculas. Solamente necesitas oprimir la tecla. '
      document.getElementById("pic2").src = "shift.PNG";
      document.getElementById("tutorial2").innerHTML = 'Los caracteres que están <mark class = "green"> arriba en las teclas </mark>funcionan muy similares a letras mayúsculas. Usa <mark class = "red"> la tecla de la flecha hacia arriba </mark>mientras oprimes tu tecla.';
      document.getElementById("pic3").src = "altGR.PNG";
      document.getElementById("tutorial3").innerHTML = 'Por último, los caracteres de la derecha se obtienen al mantener presionada la tecla <mark class = "blue"> Alt Gr </mark>junto con la tecla del símbolo';
      document.getElementById("pic4").src = "accents.PNG";
      document.getElementById("tutorial4").innerHTML = 'Para acentuar tus palabras presiona <mark class = "red"> la tecla de acentuación </mark> (junto a la tecla P) seguido de <mark class = "green"> la tecla a acentuar </mark>. Recuerda no presionarlas al mismo tiempo';
  }
  typeWriter();
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == txt.length) {
    document.getElementById("output").innerHTML = "";
    i = 0;
  }
}