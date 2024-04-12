const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const result = document.getElementById("res");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    const sum = x + y;
    let alertClass = "";

    //stilizuotas isvedimas
    if (sum > 100) {
        alertClass = "alert-danger";
    } else {
        alertClass = "alert-success";
    }

    result.innerHTML = `<div class="alert ${alertClass}" role="alert">
            Skaičių suma: ${sum}`;

    // formos isvalymas po apskaiciavimo
    xInput.value = "";
    yInput.value = "";
}

btn.onclick = skaiciuoti;