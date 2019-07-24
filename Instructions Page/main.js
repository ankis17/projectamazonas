const myIns = ["El ratón se compone de cinco partes. En la parte superior curveada se encuentra el botón derecho, el botón de desplazamiento o scroll, y el botón izquierdo. En la parte plana se encuentra el láser o bola de desplazamiento que ayuda a la computadora a saber en dónde se encuentra el ratón. Finalmente, el cable que conecta el ratón con el CPU (la computadora), el cual siempre debe estar conectado para poder funcionar. <br> <br> Para utilizar de manera correcta el ratón, puede tomarlo con su mano dominante, poniendo su palma encima de la parte curveada, con la punta de los dedos en los botones. Hágalo de tal forma en la que su mano se sienta natural y cómoda."
, "El ratón puede moverse en todas las direcciones mientras la parte plana este sobre una superficie, como una mesa o un escritorio. Este puede ir hacia arriba, abajo, diagonalmente, hacía los lados o inclusive en círculos. Mientras mueva físicamente el ratón, notará que en su computadora una flecha o alguna figura se moverá, esto es el cursor. El cursor sirve para poder moverse a través de la pantalla.  Si el cursor llega a los límites de la pantalla, se detendrá como si fuera una barrera.  "
, "Con el botón izquierdo, el de desplazamiento y el derecho, usted podrá interactuar con la computadora a través de clics. Un clic es la acción de pulsar uno de los botones y eso se verá reflejado en alguna reacción en el cursor. El botón izquierdo del ratón es el más utilizado, con el cual puede hacer clic sobre objetos en la computadora. El botón derecho convierte los clics en opciones, reflejados como cintas desplegables con distintas opciones sobre el objeto que esta seleccionando. El botón de desplazamiento sirve para navegar a través de vistas o documentos que son más largos de lo que la pantalla físicamente es. El botón de desplazamiento sirve de dos maneras, puede mantener presionado y mover el ratón hacia arriba o abajo y el cursor se desplazará hacia donde usted mueva el cursor. La segunda manera es girar el botón sin presionarlo. Cuando usted lo gire hacia abajo, el cursor irá hacia la misma dirección y viceversa.  "]
const myHeadings = ["La composición del ratón (mouse composition)",
 "El movimiento del ratón y el cursor (mouse movement and the cursor)"
 , "Los botones del ratón (mouse buttons)  "]
const myImages = ["", "", "test.png"]
const myVideos = ["", "test.mp4", ""]

let index = -1

var myInstruction = document.getElementById("instructions");
var myHeader = document.getElementById("heading");
var myImage = document.getElementById("image");
var myVideo = document.getElementById("video");

function update(direction) {
    if(direction == "left"){
        index = (index - 1) 
        if(index < 0) { index = myIns.length - 1}
    }
    else{
        index = (index + 1) % myIns.length;
    }
    updateMedia()
}

function updateMedia() {
    myHeader.innerHTML = myHeadings[index]
    myInstruction.innerHTML = myIns[index]

    myImage.src = myImages[index];

    myVideo.setAttribute("src", myVideos[index])
    if(myVideos[index]=="") { 
        myVideo.setAttribute("width", "0px")
        myVideo.setAttribute("height", "0px")
    }
    else {
        myVideo.setAttribute("width", "480px")
        myVideo.setAttribute("height", "360px")
    }
}

update("right");
if( !(myIns.length != myHeaders.length && myHeaders.length != myVideos.length && myImages.length != myVideos.length) ){
    alert("All arrays containing media must be same length or else things will get out of order! main.js")
}