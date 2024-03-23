const fs = require("fs");

// let data = fs.readFileSync(process.argv[2]).toString().split(" ");
let data = fs.readFileSync("data1.csv").toString().split(" ").map(Number);

console.log(data);

let suma = 0;

data.forEach((d) => {
    console.log(typeof d);
    // suma+= Number(d);
    suma += d;
});

console.log(suma);

let x = parseInt("5");
let y = Number("5");

console.log("---------------");

// dvimacio masyvo skaitymas:

let data2 = fs.readFileSync(process.argv[2]).toString().split("\r\n");

console.log(data2);

let line = 0;
let mas = [];

data2.forEach((d) => {
    // console.log(typeof d);
    // console.log(d);

    mas[line] = [];


    d.split(" ").forEach((x)=> {
        // console.log(x);
        mas[line].push(x);
    });

    line++;
});

console.log(mas);

mas.forEach((line)=> {
    let out = "";
    // console.log(line);
    line.forEach((element)=> {
        // console.log(element);
        out += element + " ";
    });
    console.log(out);
});

