function play(config) {

    config.attempts = 1;

    // we give a value to the number to guess.
    config.target = getrandomNumber(config.min, config.max);
    console.log(config);

    // we let the player define a first value for his guess.
    config.guess = parseInt(prompt(`Find my number between ${config.min} and ${config.max}.`));

    while (config.target !== config.guess) {
        if (config.guess > config.target && config.guess < config.max) {
            config.guess = parseInt(prompt(`My number is smaller than ${config.guess} fellow human, go on.`));
            console.log('smaller');
        }

        else if (config.guess < config.target && config.guess > config.min) {
            config.guess = parseInt(prompt(`My number is greater than ${config.guess} fellow human, go on.`));
            console.log('greater');
        }

        else if (config.guess < config.min ) {
            config.guess = parseInt(prompt(`Becareful fellow human, my number is between ${config.min} and ${config.max}. Try again.`));
            console.log('less than min');
        }

        else if (config.guess > config.max) {
            config.guess = parseInt(prompt(`Becareful fellow human, my number is between ${config.min} and ${config.max}. Try again.`));
            console.log('more than max');
        }

        else {
            config.guess = parseInt(prompt(`Your answer must be a number fellow human.`));
            console.log('not a number');
        }
        config.attempts++;

    }
    config.score.push(config.attempts);
    console.log(config.score);
    let replay = confirm(`You win fellow human, my number was ${config.target}. It took you ${config.attempts} attempt(s) to find it. Would you like to play again ?`);
    if (replay) {
        play(config);
    }
    else {
        console.log(config.score);
        // on selectionne le tableau de score
        var scoreTableElement = document.getElementById('scoreTable');
        // on ajoute la classe "active" au tableau des scores
        // scoreTableElement.className = 'active';

        // on crée une boucle qui va incrémenter la variable corespondant au nombre de partie à l'aide de la longueur du tableau des scores
        for (var scoreIndex = 0; scoreIndex < config.score.length; scoreIndex++) {

            //on incrémente le nombre de partie joué pour chaque tour de boucle
            var gameNumber = scoreIndex + 1;

            // on ajoute le score de la partie à la variable corespondante
            var gameResult = config.score[scoreIndex]

            // on crée une rangé du tableau
            var rowElement = document.createElement('tr');

            // on crée une cellule du tableau pour le numéro de la partie
            var gameCellElement = document.createElement('td');

            // on ajoute le numéro de la partie dans cette cellule
            gameCellElement.textContent = gameNumber;

            // on crée une cellule pour le score de la partie
            var scoreCellElement = document.createElement('td');

            // on ajoute le score de la partie à cette cellule
            scoreCellElement.textContent = gameResult;

            // on ratache les cellule à des rangés
            rowElement.appendChild(gameCellElement);
            rowElement.appendChild(scoreCellElement);

            // on ratache les rangés au tableau
            var tbodyElement = scoreTableElement.querySelector('tbody');
            tbodyElement.appendChild(rowElement);
        }
    }
}

 function getrandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}

var game = {
    min: 0,
    max: 100,
    attempts: 1,
    target: null,
    guess: null,
    score: []
}

play(game);