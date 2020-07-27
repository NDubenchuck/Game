// Reset/start new game
let qualityOfGame = 0;
let firstStep = 0;
let userCountStep = 0;

let resetGame = () => {
    renewGame();
    addGipo(25);
        compHint(randomInteger(1, 3))
    randomCheck()
}

let resetHardGame = () => {

    renewGame();
    addGipo(25);
    if (firstStep === 1) {
        compHint(3)
    }
    randomCheck()
}
