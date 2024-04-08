class Preke2 {
    #kaina = 0;
    // kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        this.#kaina = kaina;
        this.pavadinimas = pavadinimas;
        // this.kainaSuPVM = this.kaina * 1.21;
    }

    //Metodas (= funkcija, kuri yra klaseje)
    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.#kaina} EUR`;
    }

    //Graziname kaina su pvm
    kainaSuPVM1() {
        return this.#kaina * 1.21;
    }

    //Getteris
    get kainaSuPVM() {
        return this.#kaina * 1.21;
    }

    //Setteris
    set kaina(k) {
        if (k - this.#kaina < 10) {
            this.#kaina = k;
        } else {
            console.log("Negalima didinti kainos daugiau nei 10 EUR!");
        }

        //     keistiKaina(k) {
        //         if (k - this.#kaina < 10) {
        //             this.#kaina = k;
        //         } 
        //     }
        // }
    }

    //Getteris - kaina
    get kaina() {
        return this.#kaina;
    }

    // gautiKaina() {
    //     return this.#kaina;
    // }
}

const tv = new Preke2(100, "Televizorius");
const pc = new Preke2(600, "Kompiuteris");

console.log(tv.isvesti());

//pakeiteme kaina su setteriu
tv.kaina = 111;

// tv.keistiKaina(108);

console.log(tv.isvesti());

//gaunam kaina su getteriu
console.log(`TV kaina: ${tv.kaina}`);

// console.log(`TV kaina be getterio: ${tv.gautiKaina()}`);

console.log(pc.isvesti());

// console.log(tv.kainaSuPVM);

console.log(tv.kainaSuPVM1());
let kainuSuma1 = tv.kainaSuPVM1() + pc.kainaSuPVM1();
console.log(kainuSuma1);

console.log(tv.kainaSuPVM);
let kainuSuma = tv.kainaSuPVM + pc.kainaSuPVM;
console.log(kainuSuma);
