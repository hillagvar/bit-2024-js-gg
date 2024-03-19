/* 
Sukurkite programą trikampio plotui rasti. Trikampio kraštinės įvedamos klaviatūra, o programa turi išvesti rezultatą.
Duomenys įvedami kaip parametrai: a, b ir c. 
*/

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);

let pp = (a + b + c)/2;

let plotas = Math.sqrt(pp*(pp-a)*(pp-b)*(pp-c));

console.log("Plotas: ", plotas);