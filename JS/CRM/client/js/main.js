import { addTable } from "./addTable.js";
import { addContactItem, popupForm } from "./popupFormAddHumen.js"
import { preloader } from "./preloader.js";
import { searchClient } from "./searchClient.js";
import { getPeapl, PostPeapl } from "./server.js";
import { sort } from "./sort.js";
import { validateForm, validateContact } from "./validate.js";


const form = popupForm();

export const modal = () => {

    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

    modal.classList.add('modal', 'modal-active');
    modalContent.classList.add('modal__content', 'modal-active');
    form.form.classList.add('popup__add-humen');

    modal.append(modalContent);
    modalContent.append(form.btnClose, form.h2, form.form);


    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target === modal || target.closest('.popup__close')) {
            modal.remove();
        }
    })
    return modal;
}


function addCotact() {

    form.buttonSave.addEventListener('click', async(e) => {
        e.preventDefault;

        if (!validateForm()) {
            return
        };

        const modal = document.querySelector('.modal');
        const typeContact = document.querySelectorAll('.contact__name');
        const valueContact = document.querySelectorAll('.contact__input');

        let contacts = [];
        const contactObj = {};

        for (let i = 0; i < typeContact.length; i++) {
            if (!validateContact(typeContact[i], valueContact[i])) {
                return
            };

            contacts.push({
                type: typeContact[i].innerHTML,
                value: valueContact[i].value
            });
        };

        contactObj.name = form.inputName.value;
        contactObj.surname = form.inputSurname.value;
        contactObj.lastName = form.inputLastname.value;
        contactObj.contacts = contacts;


        await PostPeapl(contactObj);

    });
};


async function init() {

    const btnModal = document.querySelector('.client__btn');
    const tbody = document.createElement('tbody')
    const table = document.querySelector('.client__table')
    const createPreloader = preloader();
    debugger;

    tbody.classList.add('client__table-tbody')

    addCotact();
    const serverClients = await getPeapl();
    searchClient(serverClients);

    tbody.append(createPreloader);
    table.append(tbody);


    window.onload = () => {
        const preloader = createPreloader;
        preloader.remove()



        for (const client of serverClients) {
            tbody.append(addTable(client));
        }
        table.append(tbody);
        sort();

    }

    btnModal.addEventListener('click', () => {
        document.body.append(modal());
    });
};

init();