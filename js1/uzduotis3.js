/*
Elektroninis laikrodis rodo laiką: valandas, minutes ir sekindes (įvedami skaičiai h, m, s). Kiek laiko laikrodis rodys po sekundės? (Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai (h,m,s).
*/

let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);

if (h === 23 && m === 59 && s === 59) {
    h = 0;
    m = 0;
    s = 0;
} else if (m === 59 && s === 59) {
    h++;
    m = 0;
    s = 0;
} else if (s === 59) {
    m++;
    s = 0;
} else {
    s++;
}

console.log(h, m, s);


/*
let hour = Number(process.argv[3]);
let min = Number(process.argv[4]);
let sec = Number(process.argv[5]);
sec++
if (sec === 60) {
    min++
    sec = 0;
}
if (min === 60) {
    hour++
    min = 0;
}
if (hour == 24) {
    hour = 0
}
console.log(`It is: ${hour}h:${min}min:${sec}s`);
*/