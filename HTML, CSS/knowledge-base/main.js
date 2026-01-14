const element = document.querySelector('#select');

const choices = new Choices(element, {
    itemSelectText: ``,
    position: `buttom`,
    searchEnabled: false,
    placeholder: true,
    placeholderValue: ``
});


ymaps.ready(init);


// function init() {
//     var myMap = new ymaps.Map("map", {
//         center: [48.87297154032142, 2.3527474439372966],
//         zoom: 17
//     });

//     var myPlacemark = new ymap.Placemark([48.87297154032142, 2.3527474439372966], {}, {
//         iconLayout: 'default#image',
//         iconImageHref: '../16_knowledge-base/img/Subtract.svg',
//         iconImageSize: [28, 44],
//         iconImageOffset: [-3, -42]
//     });

//     // Размещение геообъекта на карте.
//     myMap.geoObjects.add(myPlacemark);
// }


function init() {
    var myMap = new ymaps.Map("map", {
        center: [48.87297154032142, 2.3527474439372966],
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([48.87297154032142, 2.3527474439372966], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../16_knowledge-base/img/Subtract.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
}



var inputTel = document.querySelector("input[type='tel']");
var im = new Inputmask('+7 (999) 999-99-99');

im.mask(inputTel);

const validation = new JustValidate('.form');

validation.addField('.input-text', [{
            rule: 'required',
            errorMessage: 'Вы не ввели имя'
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Минимум 2 символа'
        },
        {
            rule: 'maxLength',
            value: 10,
            errorMessage: 'Максимальная длина 10 символов'
        }
    ])
    .addField('.input-tel', [{
            rule: 'required',
            errorMessage: 'Вы не ввели телефон',
        },
        // {
        //     function: (name, value) => {
        //         const phone = selector.Inputmask.unmaskedvalue()
        //         return Number(phone) $$ phone.length === 10
        //     }
        // },
    ])
    .addField('.input-email', [{
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'Введите коректный адрес',
        },
    ]);

tippy('#myButton', {
    content: 'Глава 2, страница 176',
});
