/* Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */


let elenco_numeri = []

let somma = 0;

//genero i valori dell' arrai utilizzando un loop for
for (let i = 0; i < 6; i++){
    elenco_numeri.push(i)
}


//sommo i valori dispari dell'array
for (let j = 0; j < elenco_numeri.length; j++){
    let numero = elenco_numeri[j]
    
    //se la posizione è dispari sommo il valore corispondente a quella posizione
    if (j % 2 != 0){
        somma += numero
    }
}

console.log(somma)

