let inp = document.querySelector('input');
let h2 = document.querySelector('h2');
let timeout;


inp.addEventListener('input', enteringText);

function enteringText() {

    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(timeout1, 300);
}

function timeout1() {
    h2.textContent = inp.value;
}
