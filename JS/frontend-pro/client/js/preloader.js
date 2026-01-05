export function preloader() {
    const divPreloader = document.createElement('div');
    const spanPreloader = document.createElement('span');

    divPreloader.classList.add('div-load');
    spanPreloader.classList.add('loading');

    divPreloader.append(spanPreloader);

    return divPreloader
}
