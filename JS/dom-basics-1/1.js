let input = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');
let start;
let current;

function startTimer() {
    clearInterval(start);
    current = input.value;
    start = setInterval(timer, 1000);

    function timer() {
        div.textContent = current;
        current--;
        if (current <= -1) {
            clearInterval(start);
        }
    }
}

button.addEventListener('click', startTimer);
