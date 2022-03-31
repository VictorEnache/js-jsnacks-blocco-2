/* Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una 
lista di nomi e una lista di cognomi, e da queste vuole generare 
una falsa lista di invitati con nome e cognome.
 */

const cognomi_invitati = ['Enache', 'Pestilli', 'Bivol', 'Giolitto', 'Cit',];

const nomi_invitati = ['Victor', 'Catiuscia', 'Nadia', 'Ginevra', 'Angelo'];

let random = [] 

let nome_cognome;

while (random.length <= 5 && random.length < (nomi_invitati.length * cognomi_invitati.length)){
    let nome_random = nomi_invitati[Math.floor(Math.random() * nomi_invitati.length)] 
    let cognome_random = cognomi_invitati[Math.floor(Math.random() * cognomi_invitati.length)] 

    nome_cognome = nome_random + ' ' + cognome_random;

    if(!random.includes(nome_cognome)){
        random.push(nome_cognome)
    }
}

console.log(random)







/* let cognomi_mischiati = []; */


/* let cognome_random;

let nome_random;

let bool = true;

let i = 0;

while(i <= 5){

    

    cognome_random = cognomi_invitati[Math.floor(Math.random() * nomi_invitati.length)] 
    
    for (let index = 0; index < 5   ; index++){
        
        if (cognome_random == cognomi_mischiati[index]){
            bool = false
        }

    }
     

    if(bool){
        cognomi_mischiati.push(cognome_random)
    }

    i += cognomi_mischiati.length

        
} 
    
    console.log(cognomi_mischiati)
 

 */


/* numero_cognome_random = Math.floor(Math.random() * nomi_invitati.length)
numero_nome_random =  Math.floor(Math.random() * nomi_invitati.length)

finti_invitati.push(nomi_invitati[nome_random]  + ' ' + cognomi_invitati[cognome_random] )
console.log(finti_invitati)

console.log(nome_random)

console.log(cognome_random) */

