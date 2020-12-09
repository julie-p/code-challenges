//Trouver les deux puissances les plus proches et afficher leur écart avec un nombre entier positif.

//Boucle sur les chevaux
//Récupère les puissances des chevaux
//Sort les puissances de la plus petite à la plus grande
//Map sur les puissances
//Calcul de la différence entre les puissances (Math.abs ?)
//Slice pour enlever les valeurs non numériques
//Sort à nouveau
//Console log de la différence la plus petite

const N = parseInt(readline()); //Nb de chevaux
let horses = [];

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline()); //Puissance des chevaux
    horses.push(pi);
};

horses = horses
        .sort((a, b) => a - b)
        .map((current, index, array) => Math.abs(current - array[index - 1]))
        .slice(1)
        .sort((a, b) => a - b);

console.log(horses[0]);