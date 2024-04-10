// import {Darbuotojas} from "./Darbuotojas";

class Darbuotojas {
    _vardas ="";
    _pavarde = "";
    _atlyginimas = 0;

    constructor(vardas:string, pavarde: string, atlyginimas:number) {
        this._vardas = vardas;
        this._pavarde = pavarde;
        this._atlyginimas = atlyginimas;
    }

    get vardas() {
        return this._vardas; 
    }

    get pavarde() {
        return this._pavarde; 
    }

    get atlyginimas() {
        return this._atlyginimas; 
    }

    set vardas(v) {
        this._vardas = v;
    }

    set pavarde(p) {
        this._pavarde = p;
    }

    set atlyginimas(a) {
        this._atlyginimas = a;
    }

    gpm() {
        return this._atlyginimas*0.2;
    }

    psd() {
        return Number((this._atlyginimas * 0.0698).toFixed(2));
    }

    vsd() {
        return Number((this._atlyginimas * 0.1252).toFixed(2));
    }

}

const darbuotojai: Darbuotojas[] = [];

darbuotojai.push(new Darbuotojas("Petras", "Petraitis", 1500));
darbuotojai.push(new Darbuotojas("Ona", "Onaitė", 1600));
darbuotojai.push(new Darbuotojas("Jonas", "Jonaitis", 1850));

console.log(darbuotojai);

const sarasas = document.getElementById("list")!;
const vardasInput = <HTMLInputElement>document.getElementById("name");
const pavardeInput = <HTMLInputElement>document.getElementById("surname");
const atlyginimasInput = <HTMLInputElement>document.getElementById("salary");
const btn = document.getElementById("btn")!;

function spausdintiSarasa() {
    darbuotojai.forEach((d) => {
    const listDiv = document.createElement("div");
    listDiv.innerHTML = `${d.vardas} ${d.pavarde}, ${d.atlyginimas} EUR, ${d.gpm()} EUR gpm, ${d.psd()} EUR psd, ${d.vsd()} EUR vsd`;
    sarasas.appendChild(listDiv);

    })
}

spausdintiSarasa();

btn.onclick = () => {
const vardas = vardasInput.value;
const pavarde = pavardeInput.value;
const atlyginimas = atlyginimasInput.valueAsNumber;
darbuotojai.push(new Darbuotojas(vardas, pavarde, atlyginimas));

sarasas.innerHTML = "";

spausdintiSarasa();

}



