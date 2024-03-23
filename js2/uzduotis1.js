const fs = require("fs");

let data = fs.readFileSync("temp.txt").toString().split(" ").map(Number);

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
