const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const result = document.getElementById("res");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    const sum = x + y;
    result.innerHTML = `Skaičių suma: ${sum}`;
}

btn.onclick = skaiciuoti;