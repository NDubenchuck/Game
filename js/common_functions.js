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

let checkGame = () => {
    if ((document.querySelectorAll('.hipo_comp').length === 0) && (document.querySelectorAll('.hipo_user').length === 0) && (document.querySelectorAll('.hipo').length === 0)) {
        document.querySelector('.header_text').textContent = 'Plese, start game!!!!';
        return true;
    }
    if ((document.querySelectorAll('.hipo_comp').length % 2 === 0) && (document.querySelectorAll('.hipo').length === 0)) {
        document.querySelector('.header_text').textContent = 'Comp Wins!!!!';
        return true;
    } else if ((document.querySelectorAll('.hipo_user').length % 2 === 0) && (document.querySelectorAll('.hipo').length === 0)) {
        document.querySelector('.header_text').textContent = 'User Wins!!!!';
        return true;
    }
}

let randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let delWarning = () => {
    document.querySelector('.header').textContent = '';
};

// let getHipo = (amount) => {
//     let userField = document.querySelector('.buttons');
//     if (amount) {
//         return true;
//     } else {
//         for (let i = 1; i <= 3; i++) {
//             let counter = createGetter(i);
//             userField.appendChild(counter);
//         }
//     }
//     return userField;
// }
// Add new Animals to game

let renewGame = () => {
    document.querySelector('.header_text').textContent = ''
    let gameField =document.querySelector('.game_field');
    let compField =document.querySelector('.game_score-comp');
    let userField =document.querySelector('.game_score-user');
    try {
        while (gameField.firstChild) {
            gameField.removeChild(gameField.firstChild);
        }
    } catch (e) {
    }
    try {
        while (compField.firstChild) {
            compField.removeChild(compField.firstChild);
        }
    } catch (e) {
    }
    try {
        while (userField.firstChild) {
            userField.removeChild(userField.firstChild);
        }
    } catch (e) {
    }

}

let createGipoElem = () => {
    let gipo = document.createElement('div');
    gipo.classList.add('hipo');
    let img = document.createElement('img');
    img.setAttribute('src', 'img/hipo.png');
    gipo.appendChild(img);
    return gipo;
}
