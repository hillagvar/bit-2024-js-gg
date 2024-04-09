"use strict";
class Studentas {
    //iprastinis konstr uzrasymo budas
    constructor(vardas, pavarde, amzius) {
        //public (kintamieji ir metodai) prieinami visur
        //protected prieinami klases viduje ir sub klasese
        //private prieinami tik viduje
        this.vardas = "";
        this.pavarde = "";
        this.amzius = 0;
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.amzius = amzius;
    }
}
class Pirmakursis extends Studentas {
    toString() {
        return this.vardas + " " + this.pavarde;
        // amzius jau nebeprieinamas
    }
}
let s = new Studentas("Jonas", "Jonaitis", 20);
s.vardas = "Jonas";
console.log(s.vardas);
//sutrumpintas konstr uzr budas
class Studentas2 {
    constructor(vardas, pavarde, _amzius) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this._amzius = _amzius;
    }
    toString() {
        return `${this.vardas} ${this.pavarde} ${this._amzius}`;
    }
    jaunesnis(s) {
        if (this.amzius < s.amzius) {
            return true;
        }
        else {
            return false;
        }
    }
    set amzius(a) {
        if (a > 0 && a < 150) {
            this._amzius = a;
        }
    }
    get amzius() {
        return this._amzius;
    }
}
let s2 = new Studentas2("Jonas", "Jonaitis", 20);
console.log(s2.toString());
s2.amzius = 160;
console.log(s2.toString());
s2.amzius = 32;
console.log(s2.toString());
console.log(s2.amzius);
let grupe = [];
grupe.push(new Studentas2("Jonas", "Jonaitis", 30));
grupe.push(new Studentas2("Petras", "Petraitis", 25));
grupe.push(new Studentas2("Antanas", "Antanaitis", 22));
let amziuSuma = 0;
grupe.forEach((s) => {
    console.log(s.toString());
    amziuSuma += s.amzius;
});
console.log(`Amziu suma: ${amziuSuma}`);
console.log(`Studentas 0 yra jaunesnis uz studenta 1: ${grupe[0].jaunesnis(grupe[1])}`);
