const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");
const resultDiv = document.getElementById("resultDiv");

function determineColour(bmi) {
    if (bmi < 18.5) {
        return "#AED8D0";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "#9BE756";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "#FDD805";
    } else if (bmi >= 30 && bmi <= 34.9) {
        return "#F68C31";
    } else if (bmi >= 35) {
        return "#F95353";
    }
}

const calcBMI = () => {
    const height = heightInput.valueAsNumber / 100;
    const weight = weightInput.valueAsNumber;

    if (isNaN(height) || isNaN(weight) || height < 0 || weight < 0) {
        result.innerHTML = " Neteisingai įvesti duomenys";
        result.style.color = "#000000";
    } else {
        const bmi = (weight / height ** 2).toFixed(1);
        result.innerHTML = ` ${bmi}`;
        result.style.color = determineColour(bmi);
    }
}

const reset = () => {
    heightInput.value = "";
    weightInput.value = "";
    result.innerHTML = "";
}


btn.onclick = calcBMI;
resetBtn.onclick = reset;


// function setResultColours(colour) {
//     document.body.style.backgroundColor = colour;
//     result.style.color = colour;
// }



