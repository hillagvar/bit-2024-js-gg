let mas = [5, 4, 7];
mas.push(8);
mas[6] = 9;

console.log(mas);

let mas2 = [];

for (let i = 1; i < 10; i++) {
    mas2.push(i);
}

console.log(mas2);

mas2.forEach((x, i)=> {
    console.log(`${i} => ${x}`);
});

let temp = [5,6,2,3,4,6,7];

let suma = 0;
let kiekis = 0;

temp.forEach((x) => {
    suma += x;
    kiekis++;
})

console.log(`Vidurkis: ${suma/kiekis}`);

for (const x of temp) {

}

// for of vs forEach

let s = (x) => {

};

temp.forEach(s);

// -- toks variantas galimas tik su forEach 

console.log("--------------");

// masyvas masyve:

let men = [[1,2,3,4,1,3,4], [3,5,6,7,2,6,7], [3,2,4,5,6,7,8]];

console.log(men[0][2]);

let tempSuma = 0;
let tempKiekis = 0;

men.forEach((sav)=> {
    let savSuma = 0;
    let savKiekis = 0;
    sav.forEach((diena)=> {
        savSuma += diena;
        savKiekis++;
        // console.log(diena);
        // tempSuma += diena;
        // tempKiekis++;
    });
    // console.log(sav);
    tempSuma += savSuma;
    tempKiekis += savKiekis;

    console.log(`Savaites vidurkis: ${savSuma/savKiekis}`);
});

console.log(`Vidurkis: ${tempSuma/tempKiekis}`)


