import { popupForm } from "./popupFormAddHumen.js";
import { deleteClient } from "./deleteClient.js";
import { deleteClientServer, editClientServer } from "./server.js";
import { addContactItem } from "./popupFormAddHumen.js";
import { validateContact, validateForm } from "./validate.js";


export const editClientModal = (data) => {
    const editModal = document.createElement('div');
    const editModalDark = document.createElement('div');
    const id = document.createElement('span');
    const form = popupForm();
    const deleteModal = deleteClient();


    editModal.classList.add('modal__content', 'modal-active');
    editModalDark.classList.add('modal', 'modal-active');
    id.classList.add('edit__id');

    id.textContent = `ID: ${data.id.substr(0, 6)}`;
    form.h2.textContent = 'Изменить данные';
    form.buttonCancel.textContent = 'Удалить клтента';
    form.inputName.value = data.name;
    form.inputSurname.value = data.surname;
    form.inputLastname.value = data.lastName;

    const onInputValue = input => {
        input.addEventListener

    }


    for (const contact of data.contacts) {
        const contactsItem = addContactItem();

        contactsItem.contactName.textContent = contact.type;
        contactsItem.contactInpupt.value = contact.value;


        form.blockAdd.prepend(contactsItem.contact);
    }

    if (data.contacts.length == 10) {
        form.buttonAddContact.classList.remove('popup__btn-add-contact-activeBtn');
    }


    editModal.append(form.btnClose, form.h2, form.form);
    editModalDark.append(editModal);
    form.h2.append(id);


    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target === editModalDark || target === form.btnClose) {
            editModalDark.remove();
        };
    });

    function deleteById() {
        deleteModal.deleteButton.addEventListener('click', () => {
            deleteClientServer(data.id);
        });
    };

    form.buttonCancel.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.append(deleteModal.deleteModalDark);
        deleteById(data);
        console.log(deleteModal.deleteModalDark);
    });

    form.buttonSave.addEventListener('click', (e) => {

        e.preventDefault();

        if (!validateForm()) {
            return
        };


        const typeContact = document.querySelectorAll('.contact__name');
        const valueContact = document.querySelectorAll('.contact__input');

        let contacts = [];
        const contactObj = {};

        for (let i = 0; i < typeContact.length; i++) {
            if (!validateContact(typeContact[i], valueContact[i])) {
                return
            }
            contacts.push({
                type: typeContact[i].innerHTML,
                value: valueContact[i].value
            })
        };

        contactObj.name = form.inputName.value;
        contactObj.surname = form.inputSurname.value;
        contactObj.lastName = form.inputLastname.value;
        contactObj.contacts = contacts;

        console.log(contactObj);

        editClientServer(contactObj, data.id);


    });


    return editModalDark


}
