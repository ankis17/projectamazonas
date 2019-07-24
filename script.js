    var button = document.querySelector("button");
    var words = document.querySelector(".words");
    var errorDiv = document.querySelector(".error");
    var errors = 0;
    var spans;
    var typed;
    var curIndex = 0;
    const list = ['ACCOUNT','ACCURATE','ACRES','ACROSS','ACT','ACTION','ACTIVE','ACTIVITY'];

    function random() {
        words.innerHTML = "";
        curIndex = 0;
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





    function typing(e) {
            typed = String.fromCharCode(e.which);
            console.log(typed);
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
                document.removeEventListener("keydown", typing, false);
                setTimeout(function(){
                    words.className = "words"; // restart the classes
                    random(); // give another word
                    document.addEventListener("keydown", typing, false);
                }, 400);
            }

    }

    random();
    document.addEventListener("keypress", typing, false);