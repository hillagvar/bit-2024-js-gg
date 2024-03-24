// Panaudodami Frankfurter.app API sukurkite JS programą kuri atliktų valiutos kurso keitimą. API aprašas pateikiamas čia: https://www.frankfurter.app/docs/ . Iškviečiant Jūsų aplikaciją turime nurodyti į kokią valiutą norime konvertuoti ir kokią sumą (konvertavimas visą laiką bus vykdomas iš EUR į kažką). Jūsų aplikacija turi išvesti valiutos kursą (kiek kainuoja iškeisti vieną EUR į tą valiutą) ir kiek gausime nurodytos valiutos už pateiktą sumą. Pavyzdžiui jei programą iškviestumėme taip:

// node currency.js NOK 150
// Programa turėtų išvesti:
// NOK kursas: 11.5
// 150 EUR => 1725 NOK

// Papildomas iššūkis
// Prieš konvertavimą patikrinkite ar teisingai yra nurodytas valiutos pavadinimas

// Pavyzdžiui iškvietus programą taip:
// node currency.js GBG 100

// Programa turėtų išvesti:
// Valiuta GBG neegzistuoja

// Galite Rinktis vieną iš šių valiutų:
// AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, ....

// Valiutų sąrašą galite gauti čia:
// https://api.frankfurter.app/currencies



async function convertCurrency(currency, amount) {
    const tmp = await fetch("https://api.frankfurter.app/latest?amount="+amount+"&to="+currency);
    const convertedCurrency = await tmp.json();

    console.log(`${currency} kursas: ${convertedCurrency.rates[currency]/amount}`);
    console.log(`${amount} EUR => ${convertedCurrency.rates[currency]} ${currency}`);
    
}

convertCurrency(process.argv[2], process.argv[3]);