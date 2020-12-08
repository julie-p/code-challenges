/* 
Objectif :
Écrivez le programme permettant de détruire les montagnes pour pouvoir attérir. Pour cela, tirez sur la montagne la plus haute.
Règles :
Au début de chaque tour de jeu, vous recevez en entrée la hauteur de chaque montagne de gauche à droite.
Avant la fin du tour de jeu, vous devez indiquer la montagne la plus haute pour tirer dessus.

Tirer sur une montagne ne fera qu'en détruire une partie. Votre vaisseau descend à chaque passe. 
*/

// Récupérer la montagne la plus haute 
// Récupérer la montagne à détruire
// Comparer si mountainH est plus haute 
// mountainH devient la montagne la plus haute
// Récupérer l'index de mountainH
// game loop
while (true) {
    var biggest = 0;
    var mountainToShoot = 0;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        if (biggest < mountainH) {
            biggest = mountainH;
            mountainToShoot = i;
        }
    }

    // Write an action using console.log()
    console.log(mountainToShoot)
}
