const skaiciusXInput = <HTMLInputElement>document.getElementById("skaiciusx");
const skaiciusYInput = <HTMLInputElement>document.getElementById("skaiciusy");

const skaiciuotiBtn = document.getElementById("skaiciuoti")!;
const rezultatasDiv = document.getElementById("rezultatas")!;

class Skaiciai {
    constructor (public x: number, public y: number) {
    }

    public suma() : number {
        return this.x + this.y;
    }
}

const skaiciaiMas: Skaiciai[] = [];

// if (skaiciuotiBtn != null) {
// }

skaiciuotiBtn.onclick = () => {
    const x = skaiciusXInput.valueAsNumber;
    const y = skaiciusYInput.valueAsNumber;
    skaiciaiMas.push(new Skaiciai(x,y));

    rezultatasDiv.innerHTML = "";

    skaiciaiMas.forEach((s) => {
        const div = document.createElement("div");
        div.innerHTML = `${s.x} + ${s.y} = ${s.suma()}`;
        rezultatasDiv.appendChild(div);
    })
}


