const form = document.createElement('form');
const Name = document.createElement('input');
const Surname = document.createElement('input');
const Patronymic = document.createElement('input');
const container = document.querySelector('.container');
const button = document.createElement('button');
const div2 = document.createElement('div');

form.classList.add('Form');
button.classList.add('btn2');

form.action = '';
form.method = 'POST';
form.style.borderTop = '2px solid black';
form.style.paddingTop = '10px';
button.textContent = 'Отправить';
Name.placeholder = 'Введите имя';
Surname.placeholder = 'Введите Фамилию';
Patronymic.placeholder = 'Введите Отчество';


container.append(div2);
div2.append(form);
form.append(Name, Surname, Patronymic, button);


const namber = /[^а-яА-Я-\s]+$/g;

Name.addEventListener('input', () => {
    Name.value = Name.value.replace(namber, '');
});

Surname.addEventListener('input', () => {
    Surname.value = Surname.value.replace(namber, '');
});

Patronymic.addEventListener('input', () => {
    Patronymic.value = Patronymic.value.replace(namber, '');
});

const inputSet = (input) => {
    input.addEventListener('blur', () => {
        const endInput = input.value.replace(/^-$/g, "").trim().replace(/\s{2,}/g, " ").replace(/-{2,}/g, "-").replace(/^./, input.value[0].toUpperCase());
        input.value = endInput;
    })
};

const arrayInput = [Name, Surname, Patronymic];

for (const input of arrayInput) {
    inputSet(input);
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div2.append(p);
    p.textContent = `${Name.value} ${Surname.value} ${Patronymic.value}`;
    Name.value = '';
    Surname.value = '';
    Patronymic.value = '';
});
