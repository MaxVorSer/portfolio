const btn = document.createElement('button');
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const container = document.querySelector('.container');

btn.textContent = 'Элемент 1';
btn.type = 'button';
listItem1.textContent = 'элемент 1';
listItem2.textContent = 'элемент 2';
listItem3.textContent = 'элемент 3';


btn.classList.add('btn');
list.classList.add('ul');
listItem1.classList.add('li');
listItem2.classList.add('li');
listItem3.classList.add('li');

container.append(btn, list);
list.append(listItem1, listItem2, listItem3);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    list.classList.toggle('contact__list-actve');
});

container.addEventListener('mouseleave', () => {
    list.classList.remove('contact__list-actve');
});

// listItem1.addEventListener('click', () => {
//     btn.textContent = listItem1.textContent;
//     list.classList.remove('contact__list-actve');
// });

// listItem2.addEventListener('click', () => {
//     btn.textContent = listItem2.textContent;
//     list.classList.remove('contact__list-actve');
// });

// listItem3.addEventListener('click', () => {
//     btn.textContent = listItem3.textContent;
//     list.classList.remove('contact__list-actve');
// });

const setBtn = (li) => {
    li.addEventListener('click', () => {
        btn.textContent = li.textContent;
        list.classList.remove('contact__list-actve');
    });
};

const setArray = [listItem1, listItem2, listItem3];

for (const li of setArray) {
    setBtn(li);
}
