let x: number;
x = 5;

let y:number=5;

let z=5;

let a;

a = 8;
console.log(x.toFixed(2));

//sukuriam savo tipa
type Point = {
    x:number,
    y:number,
}

let x1:Point = {
    x:5,
    y:3
};

console.log(x1.x);

type Darbuotojas = {
    name:string,
    salary:number,
}

let darbuotojas1:Darbuotojas = {
    name:"Jonas",
    salary:1200,
}

let darbuotojas2:Darbuotojas = {
    name:"Petras",
    salary:1500,
}

console.log(darbuotojas1.name);