export const validateForm = () => {
    const userName = document.getElementsByClassName('popup__input-name');
    const userSurname = document.getElementsByClassName('popup__input-surname');
    const userLastname = document.getElementsByClassName('popup__input-lastname');
    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorLastname = document.getElementById('errorLastname');
    const errorValue = document.getElementById('errorValue');
    const errorContacts = document.getElementById('errorContacts');
    const arry = [errorName, errorSurname, errorLastname, errorValue, errorContacts];

    const onInputValue = input => {
        input[0].addEventListener('input', () => {
            for (const item of arry) {
                input[0].style.borderColor = '#C8C5D1';
                item.textContent = '';
            }
        });

        input.oncut = input.oncopy = input.onpaste = () => {
            for (const item of arry) {
                input[0].style.borderColor = '#C8C5D1';
                item.textContent = '';
            }
        };

        input.onchange = () => {
            if (userSurname.value && userName.value && userLastname.value) {
                for (const item of arry) {
                    input[0].style.borderColor = '#C8C5D1';
                    item.textContent = '';
                }
            }
        };
    }



    onInputValue(userName);
    onInputValue(userSurname);
    onInputValue(userLastname);

    function checkRequiredName(input, message, name) {
        if (!input[0].value) {
            input[0].style.borderColor = 'Red';
            message.textContent = `Ошибка: введите ${name} клиента`;
            return false;
        } else {
            message.textContent = '';
        };
        return true;
    };



    if (!checkRequiredName(userSurname, errorSurname, 'фамилию')) {
        return false
    };
    if (!checkRequiredName(userName, errorName, 'имя')) {
        return false
    };
    if (!checkRequiredName(userLastname, errorLastname, 'отчество')) {
        return false
    };

    return true;
};


export function validateContact(type, inputContacts) {
    const writeValue = document.getElementById('errorName');
    const onlyNumbers = /[^0-9]+$/g;
    const onlyEmail = /[^a-zA-Z|@|.]+$/g;


    const onInputValue = input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '#C8C5D1';
            writeValue.textContent = '';
        });

        input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = '#C8C5D1';
            writeValue.textContent = '';
        };


    };

    const showMessege = (message, block, input) => {
        block.textContent = message;
        input.style.borderColor = '#C8C5D1';
    };

    if (!inputContacts.value) {
        showMessege('Заполните все поля контактов', writeValue, inputContacts);
        return false;
    }

    onInputValue(inputContacts);

    switch (type.innerHTML) {
        case 'Телефон':
            if (onlyNumbers.test(inputContacts.value)) {
                showMessege('Допустимы только цифры', writeValue, inputContacts);
                return false;
            } else if (inputContacts.value.length !== 11) {
                showMessege('Номер состоит из 11 цифр', writeValue, inputContacts);
                return false;
            }
            return true;
        case 'Email':
            if (onlyEmail.test(inputContacts.value)) {
                showMessege('Неправильный  Email', writeValue, inputContacts);
                return false;
            }
            return true;
        default:
            return true;
    };
};
