"use strict";
let x;
x = 5;
let y = 5;
let z = 5;
let a;
a = 8;
console.log(x.toFixed(2));
let x1 = {
    x: 5,
    y: 3
};
console.log(x1.x);
let darbuotojas1 = {
    name: "Jonas",
    salary: 1200
};
let darbuotojas2 = {
    name: "Petras",
    salary: 1500
};
console.log(darbuotojas1.name);
darbuotojas1 = darbuotojas2;
console.log(darbuotojas1.name, darbuotojas2.name);
darbuotojas2.name = "Kazys";
console.log(darbuotojas1.name, darbuotojas2.name);
let darb3 = {
    name: "Jonaitis",
    salary: 1400,
    getSalary() {
        return this.salary * 0.8;
    },
};
let darb4 = {
    name: "Petraitis",
    salary: 1500,
    getSalary() {
        return this.salary * 0.75;
    },
};
//klase
// klasej galima realizuoti metoda, ne tik deklaracija (kaip kad interfeise)
class Darb3 {
    constructor(name, salary) {
        this.name = "";
        this.salary = 0;
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary * 0.8;
    }
}
let darb5 = new Darb3("Antanaitis", 1500);
console.log(darb5);
/*
let darb5:Darbuotojas3={
    name:"Antanaitis",
    salary:1200
}

let darb6:Darbuotojas3={
    name:"Andriukaitis",
    salary:1600
}
*/
// funkcijose privaloma nurodyti param tipus
// ka grazina f-ja, nebutina nurodyti, dazniausiai
let suma = (x, y) => {
    return `x*y = ${x * y}`;
};
let p = suma(5, 8);
console.log(p);
/*
Duomenų tipas:    type
Talpina:
 duomenis

Interfeisas:      interface
Talpina:
 duomenis
 metodus
 apriboja klases

Klasė:            class
Talpina:
 duomenis
 metodus
 Galime realizuoti metodus
 Turi konstruktorius
 Geterius / seterius
 ...
*/ 
