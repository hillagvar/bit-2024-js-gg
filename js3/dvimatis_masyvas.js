const fs = require("fs");
const input = fs.readFileSync(process.argv[2]).toString().split("\r\n");

console.log(input);

let mas2d = [];

input.forEach((l) => {
    mas2d.push(l.split(" "));
});

console.log(mas2d);

// const mas2d = [
//     [3, 2, 5],
//     [6, 9, 3],
//     [7, 8, 9]
// ];

// console.log(mas2d[1][1]);

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `[${y}, ${i}] ${mas2d[y][i]}`;
    }
    console.log(s);
}
