let students = [];


const array = {

    name: 'Сидоров',

    surname: 'Иван',

    patronymic: 'Михайлович',

    dateBirth: '12-23-1990',

    yearBeginStudy: '2019',

    faculty: 'Физики'

};
const array1 = {

    name: 'Сидорова',

    surname: 'Ивана',

    patronymic: 'Михайловна',

    dateBirth: '12-11-1994',

    yearBeginStudy: '2006',

    faculty: 'Астрономии'

}
const array2 = {

    name: 'Сорокина',

    surname: 'Мария',

    patronymic: 'Алексеевна',

    dateBirth: '01-01-1992',

    yearBeginStudy: '2008',

    faculty: 'Математики'

}
const array3 = {

    name: 'Андропов',

    surname: 'Александр',

    patronymic: 'Петрович',

    dateBirth: '03-10-1992',

    yearBeginStudy: '2003',

    faculty: 'Информатики'

}
const array4 = {

    name: 'Никифоров',

    surname: 'Олег',

    patronymic: 'Олегович',

    dateBirth: '12-24-1995',

    yearBeginStudy: '2004',

    faculty: 'Химии'

}


students.push(array, array1, array2, array3, array4);



function addStudent() {


    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputPatronymic = document.createElement('input');
    const inputDateBirth = document.createElement('input');
    const inputYearBeginStudy = document.createElement('input');
    const inputFaculty = document.createElement('input');
    const doneButton = document.createElement('button');
    const main = document.querySelector('.input');


    inputName.required = true;
    inputSurname.required = true;
    inputPatronymic.required = true;
    inputDateBirth.required = true;
    inputYearBeginStudy.required = true;
    inputFaculty.required = true;
    inputYearBeginStudy.required = true;
    inputDateBirth.required = true;

    inputName.name = 'name';
    inputSurname.name = 'surname';
    inputPatronymic.name = 'patronymic';
    inputDateBirth.name = 'dateBirth';
    inputYearBeginStudy.name = 'yearBeginStudy';
    inputFaculty.name = 'faculty';
    inputYearBeginStudy.name = 'yearBeginStudy';
    inputDateBirth.name = 'dateBirth';

    inputDateBirth.type = 'Date';
    inputDateBirth.min = '1990-01-01';

    inputName.placeholder = 'Введите имя';
    inputSurname.placeholder = 'Введите фамилию';
    inputPatronymic.placeholder = 'Введите отчество';
    inputDateBirth.placeholder = 'Выберите дату рождения';
    inputYearBeginStudy.placeholder = 'Выбирете год начала обучения';
    inputFaculty.placeholder = 'Введите факультет';


    doneButton.textContent = 'добавить студента';
    doneButton.classList.add('.btn');
    form.classList.add('form');

    main.append(form);
    form.append(inputName, inputSurname, inputPatronymic, inputDateBirth, inputYearBeginStudy, inputFaculty, doneButton);

    return form;
}


function searchForm() {

    const formSearch = document.createElement('form');
    const inputNameSurnamePatronymic = document.createElement('input');
    const inputFaculty = document.createElement('input');
    const inputYearBeginStudy = document.createElement('input');
    const inputYearEndStudy = document.createElement('input');
    const main = document.querySelector('.input');
    const h = document.createElement('h1');

    inputNameSurnamePatronymic.name = 'SNPSearch';
    inputFaculty.name = 'facultySearch';
    inputYearBeginStudy.name = 'yearBeginStudySearch';
    inputYearEndStudy.name = 'yearEndStudySearch';


    inputNameSurnamePatronymic.placeholder = 'Поиск по ФИО';
    inputFaculty.placeholder = 'Поиск по факультету';
    inputYearBeginStudy.placeholder = 'Поиск по началу года обучения';
    inputYearEndStudy.placeholder = 'Поиск по году окончания обучения';

    h.textContent = `Фильтр`;
    h.style.textAlign = 'center';

    formSearch.classList.add('form-search');

    main.append(formSearch);
    formSearch.append(h, inputNameSurnamePatronymic, inputFaculty, inputYearBeginStudy, inputYearEndStudy);

    return formSearch;
}


function addTable() {

    const section = document.querySelector('.table');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const thead = document.createElement('thead');
    const thN = document.createElement('th');
    const thNSP = document.createElement('th');
    const thFaculty = document.createElement('th');
    const thDateBirth = document.createElement('th');
    const thYearBeginStady = document.createElement('th');
    const tbody = document.createElement('tbody');


    table.style.border = '1px solid black1';
    table.style.padding = '5px 10px';
    table.style.width = '1000px';

    caption.textContent = 'Студенты';

    thNSP.textContent = 'ФИО';
    thNSP.style.width = '300';
    thFaculty.textContent = 'Факультет';
    thDateBirth.textContent = 'ДР и возраст';
    thYearBeginStady.textContent = 'Годы обучения';
    thN.textContent = '№';


    thead.append(thN, thNSP, thFaculty, thDateBirth, thYearBeginStady, caption);
    table.append(caption, thead, tbody)
    section.append(table);

    return tbody

}


