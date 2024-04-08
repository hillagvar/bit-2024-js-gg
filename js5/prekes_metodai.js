class Preke2 {
    kaina = 0;
    // kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;

        // this.kainaSuPVM = this.kaina * 1.21;
    }

    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.kaina} EUR`;
    }

    get kainaSuPVM() {
        return this.kaina * 1.21;
    }

}

const tv = new Preke2(100, "Televizorius");
const pc = new Preke2(600, "Kompiuteris");

console.log(tv.isvesti());
console.log(pc.isvesti());

console.log(tv.kainaSuPVM);

let kainuSuma = tv.kainaSuPVM + pc.kainaSuPVM;