let elenco_1 = ['elemento_1', 'elemento_2', 'elemento_3', 'elemento_4',]

let elenco_2 = ['elemento_1', 'elemento_2', 'elemento_3', 'elemento_4','elemento_5', 'elemento_6', 'elemento_7',]

let i ;

if (elenco_1.length < elenco_2.length){

    i = (elenco_1.length) + 1

    while (elenco_1.length != elenco_2.length){

        elenco_1.push(`elemento_${i}`)

        i++
    }
}
else if (elenco_2.length < elenco_1.length) { 

    i = (elenco_2.length) + 1

    while (elenco_1.length != elenco_2.length){

        elenco_2.push(`elemento_${i}`)

        i++
    }

}

else{
    console.log("i avevavo fin dall'inizio lostesso numero di elementi")
}



console.log(elenco_1)
console.log(elenco_2)