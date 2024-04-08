class Point {
    #x = 0;
    #y = 0;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

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


    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2);
    }

    translate(dx, dy) {
        this.#x += dx;
        this.#y += dy;
    }
}

const a = new Point(3, 5);
console.log(`[${a.x}, ${a.y}]`);

console.log(`Atstumas iki koordinaciu pradzios tasko: ${a.distanceFromOrigin()}`);

const b = new Point(0, 10);

console.log(`[${b.x}, ${b.y}]`);

console.log(`Atstumas iki koordinaciu pradzios tasko: ${b.distanceFromOrigin()}`);

b.translate(2, 0);

console.log(`[${b.x}, ${b.y}]`);