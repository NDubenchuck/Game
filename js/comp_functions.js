// Comp hint

let compFirst = () => {
    firstStep = 1;
}

let compHint = (amount) => {
    if (document.querySelectorAll('.hipo').length === 0) {
        checkGame();
    }
    if (amount) {
        let hintNumber = amount;
        if (hintNumber <= document.querySelectorAll('.hipo').length) {
            for (let i = 0; i < hintNumber; i++) {
                let ser = document.querySelectorAll('.hipo')[0];
                ser.classList.add('hipo_comp');
                ser.classList.remove('hipo');
                document.querySelector('.game_score-comp').appendChild(ser);
            }
        } else {
            compHint(hintNumber - 1);
        }
    }
    if ( typeof amount === 'undefined' ) {
        let hintNumber = randomInteger(1, 3);
        if (hintNumber <= document.querySelectorAll('.hipo').length) {
            for (let i = 0; i < hintNumber; i++) {
                let ser = document.querySelectorAll('.hipo')[0];
                ser.classList.add('hipo_comp');
                ser.classList.remove('hipo');
                document.querySelector('.game_score-comp').appendChild(ser);
            }
        }else {
            compHint(hintNumber - 1);
        }
    }
    document.querySelector('.counter_comp-number').textContent = document.querySelectorAll('.hipo_comp').length;
    document.querySelector('.header_text').textContent = 'Plese, make a hint!!!!';
}
