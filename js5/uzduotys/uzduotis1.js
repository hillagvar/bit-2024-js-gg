// Užduotis „Trupmenos“

// Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis
// Sukurkime klasei setter‘ius ir getter‘ius
// Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
// Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.

// Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.

// Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).Nepamirškite jog pridedant skaičių reikia subendravardiklinti).

// Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.

// Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).

// Papildomai padarykite:
// Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną.Metodą padarykime matomą tik pačiam objektui(jis turi būti nepasiekiamas iš išorės).
// Padarykime jog po kiekvieno seterio ir po pridėjimo metodų įvykdymo būtų iškviečiamas prastinimo metodas.

class Trupmena {
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    constructor(a, b, c) {
        this.#sveikojiDalis = a;
        this.#skaitiklis = b;
        this.#daliklis = c;
        this.#prastinti();
    }

    // setteriai ir getteriai

    set sveikojiDalis(a) {
        this.#sveikojiDalis = a;
        this.#prastinti();
    }

    get sveikojiDalis() {
        return this.#sveikojiDalis;
    }

    set skaitiklis(b) {
        this.#skaitiklis = b;
        this.#prastinti();
    }

    get skaitiklis() {
        return this.#skaitiklis;
    }

    set daliklis(c) {
        this.#daliklis = c;
        this.#prastinti();
    }

    get daliklis() {
        return this.#daliklis;
    }

    // metodai

    toString() {
        return `${this.#sveikojiDalis} ${this.#skaitiklis}/${this.#daliklis}`;
    }

    pridetiInt(sveikasisSkaicius) {
        this.#sveikojiDalis += sveikasisSkaicius;
        this.#prastinti();
    }

    prideti(sveikasisSkaicius, skaitiklis, vardiklis) {
        this.#sveikojiDalis += sveikasisSkaicius;
        this.#skaitiklis = this.#skaitiklis * vardiklis + this.#daliklis * skaitiklis;
        this.#daliklis = this.#daliklis * vardiklis;
        if (this.#skaitiklis >= this.#daliklis) {
            this.#sveikojiDalis += (this.#skaitiklis - this.#skaitiklis % this.#daliklis) / this.#daliklis;
            this.#skaitiklis = this.#skaitiklis % this.#daliklis;
        }

        if (this.#skaitiklis === 0) {
            this.#daliklis = 0;
        }
        this.#prastinti();
    }

    pridetiTrupmena(x) {
        this.prideti(x.sveikojiDalis, x.skaitiklis, x.daliklis);
    }

    #prastinti() {
        let didziausiasDaliklis = 1;
        for (let i = 2; i <= this.#skaitiklis; i++) {
            if (this.#daliklis % i === 0 && this.#skaitiklis % i === 0) {
                didziausiasDaliklis = i;
            }
        }
        this.#skaitiklis = this.#skaitiklis / didziausiasDaliklis;
        this.#daliklis = this.#daliklis / didziausiasDaliklis;
    }
}

const trupmena1 = new Trupmena(1, 2, 3);

console.log(trupmena1.sveikojiDalis);

console.log(trupmena1.toString());

const trupmena2 = new Trupmena;

console.log(trupmena2);

trupmena2.sveikojiDalis = 1;
trupmena2.skaitiklis = 3;
trupmena2.daliklis = 5;

console.log(trupmena2.toString());

trupmena1.pridetiInt(3);

console.log(trupmena1.toString());

// console.log(trupmena2.prideti(1, 2, 5));

// console.log(trupmena2.toString());

const trupmena3 = new Trupmena(1, 10, 3);

trupmena2.pridetiTrupmena(trupmena3);

console.log(trupmena2.toString());


