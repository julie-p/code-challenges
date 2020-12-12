/*La  ville de Montpellier a équipé ses rues de défibrillateurs pour permettre de sauver des victimes d'arrêts cardiaques. Les données correspondant à la position de tous les défibrillateurs sont accessibles en ligne.

Sur la base des données fournies dans les tests, vous décidez d'écrire un programme qui permettra aux usagers de trouver le défibrillateur le plus proche de là où ils se trouvent, grâce à leur téléphone portable. */

const LON = parseFloat(readline().replace(',', '.'));
const LAT = parseFloat(readline().replace(',', '.'));
const N = parseInt(readline());

//Remplacer ',' par '.' pour lon & lat
//Split pour récupérer chaque valeurs de defib
//Récupérer longitude & latitude & nom du défib
//Calculer la distance avec la formule
//Stocker distance & name dans defibs
//Sort les données de defibs et récupérer que le 1er nom

const distance = (latA, latB, lonA, lonB)=> {
    let x = (lonB - lonA) * Math.cos( ( latA + latB ) / 2);
    let y = (latB - latA);
    return Math.sqrt((x * x) + (y * y)) * 6371;
};

let defibs = {};

for (let i = 0; i < N; i++) {
    let DEFIB = readline();
    let defibValue = DEFIB.split(';')
    let name = defibValue[1];
    let lon = parseFloat(defibValue[4].replace(',', '.'));
    let lat = parseFloat(defibValue[5].replace(',', '.'));
    let d = distance(LAT, lat, LON, lon);
    defibs[d] = name;
};

console.log(
    defibs[Object.keys(defibs)
                 .sort((a, b) => a - b)[0]]
);