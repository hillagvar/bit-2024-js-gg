// Faile pateikti skaičiai (sveikieji, iš intervalo nuo 0 iki 9), parašykite JS programą kuri suskaičiuotų kiek ir kokių skaičių yra tekstiniame faile.

const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString().split(";").map(Number);

// console.log(data);

const numbers = Array(10).fill(0);

// console.log(numbers);

data.forEach((x) => {
    numbers[x]++;
});

numbers.forEach((n,i) => {
    console.log(`Number: ${i}, repeats: ${n}`);
});