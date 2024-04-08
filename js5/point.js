class Point {

    //privatus
    #x = 0;
    #y = 0;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    //getteriai ir setteriai
    set x(x) {
        this.#x = x;
    }

    get x() {
        return this.#x;
    }

    set y(y) {
        this.#y = y;
    }

    get y() {
        return this.#y;
    }

    //metodas suskaiciuoti atstumui iki koord pradzios
    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2);
    }

    //metodas tasko pastumimui
    translate(dx, dy) {
        this.#x += dx;
        this.#y += dy;
    }

    //metodas tasko isvedimui
    print() {
        //galima ir be groteliu, tada kreipsis i getteri
        return `[${this.#x}, ${this.#y}]`;
    }

    //metodas atstumo apskaiciavimui
    distance(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);

    }

}

const a = new Point(3, 5);
console.log(a.print());

console.log(`Atstumas iki koordinaciu pradzios tasko: ${a.distanceFromOrigin()}`);

const b = new Point(0, 5);

console.log(b.print());

console.log(`Atstumas iki koordinaciu pradzios tasko: ${b.distanceFromOrigin()}`);

b.translate(2, 0);

console.log(b.print());

console.log(`Atstumas nuo a iki b: ${a.distance(b)}`);