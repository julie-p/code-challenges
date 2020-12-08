/* 
Objectif:
Votre programme doit permettre à Thor de rejoindre l'éclair de puissance.
Règles :
Thor évolue sur une carte de 40 cases de large et 18 cases de hauteur. Notez que les coordonnées (X et Y) commencent en partant du haut ! Ainsi la case la plus en haut à gauche a pour coordonnées "X=0,Y=0" et celle située le plus en bas à droite a pour coordonnées "X=39,Y=17".

Au début du programme vous recevez :
la variable lightX : la position X de l'éclair que Thor doit rejoindre.
la variable lightY : la position Y de l'éclair que Thor doit rejoindre.
la variable initialTX : la position X initiale de Thor.
la variable initialTY : la position Y initiale de Thor.
À la fin du tour de jeu, vous devez afficher la direction que Thor doit prendre parmi :
N (Nord)
NE (Nord-Est)
E (Est)
SE (Sud-Est)
S (Sud)
SW (Sud-Ouest)
W (Ouest)
NW (Nord-Ouest)

Chaque déplacement fait bouger Thor de 1 case dans la direction choisie.
*/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let currentX = initialTx, currentY = initialTy; // Sauvegarde la position actuelle de Thor

// game loop
// la condition tournera jusqu'à ce que Thor récupère l'éclair
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let move = '';

    //Si l'éclair est au dessus de Thor et que Thor n'est pas au début du plateau
    if (currentY > lightY && currentY > 0) {
        //Bouge Thor vers le nord
        move += 'N';
        currentY--;
    //Si l'éclair est en dessous et que Thor n'est pas à la fin du plateau
    } else if (currentY < lightY && currentY < 17) { 
        //Bouge vers le sud
        move += 'S';
        currentY++;
    };

    //Pareil pour gauche & droite
    if (currentX > lightX && currentX > 0) {
        move += 'W';
        currentX--;
    } else if (currentX < lightX && currentX < 39) {
        move += 'E';
        currentX++;
    };

    console.log(move);
};