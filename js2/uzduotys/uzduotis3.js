// Faile pateikiami duomenys masyvas turintis 4,4 elementų. Pavyzdžiui:
// 1 2 3 5
// 5 4 4 7
// 3 2 1 9
// 2 3 4 5
// Parašykite programą kuri apverstų (pasuktų) masyvą, rezultatas atvaizduojamas ekrane:
// 1 5 3 2
// 2 4 2 3
// 3 4 1 4
// 5 7 9 5

const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString().split("\r\n");

const mas = [];

data.forEach((line) => {
   mas.push(line.split(" "));
});

// console.log(mas);

const newMas = [];

for (let i = 0; i < 4; i++) {
    let line = [];
    for (let j = 0; j < 4; j++) {
        line.push(mas[j][i]);
    }
    newMas.push(line);
}

// console.log(newMas);

newMas.forEach((line) => {
    let output = "";
    line.forEach((x) => {
        output += x + " ";
    })
    console.log(output);
});

console.log("---------------");

// Kai masyvas yra bet kokio dydžio [n,n]

const n = mas.length;
for (let i = 0; i < n; i++) {
    let output = "";
    for (let y = 0; y < n; y++) {
        output += `${mas[i][y]} `;
    }
    console.log(output);
}

console.log("---------------");

for (let i = 0; i < n; i++){
    let output = "";
    for (let y = 0; y < n; y++){
        output += `${mas[y][i]} `;
    }
    console.log(output);
}
