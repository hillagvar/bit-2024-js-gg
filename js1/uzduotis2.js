/*
Pirmosios vasaros olimpinės žaidynės įvyko 1896 m. Atėnuose. Po to jos vyko arba turėjo vykti kas ketveri metai, t.y. 1900 m. – antrosios, 1904 m. – trečiosios ir t.t. Neįvykusioms žaidynėms skiriamas eilės numeris, o jų metai vis tiek laikomi olimpiniais. Žinomi metai M. Nustatykite olimpinių žaidimų numerį, jei metai yra olimpiniai arba pasakykite, kad metai ne olimpiniai. Programa turi paprašyti įvesti metus, ir išvesti ar tai buvo olimpiniai metai ar ne, jei tai buvo olimpiniai metai programa turi taip pat išvesti ir numerį.
*/

let pirmosiosZaidynes = 1896;
let ivestiMetai = process.argv[2];

if (ivestiMetai < 1896) {
    console.log("Metai ne olimpiniai");
} else if ((ivestiMetai - pirmosiosZaidynes) % 4 === 0) {
    let zaidyniuNumeris = ((ivestiMetai - pirmosiosZaidynes))/4 + 1;
    console.log("Metai olimpiniai, zaidyniu numeris: ", zaidyniuNumeris);
} else {
    console.log("Metai ne olimpiniai");
}

