const fs = require("fs");

let data = fs.readFileSync(process.argv[2]).toString().split(" ");

console.log(data);

let suma = 0;

data.forEach((d) => {
    suma+= Number(d);
});

console.log(suma);