const fs = require("fs");

const preke = {
    pavadinimas: "Televizorius",
    kaina: 600,
    spalva: "juoda"
};

console.log(preke);
console.log(typeof preke);
const str = JSON.stringify(preke);
console.log(str);

fs.writeFileSync("preke.json", str);

