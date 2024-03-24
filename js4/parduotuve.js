const fs = require("fs");

const str = fs.readFileSync("data.json").toString();

const sandelys = JSON.parse(str);

console.log(sandelys);
// console.log(typeof sandelys);

// Isvesti prekiu pavadinimu sarasa

sandelys.forEach((preke) => {
//     let prekiuKiekis = 0;
//     preke.kiekis_sandelyje.forEach((x) => {
//     prekiuKiekis+= x;
// });
const prekiuKiekis = preke.kiekis_sandelyje.reduce((total, item) => total + item); 
    console.log(`${preke.pavadinimas}, kaina: ${preke.kaina} EUR, kiekis: ${prekiuKiekis}`);
});
