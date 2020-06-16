// variabili

var costo = 0.21;



// quanti km devi percorrere

var chiLometri = prompt ("Quanti chilometri devi percorrere?");



// quanti anni hai

var eta = prompt ("Quale è la tua età?");



// calcolo del prezzo

var prezzototale = chiLometri * costo;



// colcolo dell'eta

if(eta < 18){
  prezzototale = prezzototale / 100 * 80;
} else if(eta > 65){
  prezzototale = prezzototale / 100 * 60;
}



// clacolo del costo del biglietto con sconto

document.getElementById('title').innerHTML = "il costo del biglietto è: " + prezzototale + " euro";
