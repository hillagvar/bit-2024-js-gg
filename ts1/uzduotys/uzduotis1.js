"use strict";
// Panaudodami TypeScript sukurkite klasę Triangle kuri būtų skirta darbui su trikampiais. Klasė turi turėti:
// 1. konstruktorių su trimis parametrais, kraštinėmis A, B, C
// 2. set'erius ir get'erius
// 3. privačią funkciją kuri patikrintų ar iš paduotų kraštinių įmanoma sudaryti trikampį (dviejų kraštinių suma didesnė už trečiąją)
// 4. bandant pakeisti kraštinės reikšmę per set'erius turi būti iškviečiamas patikrinimo metodas ir turėtų neleisti pakeisti reikšmių
// 5. Sukurkite metodą toString() kuris gražintų trikampį string formatu (atspausdinimui)
// 5. Sukurkite metodą getPerimeter() kuri suskaičiuotų ir grąžintų trikampio perimetrą
// 6. Sukurkite metodą getArea() kuri suskaičiuotų ir grąžintų trikampio plotą
// 7. Sukurkite metodą largerTriangle(t:Triangle):boolean kuris palygintų du trikampius ir grąžintų true jei kviečiamasis trikampis yra mažesnis arba lygus (plotu) ir false jei paduotas trikampis į funkciją yra didesnis
// 8. Sukurkite masyvą su trimis trikampiais ir parašykite programinį kodą kuris suskaičiuotų visų šių trikampių plotų sumą
// Papildomas iššūkis
// Sukurkite metodą getType() kuris grąžintų kokio tipo yra trikampis: lygiakraštis, lygiašonis, statusis ar įprastinis
class Triangle {
    constructor(_krastineA, _krastineB, _krastineC) {
        this._krastineA = _krastineA;
        this._krastineB = _krastineB;
        this._krastineC = _krastineC;
    }
    set krastineA(a) {
        if (this.patikrinimas(a, this._krastineB, this._krastineC)) {
            this._krastineA = a;
        }
    }
    get krastineA() {
        return this._krastineA;
    }
    set krastineB(b) {
        if (this.patikrinimas(this._krastineA, b, this._krastineC)) {
            this._krastineB = b;
        }
    }
    get krastineB() {
        return this._krastineB;
    }
    set krastineC(c) {
        if (this.patikrinimas(this._krastineA, this._krastineB, c)) {
            this._krastineC = c;
        }
    }
    get krastineC() {
        return this._krastineC;
    }
    patikrinimas(a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        return `${this._krastineA} ${this._krastineB} ${this._krastineC}`;
    }
    getPerimeter() {
        return this._krastineA + this._krastineB + this._krastineC;
    }
    getArea() {
        const pp = (this._krastineA + this._krastineB + this._krastineC) / 2;
        const area = Math.sqrt(pp * (pp - this._krastineA) * (pp - this._krastineB) * (pp - this._krastineC));
        return area;
    }
    largerTriangle(t) {
        const area = this.getArea();
        const area2 = t.getArea();
        if (area >= area2) {
            return true;
        }
        else {
            return false;
        }
    }
}
let trikampis1 = new Triangle(3, 3, 5);
console.log(trikampis1.toString());
trikampis1.krastineB = 4;
console.log(trikampis1.toString());
trikampis1.krastineC = 1;
console.log(trikampis1.toString());
console.log(trikampis1.getPerimeter());
console.log(trikampis1.getArea());
trikampis1.krastineA = 5;
console.log(trikampis1.getArea());
let trikampis2 = new Triangle(10, 12, 15);
console.log(trikampis1.largerTriangle(trikampis2));
let trikampis3 = new Triangle(3, 2, 3);
console.log(trikampis1.largerTriangle(trikampis3));
let trikampiai = [];
trikampiai.push(new Triangle(3, 3, 5));
trikampiai.push(new Triangle(4, 4, 6));
trikampiai.push(new Triangle(10, 9, 8));
console.log(trikampiai);
let plotuSuma = 0;
trikampiai.forEach((t) => {
    plotuSuma += t.getArea();
});
console.log(plotuSuma);
