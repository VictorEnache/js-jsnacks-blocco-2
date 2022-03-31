/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */


let numero_inserito = parseInt(prompt('inserisci un numero'));


if (numero_inserito % 2 == 0){
    console.log(numero_inserito)
}
else {
    console.log(++numero_inserito)
}