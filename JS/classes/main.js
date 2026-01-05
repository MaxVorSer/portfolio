class Card {
    constructor(container, cardNumber) {
        this.container = container;
        this.cardNumber = cardNumber;
        this.open = false;
        this.success = false;
    }

    createElement() {
        const list = this.container;
        const containerWidth = list.offsetWidth;
        const cardWidth = containerWidth * 0.5 / (Math.sqrt(this.containerWidth));
        const card = document.createElement('li');
        const button = document.createElement('button');

        card.classList.add('card');
        card.style.cssText = `width: ${cardWidth}px; height: ${cardWidth}px;`;
        button.classList.add('btn');
        button.style.cssText = `font-size: ${cardWidth * 0.7}px;`;
        button.textContent = '';

        button.addEventListener('click', () => {
                // console.log('sdfa' + this._cardNumber)
                // button.textContent = this._cardNumber
                button.append(this._cardNumber);
            })
            // button.addEventListener('click', () => {

        //     button.append(this._cardNumber);
        // })
        card.append(button);
        list.append(card);

        return { list, button };
    }

    set cardNumber(value) {
        this._cardNumber = value;
    }

    get cardNumber() {
        return this._cardNumber;
    }

    set open(value) {
        this._open = value;

    }

    get open() {
        return this._open;
    }

    set success(value) {
        this._success = value;
    }

    get success() {
        return this._success;
    }
}

class AmazingCard extends Card {
    createElement() {
        const list = this.container;
        const containerWidth = list.offsetWidth;
        const cardWidth = containerWidth * 0.5 / (Math.sqrt(this.containerWidth));
        const card = document.createElement('li');
        const button = document.createElement('button');

        card.classList.add('card');
        card.style.cssText = `width: ${cardWidth}px; height: ${cardWidth}px;`;
        button.classList.add('btn');
        button.style.cssText = `font-size: ${cardWidth * 0.7}px;`;
        button.textContent = '';

        button.addEventListener('click', () => {
                // console.log('sdfa' + this._cardNumber)
                // button.textContent = this._cardNumber
                button.append(this._cardNumber);
            })
            // button.addEventListener('click', () => {

        //     button.append(this._cardNumber);
        // })
        card.append(button);
        list.append(card);

        return { list, button };
    }

    // createElement() {
    //     super.createElement();
    //     console.log(super.createElement())
    //         // super.button.addEventListener('click', () => {
    //         //     console.log('sdfa' + this._cardNumber)
    //         //         // button.textContent = this._cardNumber
    //         //     button.append(this._cardNumber);
    //         // })
    // }

    set cardNumber(value) {
        const cardsImgArray = [
            '../img/nonexistent.jpg',
            '../img/1.jpg',
            '../img/2.jpg',
            '../img/3.jpg',
            '../img/4.jpg'
        ];
        const img = document.createElement('img');
        img.src = cardsImgArray[value];
        this._cardNumber = img;
    }

    get cardNumber() {
        return this._cardNumber;
    }

}

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

// function getCards(n) {
//     const buttons = [];
//     const list = createCardList();
//     const container = document.querySelector('.main');
//     const containerWidth = container.offsetWidth;
//     const cardWidth = containerWidth * 0.5 / (Math.sqrt(n));

//     for (let i = 0; i < n * 2; i++) {
//         const card = document.createElement('li');
//         const button = document.createElement('button');

//         card.classList.add('card');
//         card.style.cssText = `width: ${cardWidth}px; height: ${cardWidth}px;`;
//         button.classList.add('btn');
//         button.style.cssText = `font-size: ${cardWidth * 0.7}px;`;
//         card.append(button);
//         list.append(card);
//         buttons.push(button);
//     }

//     container.append(list);
//     return buttons
// }

function playAgain(cards) {
    const container = document.querySelector('.container');
    const button = document.createElement('button');
    button.innerText = 'Сыграть ещё раз';
    button.classList.add('btn-1');
    container.after(button);
    //*button1 = cards;
    const button1 = document.querySelector('.cards_list');

    button.addEventListener('click', () => {
        button1.remove();
        init('');
        button.remove();
    });
};

function addEvents(n, numbers, cards) {
    let check = [];
    const cardsOpen = [];
    let counter = 0;

    cards.forEach((item, i) => {
        item.onclick = () => {
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
    const container = document.querySelector('.main');
    const n = 4;
    const numbers = getArray(n);
    const appTitle = createAppTitle(title);
    const list = createCardList();
    let buttons = [];

    document.body.prepend(appTitle);

    for (let i = 0; i < numbers.length; i++) {
        let card = new AmazingCard(list, numbers[i]);
        console.log(card._cardNumber)
        const button = card.createElement().button;
        buttons.push(button);
    }
    container.prepend(list);
    addEvents(n, numbers, buttons)
}

init('игра');
