// Ecrire un programme capable d'afficher une ligne de texte en art ASCII dans un style qui vous est fourni en entrée.
// Transformer le texte T en art ASCII.
// Les caractères de a à z seront affichés en art ASCII par leur équivalent en majuscule.
// Les caractères qui ne sont pas dans les intervales [a-z] ou [A-Z], seront affichés par le point d'interrogation en art ASCII.

const L = parseInt(readline()); //largeur d'une lettre en ASCII
const H = parseInt(readline()); //hauteur d'une lettre en ASCII
const T = readline().toUpperCase(); //ligne de texte à écrire en ASCII

//Boucle sur la hauteur
for (let i = 0; i < H; i++) {
    let ROW = readline(); //Récupère la 1ère ligne
    let string = ""; //Initialise une var vide

    //boucle sur toutes les lettres de la ligne T
    for (let j = 0; j < T.length; j++) {
        //Définir la position de la lettre actuelle dans l'alphabet
        let indexASCII = (T[j].charCodeAt(0) - 97) * L;

        //Si la lettre n'est pas dans l'alphabet donné - écrire '?'
        (indexASCII < 0) && (indexASCII = 26 * L);
        //Ajoute la lettre sélectionnée
        string += row.slice(indexASCII, indexASCII + L); //Update de la var string 
    }
    console.log(string);
};