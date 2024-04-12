const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const calcBMI = () => {
    if (isNaN(heightInput.valueAsNumber) || isNaN(weightInput.valueAsNumber) || heightInput.valueAsNumber < 0 || weightInput.valueAsNumber < 0) {
        result.innerHTML = ` Neteisingai įvesti duomenys`;
    } else {
        const height = heightInput.valueAsNumber / 100;
        const weight = weightInput.valueAsNumber;
        const bmi = (weight / height ** 2).toFixed(2);
        result.innerHTML = ` ${bmi}`;
    }
}

btn.onclick = calcBMI;