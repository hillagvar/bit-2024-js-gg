const fs = require("fs");
let str = fs.readFileSync("preke.json").toString();

console.log(str);

let preke = JSON.parse(str);

console.log(preke.pavadinimas);
