/*
* jSnack 1
*
* Creare un array di oggetti
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
* Stampare a schermo la bici con peso minore
*/

console.log('------- jSnack 1 ---------');

const bicicles = [
    {
        nome: 'Atala',
        peso: 58,
    },
    {
        nome: 'Mountain Bike',
        peso: 25,
    },
    {
        nome: 'BMX',
        peso: 80,
    },
];

const index = 0;

for (let i = 1; i < bicicles.length; i++) {

    if (bicicles[i].peso < bicicles[index].peso) {
        bicicles[index].peso = bicicles[i].peso;
    }
}

console.log(
`Bici Leggera: ${bicicles[index].nome} 
Peso: ${bicicles[index].peso}KG`);


/*
* jSnack 2
* 
* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatt, falli subiti.
* Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
* Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
* Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

console.log('------- jSnack 2 ---------');

const teams = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

for (let i = 0; i < teams.length; i++) {
    teams[i].puntiFatti = randomNumber(1, 12);
    teams[i].falliSubiti = randomNumber(1, 50);
}

console.table(teams);

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
    newTeams.push({
        nome: teams[i].nome,
        falliSubiti: teams[i].falliSubiti,
    })
}

console.table(newTeams);

// Functions
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min)) + min;
}