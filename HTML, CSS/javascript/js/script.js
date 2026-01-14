document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.description-steps').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active');
            });
            document.querySelectorAll('.tabs__btn').forEach(function(btn) {
                btn.classList.remove('worker__button_active')
            })
            tabsBtn.classList.add('worker__button_active')
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });
});


new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

})



$('.acc-list').accordion({
    active: false,
    collapsible: true,
    header: ".acc-item__button",
    heightStyle: "content",
    icons: {
        "header": "acc-item__accord",
        "activeHeader": "acc-item__accord acc-item__accord-active"
    },
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('.nav__list').classList.toggle('nav__list_active')
    })
    document.querySelector('#nav_btn').addEventListener('click', function() {
        document.querySelector('.nav__list').classList.toggle('nav__list_active')
    })
    document.querySelector('#search__btn').addEventListener('click', function() {
        document.querySelector('#search').classList.remove('header__search-active')
    })
    document.querySelector('#nav__search').addEventListener('click', function() {
        document.querySelector('#search').classList.toggle('header__search-active')
    })

})