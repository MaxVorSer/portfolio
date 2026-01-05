import { el, setChildren } from 'redom';

const form = el('form', 'проверка');
const inputNamber = el('input', '');
const inputDate = el('input', '');
const inputCVC = el('input', '');
const inputEmail = el('input', '');
const btn = el('button', 'отправить');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '20%';
inputNamber.style.marginBottom = '5px';
inputDate.style.marginBottom = '5px';
inputCVC.style.marginBottom = '5px';
inputEmail.style.marginBottom = '5px';
inputNamber.placeholder = 'Номер карты';
inputDate.placeholder = 'Дата';
inputCVC.placeholder = 'CVC';
inputEmail.placeholder = 'Email';


setChildren(form, [inputNamber, inputDate, inputCVC, inputEmail, btn]);

setChildren(window.document.body, form);
