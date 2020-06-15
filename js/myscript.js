// variabili

var costo = 0.21 * chiLometri;


// quanti km devi percorrere

var chiLometri = prompt ("Quanti chilometri devi percorrere?");


// quanti anni hai

var eta = prompt ("Quale è la tua età?");



// somma


var somma = chiLometri + costo;



document.getElementById('title').innerHTML = "il costo del biglietto è" + somma;
