/*
 Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 */

console.log('Hello World!');
const list = ['Starwars', 'Matrix', 'Imitation game'];  //Run


/* Leggila ma eseguila tra 2 secondi */
for (let i = 0; i < list.length; i++) {
    const element = list[i]; //Run x number of time
    console.log(element);  //Run x number of time
}

console.log('Hello World 2!');  //Run (not runnin if the for loop is still running)

if (10 >20) {
    console.log('test 123');  //Run
}


function calcAge(yob) { //Run
    
console.log('test 2345');  //Run

}


/*
Asyncronous Programming
*/


// callback
setTimeout(myFunction, 3000);

function myFunction() {
    alert('Hello')
    console.log('Inside first alert 1');
}
console.log('After the timing function1');

//closure
setTimeout(function(){
   //code to run 3s 
   console.log('inside the timing function 2');
}, 3000);

console.log('After the timing function 2');



// interval


const clock = setInterval(myFunction_2, 3000);

console.log(clock);

function myFunction_2(){
    console.log('Hello')
}