const getDateBirthday = (birthday) => {
    const old = Math.floor((new Date().getTime() - new Date(birthday).getTime()) / 1000 / 60 / 60 / 24 / 365);
    return `${birthday} (${old})`;
}

const getYearStudy = (year) => {
    const t = (new Date().getFullYear() - year) + 1;
    const course = t < 5 ? `${t}курс` : `закончил`;
    return `${year} - ${+year + 4} (${course})`
}


function addTr({
    name,
    surname,
    patronymic,
    dateBirth,
    yearBeginStudy,
    faculty
}, n) {

    let tr = document.createElement('tr');
    let tdN = document.createElement('td');
    let tdNSP = document.createElement('td');
    let tdFaculty = document.createElement('td');
    let tdDateBirth = document.createElement('td');
    let tdBeginStudy = document.createElement('td');


    tdN.textContent = n;
    tdNSP.textContent = `${surname} ${name} ${patronymic}`;
    tdFaculty.textContent = faculty;
    tdDateBirth.textContent = getDateBirthday(dateBirth);
    tdBeginStudy.textContent = getYearStudy(yearBeginStudy);


    tdN.style.textAlign = 'center';
    tdNSP.style.textAlign = 'center';
    tdFaculty.style.textAlign = 'center';
    tdDateBirth.style.textAlign = 'center';
    tdBeginStudy.style.textAlign = 'center';


    tr.append(tdN, tdNSP, tdFaculty, tdDateBirth, tdBeginStudy)

    return tr;
};

const form = addStudent();
const tbody = addTable();
const formSearch = searchForm();
students.forEach((student, index) => tbody.append(addTr(student, index + 1)));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let student = {
        name: form.name.value,
        surname: form.surname.value,
        patronymic: form.patronymic.value,
        dateBirth: form.dateBirth.value,
        yearBeginStudy: form.yearBeginStudy.value,
        faculty: form.faculty.value,
    }

    students.push(student);
    console.log(students);
    tbody.append(addTr(student, students.length));

    form.reset();

});

formSearch.addEventListener('input', (event) => {

    const target = event.target;
    let studentFiltr = students;
    console.log(formSearch.SNPSearch);
    console.log(target.value);
    console.log(target);
    const tr = document.querySelectorAll('tr');

    if (target.value !== ``) {
        tr.forEach(tr => tr.remove());
    } else {
        students.forEach((student, index) => tbody.append(addTr(student, index + 1)));
    }

    if (target === formSearch.SNPSearch) {
        const lowerCase = target.value.toLowerCase()

        // debugger;
        const filter = studentFiltr.filter(student => student.name.toLowerCase().includes(lowerCase) || student.surname.toLowerCase().includes(lowerCase) || student.patronymic.toLowerCase().includes(lowerCase));
        const tr = filter.forEach((student, index) => tbody.append(addTr(student, index + 1)));

        if (target.value === ``) {
            const tr = document.querySelectorAll('tr');
            tr.forEach(tr => tr.remove());
            students.forEach((student, index) => tbody.append(addTr(student, index + 1)));
        }
    }
    if (target === formSearch.facultySearch) {
        const lowerCase = target.value.toLowerCase()
        const filter = studentFiltr.filter(student => student.faculty.toLowerCase().includes(lowerCase))
        const tr = filter.forEach((student, index) => tbody.append(addTr(student, index + 1)));

        if (target.value === ``) {
            const tr = document.querySelectorAll('tr');
            tr.forEach(tr => tr.remove());
            students.forEach((student, index) => tbody.append(addTr(student, index + 1)));
        }

    }
    if (target === formSearch.yearBeginStudySearch) {

        const filter = studentFiltr.filter(year => year.yearBeginStudy === target.value)
        const tr = filter.forEach((student, index) => tbody.append(addTr(student, index + 1)));

        if (target.value === ``) {
            const tr = document.querySelectorAll('tr');
            tr.forEach(tr => tr.remove());
            students.forEach((student, index) => tbody.append(addTr(student, index + 1)));
        }
    }
    if (target === formSearch.yearEndStudySearch) {

        const filter = studentFiltr.filter(yearEnd => +yearEnd.yearBeginStudy + 4 === +target.value)
        const tr = filter.forEach((student, index) => tbody.append(addTr(student, index + 1)));

        if (target.value === ``) {
            const tr = document.querySelectorAll('tr');
            tr.forEach(tr => tr.remove());
            students.forEach((student, index) => tbody.append(addTr(student, index + 1)));
        }
    }




});
