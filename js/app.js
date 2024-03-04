//chilometri del passeggero 
const km = 500 //numb

console.log("chilometri passeggero", km, "km");





//prezzo del biglietto in base ai km (0.21km)
const prezzo = (km * 0.21); //numb

console.log("prezzo standard", prezzo, "euro");

//sconto dei minorenni 20% sconto 40% per over 65


//sconto dei minorenni 20%
let prezzosconto20 = (prezzo * 0.2); //numb
let prezzoscontato20 = prezzo - prezzosconto20;

console.log("sconto 20% minorenni", prezzoscontato20, "euro");
//sconto 40% per over 65
let prezzosconto40 = (prezzo * 0.4);//numb
let prezzoscontato40 = prezzo - prezzosconto40;

console.log("sconto 40% over 65", prezzoscontato40, "euro");

//età passeggero
const etaAsStr = prompt("Inserisci l'età") //string
const etaAsNumber = parseInt(etaAsStr); // numb
console.log("la tua età:", etaAsNumber); //numb

if (etaAsNumber >= 0 && etaAsNumber <= 18) {
    console.log("Prezzo minori 18 anni:", prezzoscontato20, "euro");

} else if (etaAsNumber > 18 && etaAsNumber < 65) {
    console.log("Prezzo standard:", prezzo, "euro");

} else {
    console.log("Prezzo over 65:", prezzoscontato40, "euro");

}






