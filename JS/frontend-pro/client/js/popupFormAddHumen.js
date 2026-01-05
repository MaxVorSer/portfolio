export const popupForm = () => {
    const h2 = document.createElement('h2');
    const btnClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastname = document.createElement('input');
    const labelLastname = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurnname = document.createElement('span');
    const buttonAddContact = document.createElement('button');
    const buttonSave = document.createElement('button');
    const buttonCancel = document.createElement('button');
    const blockAdd = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingSurnname = document.createElement('div');
    const formFloatingLastname = document.createElement('div');
    const divBtn = document.createElement('div');
    const error = document.createElement('p');
    const errorName = document.createElement('span');
    const errorLastname = document.createElement('span');
    const errorSurbame = document.createElement('span');
    const errorValue = document.createElement('span');
    const errorContacts = document.createElement('span');

    h2.classList.add('popup__h2');
    btnClose.classList.add('popup__close');
    form.classList.add('popup__form');
    inputName.classList.add('popup__input', 'popup__input-name');
    inputSurname.classList.add('popup__input', 'popup__input-surname');
    inputLastname.classList.add('popup__input', 'popup__input-lastname');
    labelName.classList.add('popup__input-label');
    labelSurname.classList.add('popup__input-label');
    labelLastname.classList.add('popup__input-label');
    requiredName.classList.add('popup__required');
    requiredSurnname.classList.add('popup__required');
    buttonAddContact.classList.add('popup__btn-add-contact', 'popup__btn-add-contact-activeBtn');
    buttonSave.classList.add('btn-violet');
    buttonCancel.classList.add('btn-cancel');
    formFloatingName.classList.add('popup__floating');
    formFloatingSurnname.classList.add('popup__floating');
    formFloatingLastname.classList.add('popup__floating');
    blockAdd.classList.add('popup__block');
    if (error) {
        blockAdd.classList.add('popup__block-error');
    };
    divBtn.classList.add('popup__divBtn');
    error.classList.add('popup__error');
    errorName.id = 'errorName';
    errorLastname.id = 'errorLastname';
    errorSurbame.id = 'errorSurname';
    errorValue.id = 'errorValue';
    errorContacts.id = 'errorContacts';

    labelName.for = 'floatingName';
    labelSurname.for = 'floatingSurnname';
    labelLastname.for = 'floatingLastname';
    labelName.id = 'floatingName';
    labelSurname.id = 'floatingSurnname';
    labelLastname.id = 'floatingLastname';
    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastname.type = 'text';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastname.placeholder = 'Отчество';
    buttonSave.type = 'button';

    h2.textContent = 'Новый клиент';
    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelLastname.textContent = 'Отчество';
    buttonAddContact.textContent = 'Добавить контакт';
    buttonSave.textContent = 'Сохранить';
    buttonCancel.textContent = 'Отмена';
    requiredName.textContent = '*';
    requiredSurnname.textContent = '*';


    labelName.append(requiredName);
    labelSurname.append(requiredSurnname);
    formFloatingName.append(inputName, labelName);
    formFloatingSurnname.append(inputSurname, labelSurname);
    formFloatingLastname.append(inputLastname, labelLastname);
    form.append(formFloatingName, formFloatingSurnname, formFloatingLastname, buttonAddContact, blockAdd, error, divBtn);
    divBtn.append(buttonSave, buttonCancel);
    blockAdd.append(buttonAddContact);
    error.append(errorName, errorLastname, errorSurbame, errorValue, errorContacts)

    buttonAddContact.addEventListener('click', (e) => {
        e.preventDefault();
        const contactItems = document.getElementsByClassName('contact');

        if (contactItems.length < 9) {
            const contactItem = addContactItem();
            blockAdd.prepend(contactItem.contact);
            if (contactItems.length === 5) {
                document.querySelector('.modal__content').style.top = '5%'
            } else {
                document.querySelector('.modal__content').style.top = 'none'
            };
        } else {
            const contactItem = addContactItem();
            blockAdd.prepend(contactItem.contact);
            buttonAddContact.classList.remove('popup__btn-add-contact-activeBtn');
        };
    });

    return {
        form,
        btnClose,
        h2,
        buttonCancel,
        buttonSave,
        inputName,
        inputSurname,
        inputLastname,
        labelName,
        labelSurname,
        labelLastname,
        blockAdd,
        buttonAddContact
    };
};


export const addContactItem = () => {
    const contact = document.createElement('div');
    const contactType = document.createElement('div');
    const contactName = document.createElement('button');
    const contactList = document.createElement('ul');
    const contactPhone = document.createElement('li');
    const contactVk = document.createElement('li');
    const contactFb = document.createElement('li');
    const contactEmail = document.createElement('li');
    const contactOther = document.createElement('li');
    const contactInpupt = document.createElement('input');
    const contactDelete = document.createElement('button');
    const contactDeleteTooltip = document.createElement('span');

    contact.classList.add('contact');
    contactDeleteTooltip.classList.add('contact-tooltip', 'tooltip');
    contactType.classList.add('contact__type');
    contactName.classList.add('contact__name');
    contactList.classList.add('contact__list', 'list-reset');
    contactPhone.classList.add('contact__item');
    contactVk.classList.add('contact__item');
    contactFb.classList.add('contact__item');
    contactEmail.classList.add('contact__item');
    contactOther.classList.add('contact__item');
    contactInpupt.classList.add('contact__input');
    contactDelete.classList.add('contact__delete');

    contactName.textContent = 'Телефон';
    contactName.type = 'button';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactPhone.textContent = 'Телефон';
    contactVk.textContent = 'VK';
    contactEmail.textContent = 'Email';
    contactFb.textContent = 'Facebook';
    contactOther.textContent = 'Другое';
    contactInpupt.placeholder = 'Введите данные контакта';
    contactInpupt.type = 'text';


    const onInputValue = input => {
        input.ad
    };


    contactDelete.addEventListener('click', (e) => {

        e.preventDefault();
        contact.remove();
        document.querySelector('.popup__btn-add-contact').classList.add('popup__btn-add-contact-activeBtn')

    });

    contactName.addEventListener('click', (e) => {
        e.preventDefault();
        contactList.classList.toggle('contact__list-actve');
        contactName.classList.toggle('contact__list-actve');
    });

    contactType.addEventListener('mouseleave', (e) => {
        contactList.classList.remove('contact__list-actve');
        contactName.classList.remove('contact__list-actve');
    });


    function setType(typeItem) {
        typeItem.addEventListener('click', (e) => {
            e.preventDefault;
            contactName.textContent = typeItem.textContent;
            contactList.classList.remove('contact__list-actve');
            contactName.classList.remove('contact__list-actve');
        });
    };

    const typeArr = [contactEmail, contactFb, contactVk, contactOther, contactPhone];

    for (const type of typeArr) {
        setType(type);
    }

    contactDelete.append(contactDeleteTooltip);
    contact.append(contactType, contactInpupt, contactDelete);
    contactType.append(contactName, contactList);
    contactList.append(contactPhone, contactEmail, contactVk, contactFb, contactOther);

    return {
        contact,
        contactName,
        contactInpupt,
        contactDelete
    };
};
