const rotators = document.getElementsByClassName("rotator");
for (let rotator of rotators) {
    timer (rotator);
};


function advertisingRotator (rotator) {
    // Функция, которая делает активной следующую рекламную строку и меняет цвет шрифта 
    // на содержащийся в data-атрибутах. Текущую строку скрывает и возвращает цвет шрифта
    // к значению по умолчанию. При достижении последней строки в блоке - переходит к первой 
    // рекламной строке блока.  
    let element = rotator.querySelector(".rotator__case_active");
    let newElement = {};
    if (element === element.parentElement.lastElementChild) {
        newElement = element.parentElement.firstElementChild;
    } else {
        newElement = element.nextElementSibling;
    };
    newElement.classList.add("rotator__case_active");
    newElement.style.color = newElement.dataset.color;
    element.classList.remove("rotator__case_active");
    element.style.color = "";
    timer(rotator);
};

function timer (rotator) {
    // Функция, которая запускает таймер с функцией ротатором рекламы,
    // продолжительность задержки извлекается из data-атрибута текущего активного тега.
    // rotator - элемент-ротатор, содержащий в себе сменяемые строки рекламы.
    setTimeout(advertisingRotator,
        rotator.querySelector(".rotator__case_active").dataset.speed,
        rotator);
};