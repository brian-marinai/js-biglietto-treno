// variabili

var costo = 0.21;



// quanti km devi percorrere

var chiLometri = prompt ("Quanti chilometri devi percorrere?", "inserisci i km");



// quanti anni hai

var eta = prompt ("Quale è la tua età?", "inserisci la tua eta");



// calcolo del prezzo

var prezzoTotale = chiLometri * costo;



// colcolo dell'eta

if(eta < 18){
  prezzoTotale = chiLometri * costo - 20/100 * (chiLometri * costo);
} else if(eta > 65){
  prezzoTotale = chiLometri * costo - 40/100 * (chiLometri * costo);
} else{
  prezzoTotale = chiLometri * costo;
}


// arrotondamento dei numeri decimali

var prezzoTotale = prezzoTotale .toFixed(2);



// clacolo del costo del biglietto con sconto

document.getElementById('title').innerHTML = "il costo del biglietto è: " + prezzototale + " euro";
