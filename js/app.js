//chilometri del passeggero 
const km = 10 //numb

console.log("chilometri passeggero",km);





//prezzo del biglietto in base ai km (0.21km)
const prezzo = (km * 0,21); 

console.log("prezzo standard",prezzo);

//sconto dei minorenni 20%
//sconto 40% per over 65

//sconto dei minorenni 20%
let prezzominor20 = parseFloat( prezzo * 0.2 )
let prezzoscontato20 = prezzo - prezzominor20 ;

console.log("sconto 20% minorenni",prezzoscontato20);
//sconto 40% per over 65
let prezzominor40 = parseFloat( prezzo * 0.4 )
let prezzoscontato40 = prezzo - prezzominor40 ;

console.log("sconto 40% over 65",prezzoscontato40);

//età passeggero
const eta = prompt("Inserisci l'età")
console.log("la tua età:" ,eta);

if (eta >=0 && eta<=18)
{
    console.log("Prezzo minori 18 anni:" ,prezzoscontato20, "euro");

} else if (eta > 18 && eta < 65)
{
console.log("Prezzo standard:",prezzo, "euro");

} else(eta >= 65)
{
console.log( "Prezzo over 65:" ,prezzoscontato40, "euro");

}






