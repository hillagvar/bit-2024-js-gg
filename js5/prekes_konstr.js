class Preke {
    // nebutina , jeigu pradiniu reiksmiu priskyrimas yra konstruktoriuj
    kaina = 0;
    kainaSuPvm = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //pradiniu reiksmu priskyrimas
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;
        //skaiciavimai ir kodas,kuris vykdomas kiekvieno obj sukurimo metu
        this.kainaSuPvm = this.kaina * 1.21;
    }
}

//nauju objektu sukurimas
const tv = new Preke(100, "televizorius");
const pc = new Preke(600, "kompiuteris");

// tv.kaina = 100;
// tv.kainaSuPvm = tv.kaina * 1.21;

console.log(tv);
console.log(pc);