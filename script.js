    var button = document.querySelector("button");
    var words = document.querySelector(".words");
    var errorDiv = document.querySelector(".error");
    var errors = 0;
    var spans;
    var typed;
    var curIndex = 0;
    var alphanumeric = /[ A-Za-z0-9]/; 
    const list = [
        'como',
        'esta',
        'perro',
        'gato',
        'uno',
        'dos',
        'tres',
        'quatro'
    ];
    let progressIncrement = (1/list.length) * 100;
    let width = progressIncrement - 1;

    function random() {
        words.innerHTML = "";
        curIndex = 0;
        typed = "";
        var random = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
        var wordArray = list[random].split("");
        for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
            var span = document.createElement("span");
            span.classList.add("span");
            span.innerHTML = wordArray[i];
            words.appendChild(span);
        }
        spans = document.querySelectorAll(".span");
    }

function validateKeypress(validChars, e) {
    var keyChar = String.fromCharCode(e.which);
    return validChars.test(keyChar) ? keyChar : false;
}



    function typing(e) {
           if(validateKeypress(alphanumeric, e)) {
            typed = String.fromCharCode(e.which);
            //console.log(typed);
            //console.log(curIndex);
                if (spans[curIndex].innerHTML === typed) { // if typed letter is the one from the word
                        if (spans[curIndex].classList.contains("bg-wrong") ){

                        spans[curIndex].classList.remove("bg-wrong");
                        }
                        spans[curIndex].classList.add("bg");
                        curIndex +=1 ;
                } else {
                    errors +=1;
                    errorDiv.innerHTML = errors;
                    spans[curIndex].classList.add("bg-wrong");

                }
            if (curIndex === spans.length ) { // if so, animate the words with animate.css class
                document.removeEventListener("keypress", typing, false);
                setTimeout(function(){
                    words.className = "words"; // restart the classes
                    move(width);
                    width+= progressIncrement;
                    random(); // give another word
                    document.addEventListener("keypress", typing, false);
                }, 400);
            }
           } 

    }

    random();
    document.addEventListener("keypress", typing, false);

    function move(width) {
        var elem = document.getElementById("progressBar"); 
        frame();
        function frame() {
          if (width >= 100) {
            elem.style.width = 0;
          } else {
            elem.style.width = width + '%'; 
          }
        }
      }

