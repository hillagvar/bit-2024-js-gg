

/*
class Zmogus {
    vardas = "";
    amzius = 0;
    teiginys;

    atspausdinti() {
        console.log(this.vardas);
        this.teiginys();
    }

}

const jonas = new Zmogus();
jonas.vardas = "Jonas";
jonas.amzius = 25;
jonas.teiginys = () => {
    console.log("Labas, as Jonas");
    console.log("Ka veiki");
}

jonas.atspausdinti();

const petras = new Zmogus();
petras.vardas = "Petras";
petras.amzius = 30;
petras.teiginys = () => {
    for (let i = 0; i < 10; i++) {
        console.log("Labas " + i);
    }
}

petras.atspausdinti();

*/


//pasiimame objekta
const ivedimas = document.getElementById("divas");
const mygtukas = document.createElement("button");
mygtukas.textContent = "Spausk!";

ivedimas.appendChild(mygtukas);

// ivedimas.onclick = () => {
//     console.log("paspaude");
// }

//keiciame obj atributa
// ivedimas.placeholder = "naujas placeholder";

// console.log(typeof ivedimas);

//HTMLElement


