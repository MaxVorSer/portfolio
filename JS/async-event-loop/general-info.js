import { rendalPage } from './index.js';

export function render(data) {
    console.log(data)
    const container = document.createElement('div');
    const appContainer = document.getElementById('app');
    const header = document.createElement('h1');

    container.classList.add('container');
    appContainer.style.backgroundColor = 'Black';
    header.classList.add('p-3', 'text-secondary', 'text-center');
    header.textContent = 'May the Force be with you';
    appContainer.append(header);

    data.results.forEach((episode, film) => {

        const yearRelease = episode.release_date.slice(0, 4);
        const filmCard = document.createElement('div');
        const cardFootnotes = document.createElement('em');
        const detailButton = document.createElement('a');

        filmCard.style.width = '20rem';
        filmCard.classList.add('card', 'border-light', 'mb-3', 'mx-auto');
        detailButton.classList.add('btn');

        cardFootnotes.textContent = yearRelease;
        cardFootnotes.style.fontSize = '0.7rem';
        detailButton.style.color = 'white';
        detailButton.textContent = `${film + 1}. ${episode.title}`;
        detailButton.href = `?film=${film + 1}`;
        container.append(filmCard);
        filmCard.append(detailButton);
        detailButton.append(cardFootnotes);

        detailButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState(null, '', `?film=${film + 1}`);
            rendalPage(
                './film-info.js',
                `https://swapi.dev/api/films/${film + 1}`,
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
            );
        });
    });

    return container;
}
