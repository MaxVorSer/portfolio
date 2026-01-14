function createAppTitle(title) {
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    appTitle.classList.add('app_title');
    return appTitle;
}

function createCardList() {
    const list = document.createElement('ul');
    list.classList.add('cards_list');
    return list;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}

function getArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i, i);

    }

    return shuffle(arr);


}



function getCards(n) {
    const buttons = [];
    const list = createCardList();
    const container = document.querySelector('.main');
    const containerWidth = container.offsetWidth;
    const cardWidth = containerWidth * 0.5 / (Math.sqrt(n));


    for (let i = 0; i < n * 2; i++) {
        const card = document.createElement('li');
        const button = document.createElement('button');

        card.classList.add('card');
        card.style.cssText = `width: ${cardWidth}px; height: ${cardWidth}px;`;
        button.classList.add('btn');
        button.style.cssText = `font-size: ${cardWidth * 0.7}px;`;
        card.append(button);
        list.append(card);
        buttons.push(button);

    }
    container.append(list);
    return buttons

}

function playAgain(cards) {
    const container = document.querySelector('.container');
    const button = document.createElement('button');
    button.innerText = 'Сыграть ещё раз';
    button.classList.add('btn-1');
    container.after(button);
    //*button1 = cards;
    const button1 = document.querySelector('.cards_list');


    console.log(cards);
    button.addEventListener('click', () => {
        console.log('Играем ещё раз!');
        button1.remove();
        init('');
        button.remove();
    });

};

function addEvents(n, numbers, cards) {
    let check = [];
    const cardsOpen = [];
    let counter = 0;

    console.log(cards)

    cards.forEach((item, i) => {
        item.onclick = () => {

            if (item.textContent) return;
            item.textContent = numbers[i];
            check.push(numbers[i]);
            cardsOpen.push(item);
            console.log(check);
            if (check.length !== 2) {
                return;
            }
            if (check[0] === check[1]) {
                cardsOpen.forEach(item => item.onclick = null);
                counter += 1;

            } else {
                cardsOpen.forEach(item => setTimeout(() => {
                    item.textContent = ''
                }, 1000));
            }
            cardsOpen.length = 0;
            check.length = 0;
            console.log(counter);

            if (n === counter) {
                playAgain(cards);
            };
        };

    });

};


function init(title) {
    let appTitle = createAppTitle(title);
    document.body.prepend(appTitle);

    const n = 4;
    const numbers = getArray(n);
    const cards = getCards(n);

    addEvents(n, numbers, cards);
    console.log(cards);
};



init('игра');
