/* Batman va rechercher les otages d'un batiment donné en sautant de fenêtre en fenêtre à l'aide de son grappin. Le but de Batman est d'arriver sur la fenêtre de la pièce où les otages se trouvent afin de désamorcer les bombes du Joker. Malheureusement il n'a qu'un nombre de sauts limités avant que les bombes n'explosent...
 
Avant chaque saut, le détecteur fournira à Batman la direction des bombes par rapport à la position actuelle de Batman:
U (Up : les bombes sont situées au dessus de Batman)
UR (Up-Right : les bombes sont situées au dessus et à droite de Batman)
R (Right : les bombes sont situées à droite de Batman)
DR (Down-Right : les bombes sont situées en dessous et à droite de Batman)
D (Down : les bombes sont situées en dessous de Batman)
DL (Down-Left : les bombes sont situées en dessous et à gauche de Batman)
L (Left : les bombes sont situées à gauche de Batman)
UL (Up-Left : les bombes sont situées au dessus et à gauche de Batman)

Votre mission consiste à programmer le détecteur afin qu'il indique la position de la fenêtre sur laquelle Batman devra se rendre au saut suivant de sorte qu'il atteigne les bombes le plus tôt possible.

Les bâtiments sont représentés par des rectangles de fenêtres, la fenêtre en haut à gauche a pour position (0,0). */

var inputs = readline().split(' ');
const buildingWidth = parseInt(inputs[0]); //Largeur du building
const buildingHeight = parseInt(inputs[1]); //Hauteur du building
const N = parseInt(readline()); //Nb de tours avant game over
var inputs = readline().split(' ');
const heroX = parseInt(inputs[0]);
const heroY = parseInt(inputs[1]);

//Récupérer les positions gauche, droite, haut, bas
let left = 0;
let up = 0; 
let down = buildingHeight - 1;
let right = buildingWidth - 1;

while (true) {
    const bombDir = readline(); //Direction des bombes depuis l'actuelle position de Batman (U, UR, R, DR, D, DL, L or UL)
    //Récupérer les positions des bombes
    bombDir.includes('L') && (right = heroX - 1);
    bombDir.includes('R') && (left = heroX + 1);
    bombDir.includes('D') && (up = heroY + 1);
    bombDir.includes('U') && (down = heroY - 1);
    //Update de la position de Batman
    heroX = Math.floor((right + left ) / 2);
    heroY = Math.floor((up + down ) / 2);

    console.log(heroX, heroY);
};
