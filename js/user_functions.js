
// User Hint

let userFirstStep = () => {
    firstStep = 2;
}

let clickedNumber = (der) => {
    checkGame();
    document.querySelector('.header_text').textContent = '';
    if (qualityOfGame === 0) {

        if (der <= document.querySelectorAll('.hipo').length) {

            for (let i = 0; i < der; i++) {
                let ser = document.querySelectorAll('.hipo')[0];
                ser.classList.add('hipo_user');
                ser.classList.remove('hipo');
                document.querySelector('.game_score-user').appendChild(ser);
            }
            compHint();

            document.querySelector('.counter_user-number').textContent = document.querySelectorAll('.hipo_user').length;
            document.querySelector('.counter_common-number').textContent = document.querySelectorAll('.hipo').length;
            checkGame();
        } else {
            checkGame();
        }
    } else if (der <= document.querySelectorAll('.hipo').length) {
        for (let i = 0; i < der; i++) {
            let ser = document.querySelectorAll('.hipo')[0];
            ser.classList.add('hipo_user');
            ser.classList.remove('hipo');
            document.querySelector('.game_score-user').appendChild(ser);
        }
        compHint(der);

        document.querySelector('.counter_user-number').textContent = document.querySelectorAll('.hipo_user').length;
        document.querySelector('.counter_common-number').textContent = document.querySelectorAll('.hipo').length;
        checkGame();
    } else {
        checkGame();
    }
}
