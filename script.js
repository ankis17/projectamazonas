const keyboardInput = document.querySelector('#keyboard-input');
const questionStrings = [
   'TJ Lambert',
   'happens to be a',
   'really smart guy'
]
let questionIdx = 0;
keyboardInput.textContent = questionStrings[questionIdx];

function handleKeyPress(event) {
    let text = keyboardInput.textContent;
    if (event.key === text[0]) {
        keyboardInput.style.color = 'black';
        if (text.length === 1) {
            questionIdx++;
            if (questionIdx >= questionStrings.length) {
                keyboardInput.textContent = '';
            } else {
                keyboardInput.textContent = questionStrings[questionIdx];
            }
        } else {
            keyboardInput.textContent = text.slice(1)
        }
    } else {
        keyboardInput.style.color = 'red';
    }
}

document.addEventListener('keydown', handleKeyPress);