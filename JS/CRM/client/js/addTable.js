import { Email, Fb, Other, Tel, VK } from "./svg.js";
import { deleteClient } from "./deleteClient.js";
import { deleteClientServer } from "./server.js";
import { editClientModal } from "./editClient.js";
import { tooltipContact } from "./tooltip.js";


function formatDate(data) {
    const newDate = new Date(data);
    const correctDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    const resultDate = newDate.toLocaleString('ru', correctDate);

    return resultDate;
}

function formatTime(data) {
    const newDate = new Date(data);
    const correctTime = {
        hour: 'numeric',
        minute: 'numeric'
    };

    const resultTime = newDate.toLocaleString('ru', correctTime);

    return resultTime;
}

function onInputValue(input) {
    input.ad
}

function createType(type, value, element, svg, item) {
    const createTooltip = tooltipContact(type, value)
    element = document.createElement('a');
    element.classList.add('tablet__type');
    element.innerHTML = svg;

    if (type === "email") {
        element.href = `mailo:${value.trim()}`;
    } else if (type === 'Телефон') {
        element.href = `tel:${value.trim()}`;
        createTooltip.tooltipValue.style.color = 'white';
        createTooltip.tooltipType.textContent = ``;
    } else {
        element.href = value.trim();
    }


    element.append(createTooltip.tooltipDiv);
    item.append(element);
}

function createItem(type, value, item) {
    switch (type) {
        case 'Телефон':
            let phone;
            createType(type, value, phone, Tel, item);
            break;
        case 'Facebook':
            let fb;
            createType(type, value, fb, Fb, item);
            break;
        case 'VK':
            let vk;
            createType(type, value, vk, VK, item);
            break;
        case 'Email':
            let email;
            createType(type, value, email, Email, item);
            break;
        case 'Другое':
            let other;
            createType(type, value, other, Other, item);
            break;
        default:
            break;
    }

}



export function addTable(client) {
    const tr = document.createElement('tr');
    const id = document.createElement('td');
    const tdName = document.createElement('td');
    const Name = document.createElement('span');
    const Surname = document.createElement('span');
    const Lastname = document.createElement('span');
    const tdDateСreation = document.createElement('td');
    const dateСreation = document.createElement('span');
    const timeСreation = document.createElement('span');
    const tdDateChangen = document.createElement('td');
    const dateChangen = document.createElement('span');
    const timeChangen = document.createElement('span');
    const contacts = document.createElement('td');
    const actions = document.createElement('td');
    const actinsAdit = document.createElement('button');
    const actinsDelete = document.createElement('button');
    const deleteClients = deleteClient();
    const modalEdit = editClientModal(client);



    // id.setAttribute('data-type', 'id'); задает атрибут через js

    tr.classList.add('table__tr');
    id.classList.add('table__id');
    tdName.classList.add('table__tdName');
    Name.classList.add('table__Name', 'table__NSL');
    Surname.classList.add('table__Surname', 'table__NSL');
    Lastname.classList.add('table__Lastname', 'table__NSL');
    tdDateСreation.classList.add('table__td-date-creation');
    dateСreation.classList.add('table__date-creation');
    timeСreation.classList.add('table__time');
    tdDateChangen.classList.add('table__td-date-changen');
    dateChangen.classList.add('table__date-changen');
    timeChangen.classList.add('table__time');
    contacts.classList.add('table__contacts');
    actions.classList.add('table__actions');
    actinsAdit.classList.add('table__actins-adit', 'table__btn');
    actinsDelete.classList.add('table__actins-delete', 'table__btn');


    for (const contact of client.contacts) {
        createItem(contact.type, contact.value, contacts)
    }

    function deleteById() {
        deleteClients.deleteButton.addEventListener('click', () => {
            deleteClientServer(client.id);
        });
    };

    actinsDelete.addEventListener('click', () => {
        document.body.append(deleteClients.deleteModalDark);
        deleteById()
    });

    actinsAdit.addEventListener('click', () => {
        document.body.append(modalEdit);
    });

    id.textContent = client.id.substr(0, 6);
    Name.textContent = client.name;
    Surname.textContent = client.surname;
    Lastname.textContent = client.lastName;
    dateСreation.textContent = formatDate(client.createdAt);
    timeСreation.textContent = formatTime(client.createdAt);
    dateChangen.textContent = formatDate(client.updatedAt);
    timeChangen.textContent = formatTime(client.updatedAt);
    actinsAdit.textContent = 'Изменить';
    actinsDelete.textContent = 'Удалить';

    tdName.append(Name, Surname, Lastname);
    tdDateСreation.append(dateСreation, timeСreation);
    tdDateChangen.append(dateChangen, timeChangen);
    actions.append(actinsAdit, actinsDelete)
    tr.append(id, tdName, tdDateСreation, tdDateChangen, contacts, actions);




    return tr
}
