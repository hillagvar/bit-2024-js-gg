/*
Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, jei jo skaitmenų, pakeltų 3-uoju laipsniu, suma lygi pačiam skaičiui. Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999.
*/

let pradzia = 100;
let pabaiga = 999;

// for (let i = pradzia; i <= pabaiga; i++) {
//     let pirmas = (i - (i % 100))/100;
//     let antras = ((i % 100) - (i % 10))/10;
//     let trecias = i % 10;
//     if (pirmas**3 + antras**3 + trecias**3 === i) {
//         console.log(i);
//     }
// }

for (let i = pradzia; i <= pabaiga; i++) {
    let pirmas = Math.floor(i/100);
    let antras = Math.floor(i % 100 / 10);
    let trecias = i % 10;
    if (pirmas**3 + antras**3 + trecias**3 === i) {
    console.log(i);
    }
}




