// Faile pateiktos dienos oro temperatūros. Parašykite programą kuri surastų ir išvestų didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros.
// Failo pavyzdys:
// 1 2 7 3 4 6 -1 2 4 -3 -3 -5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1


const fs = require("fs");

const data = fs.readFileSync("temp.txt").toString().split(" ").map(Number);

// console.log(data);

let lowestTemp =  data[0];
let highestTemp = data[0];
let lowestTempIndex = 0;
let highestTempIndex = 0;

data.forEach((temp,i) => {
    if (temp < lowestTemp) {
        lowestTemp = temp;
        lowestTempIndex = i + 1;
    }
    if (temp > highestTemp) {
        highestTemp = temp;
        highestTempIndex = i + 1;
    }
});

console.log(`Lowest temp: ${lowestTemp}, day: ${lowestTempIndex}`);
console.log(`Highest temp: ${highestTemp}, day: ${highestTempIndex}`);
