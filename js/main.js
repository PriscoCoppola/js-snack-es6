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
    return Math.floor( Math.random() * (max - min + 1)) + min;
}

/*
* jSnack 3
*
* Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
* inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter
*/

console.log('------- jSnack 3 ---------');

const user = ['Paolo', 'Lorenzo', 'Fabio', 'Mattia', 'Giorgio', 'Nicola', 'Roberto'];

let min = parseInt( prompt('Inserisci un numero da 0 a ' + user.length) );
while (isNaN(min) || min < 0 || min > user.length) {
    min = parseInt( prompt('Inserisci un numero da 0 a ' + user.length) );
}
let max = parseInt( prompt('Inserisci un numero da ' + min + ' a ' + user.length) );
while (isNaN(max) || max < min || max > user.length) {
    max = parseInt( prompt('Inserisci un numero da ' + min + ' a ' + user.length) );
}

const newUser = user.filter((element, index) => {
    return (min <= index && max >= index);
})

console.log(newUser);

/*
* jsnack 4
* 
* Dato un'array con dei capi d'abbigliamento
* Oggetti che contengono informazioni su nome modello, tipologia e colore 
* Si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
* Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)
*/

console.log('------- jSnack 4 ---------');

const vestiti = [
    {
        nome: 'Maglia',
        modello: 'Estivo',
        tipologia: 'Cotone',
        colore: 'Blu'
    },
    {
        nome: 'Pantalone',
        modello: 'Primavera',
        tipologia: 'Lana',
        colore: 'Rosa',
    },
    {
        nome: 'Slip',
        modello: 'Invernale',
        tipologia: 'Poliestere',
        colore: 'Azzurro',
    },
];

const newVestiti = vestiti.map((element) => {
    const newArray = {
        ...element,
        prezzo: randomNumber(10, 50), 
    }

    return newArray;
})

console.log(newVestiti);

// Function
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
}