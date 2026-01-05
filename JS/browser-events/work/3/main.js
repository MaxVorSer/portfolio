const img = document.createElement('img');
const div3 = document.createElement('div');
const btn = document.createElement('button');
const container = document.querySelector('.container');

btn.classList.add('btn3');
div3.classList.add('div3');

img.src = '../work/3/1.jpg';

container.append(btn, div3);
div3.append(img);

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 300) {
        btn.classList.add('btn3-actve');
    } else if (window.pageYOffset < 300) {
        console.log(1)
        btn.classList.remove('btn3-actve');
    };
}, { passive: true })

btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
