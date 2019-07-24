    var button = document.querySelector("button");
    var words = document.querySelector(".words");
    var errorDiv = document.querySelector(".error");
    var errors = 0;
    var wordsDiv = document.querySelector(".wordsCompleted");
    var wordsCompletedVar = 0;
    var spans;
    var typed;
    var curIndex = 0;
    var alphanumeric = /[ A-Za-z0-9]/; 
    var level = 1;
    const list1 = [
        'como',
        'esta',
        'perro',
        'gato',
        'hola',
        'rojo',
        'verde',
        'blanco',
    ];
    const list2 = [
        'acomo',
        'aesta',
        'aperro',
        'agato',
        'ahola',
        'arojo',
        'averde',
        'ablanco',
    ];
    const list3 = [
        'bcomo',
        'besta',
        'bperro',
        'bgato',
        'bhola',
        'brojo',
        'bverde',
        'bblanco',
    ];
    let progressIncrement = 5; //Math.floor((1/list.length) * 100);
    let width = 0;

    function random() {
        words.innerHTML = "";
        curIndex = 0;
        typed = "";
        var random = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

        if (level === 1) 
            var wordArray = list1[random].split("");
        else if (level === 2) {
            var wordArray = list2[random].split("");
        }
        else 
            var wordArray = list3[random].split("");

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
                if (spans[curIndex].innerHTML === typed) { // if typed letter is the one from the word
                        if (spans[curIndex].classList.contains("bg-wrong") ){

                        spans[curIndex].classList.remove("bg-wrong");
                        }
                        spans[curIndex].classList.add("bg");
                        curIndex +=1 ;
                } else {
                    if (width < 2) {
                        width = 0;
                        move(width);
                    }
                    else {
                        width -= 1;
                        move(width);
                    }
                    errors +=1;
                    errorDiv.innerHTML = errors;
                    spans[curIndex].classList.add("bg-wrong");
                }
            if (curIndex === spans.length ) { // if so, animate the words with animate.css class
                wordsCompletedVar += 1;
                wordsDiv.innerHTML = wordsCompletedVar;
                document.removeEventListener("keypress", typing, false);
                setTimeout(function(){
                    words.className = "words"; // restart the classes
                    width+= progressIncrement;
                    move(width);
                    if(width >= 100){
                        level += 1;
                        width = 0;
                    }
                    random(); // give another word
                    document.addEventListener("keypress", typing, false);
                }, 400);
            }
            } 

    }

    random();
    var pbar = document.getElementById("progressBar");
    pbar.innerHTML = 0 + '%';

    document.addEventListener("keypress", typing, false);

    function move(width) {
        var elem = document.getElementById("progressBar"); 
        frame();
        function frame() {
          if (width >= 100) {
            elem.style.width = 0;
            elem.innerHTML = 0 + '%';
          } else {
            elem.style.width = width + '%';
            elem.innerHTML = width + '%'; 
          }
        }
      }

