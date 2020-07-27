let createGipoElem = () => {
    let gipo = document.createElement('div');
    gipo.classList.add('hipo');
    let img = document.createElement('img');
    img.setAttribute('src', 'img/hipo.png');
    gipo.appendChild(img);
    return gipo;
}
// let createGetter = (amount) => {
//     let getter = document.createElement('button');
//     getter.classList.add('buttons_getter');
//     getter.setAttribute('value' , amount);
//     getter.textContent = amount;
//     return getter;
// }
let getHipo = (amount) => {
    let userField = document.querySelector('.buttons');
    if (amount) {
        return true;
    } else {
        for (let i = 1; i <= 3; i++) {
            let counter = createGetter(i);
             userField.appendChild(counter);
        }
    }
    return userField;
}
let delWarning = () => {
    document.querySelector('.header').textContent = '';
};
let clickedNumber = (der) => {
    document.querySelector('.header_text').textContent = '';
    if (der <= document.querySelectorAll('.hipo').length) {
        let gipo = document.querySelectorAll('.hipo');
        for (let i = 0; i < der; i++) {

        }
    } else {
        document.querySelector('.header_text').textContent = 'Please choose less number of animals!';
    }
}
let addGipo = (amount) => {
    let mainPage = document.querySelector('.game_field');
    if(amount) {
        for (let i = 0; i < amount; i++) {
            let animalPicture = createGipoElem();
            mainPage.appendChild(animalPicture);
        }
    }
    document.querySelector('.counter_common-number').textContent = document.querySelectorAll('.hipo').length;
    document.querySelector('.counter_comp-number').textContent = '0';
    document.querySelector('.counter_user-number').textContent = '0';
    return true;
}

addGipo(2);
// getHipo();
// let ret = document.querySelectorAll('.buttons_getter');
// for (let i = 0; i < ret.length; i++) {
//     ret[i].addEventListener('click', clickedNumber(123456789),);
// }


