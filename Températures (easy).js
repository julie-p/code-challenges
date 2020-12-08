/* 
Objectif :
Dans cet exercice, vous devez analyser un relevé de températures pour trouver quelle température se rapproche le plus de zéro.
Règles :
Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
*/

const count = parseInt(readline()); // Nb de temps à analyser
var temps = readline().split(' ');

//Tri les temps de la valeur la plus petite à la plus grande
//Retourner la valeur absolue la plus proche de 0
//Pour retourner l'entier positif => b - a (ex 5 - (-5) = 5)
var tempsSorted = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);

console.log(tempsSorted[0] || 0);