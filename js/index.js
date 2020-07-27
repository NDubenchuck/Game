// Reset/start new game
let qualityOfGame = 0;
let firstStep = 0;

let resetGame = () => {
    renewGame();
    addGipo(25);
    randomCheck()
}

let resetHardGame = () => {

    renewGame();
qualityOfGame = 1
    addGipo(25);
}
