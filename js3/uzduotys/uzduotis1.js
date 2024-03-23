// Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek iš viso šiame masyve yra lyginių ir nelyginių skaičių. Išveskite visus lyginius ir nelyginius skaičius.

// Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

// Programa turi išvesti:

// Lyginiai skaičiai: 8 2
// Nelyginiai skaičiai: 5 7 3


const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString().split(" ").map(Number);

// console.log(data);

const nelyginiai = [];
const lyginiai = [];

// let output1 = "Lyginiai: ";
// let output2 = "Nelyginiai: ";

// data.forEach((n) => {
//     if (n % 2 === 0) {
//         output1 += n + " ";
//     } else {
//         output2 += n + " ";
//     }
// });

// console.log(output1);
// console.log(output2);

data.forEach((n) => {
    if (n % 2 === 0) {
        lyginiai.push(n);
    } else {
        nelyginiai.push(n);
    }
});

console.log(lyginiai);
console.log(nelyginiai);

let output1 = "Lyginiai: ";
let output2 = "Nelyginiai: ";

lyginiai.forEach((n) => {
    output1 += n + " ";
});

nelyginiai.forEach((n) => {
    output2 += n + " ";
});

console.log(output1);
console.log(output2);