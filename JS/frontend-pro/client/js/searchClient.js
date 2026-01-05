import { addTable } from "./addTable.js";
import { findClint, getPeapl } from "./server.js";



export function searchClient(clients) {
    const div = document.querySelector('.header__div-input');
    const findList = div.querySelector('.find-list');
    const input = div.querySelector('.header__input');



    clients.forEach(client => {
        const Item = document.createElement('li');
        const Link = document.createElement('span');

        Item.classList.add('find-list__item');
        Link.classList.add('find-list__link');

        Link.textContent = `${client.name } ${client.surname } ${client.lastName}`;


        Item.append(Link);
        findList.append(Item);
    });


    async function tableSearch(str) {
        const response = await findClint(str);
        const table = document.querySelector('.client__table-tbody')

        table.innerHTML = '';


        for (const client of response) {
            table.append(addTable(client));
        };
    };


    input.addEventListener('input', async() => {

        const value = input.value.trim();
        const foundItems = document.querySelectorAll('.find-list__link');

        if (value !== '') {
            tableSearch(value);
            foundItems.forEach(link => {
                if (link.innerHTML.search(value) == -1) {

                    link.classList.add('hide');
                    link.innerHTML = link.innerHTML;

                } else {
                    link.classList.remove('hide');
                    findList.classList.remove('hide');
                    const str = link.innerText;

                    link.innerHTML = mark(str, link.innerText.search(value), value.length);
                };
            });
        } else {
            const ul = document.querySelectorAll('.find-list');
            const tbody = document.querySelector('.client__table-tbody');
            const serverClients = await getPeapl();
            for (const client of serverClients) {
                tbody.append(addTable(client));
            };
            console.log(ul);
            ul.forEach(ul => {
                ul.classList.add('hide')
            })

        }
    });

    const mark = (str, pos, len) =>
        str.slice(0, pos) + '<mark>' + str
        .slice(pos, pos + len) + '</mark>' + str
        .slice(pos + len);

}
