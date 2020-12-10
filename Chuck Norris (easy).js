//Le binaire avec des 0 et des 1 c'est bien. Mais le binaire avec que des 0, ou presque, c'est encore mieux. A l'origine, c'est un concept inventé par Chuck Norris pour envoyer des messages dits unaires.

//Ecrivez un programme qui, à partir d'un message en entrée, affiche le message codé façon Chuck Norris en sortie.

let MESSAGE = readline();

//Split MESSAGE et récupère chaque char
//Map sur tous les char de MESSAGE
//Convertir chaque char et récupérer le code ASCII en décimal
//Join pour re-transformer en string
//Récupérer tous les chars de la nouvelle string === 1
//Map sur tous les chars === 1 et les remplacer par '0' ou '0 0'
//Join pour re-transformer en string

MESSAGE = MESSAGE
            .split('')
            .map(char => parseInt(char.charCodeAt(0), 10).toString(2).padStart(7, '0'))
            .join('')
            .match(/(\d)\1*/g)
            .map(char => (char[0] === '1' ? '0 ' : '00 ') + '0'.repeat(char.length))
            .join(' ');

console.log(MESSAGE);