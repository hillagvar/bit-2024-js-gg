// Duomenų faile pateikiamas dvimačio masyvo 4,4 duomenys. Pavyzdžiui:
// 1 2 2 5
// 5 1 4 2
// 2 2 1 3
// 2 8 9 6

// Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:
// 0 2 2 0
// 5 0 0 2
// 2 0 0 3
// 0 8 9 0

const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString().split("\r\n");

const newArr = [];

data.forEach((line) => {
    newArr.push(line.split(" "));
});

// console.log(newArr);

let secondIndex = newArr.length - 1;

for (let i = 0; i < 4; i++) {
    let output = "";
    for (let j = 0; j < 4; j++) {
        newArr[i][i] = '0';
        newArr[i][secondIndex] = '0';
        output += newArr[i][j] + " ";
    }
    secondIndex--;
    console.log(output);
}

// console.log(newArr);


