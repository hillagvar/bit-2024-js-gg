import { Participant } from "./participant.js";

let errors : string[] = [];

const nameInput = <HTMLInputElement>document.getElementById("name");
const surnameInput = <HTMLInputElement>document.getElementById("surname");
const birthYearInput = <HTMLInputElement>document.getElementById("birthYear");
const maleInput = <HTMLInputElement>document.getElementById("male");
const femaleInput = <HTMLInputElement>document.getElementById("female");
const emailInput = <HTMLInputElement>document.getElementById("email");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");
const cardBody = <HTMLElement>document.getElementById("card-body");
const errorDiv = <HTMLElement>document.getElementById("errors");

addRegButton.onclick = () => {
    errorDiv.innerHTML = "";
    errorDiv.className = "";

    if (nameInput.value === "") {
        errors.push("Įveskite vardą");
    }
    if (surnameInput.value === "") {
        errors.push("Įveskite pavardę");
    }
    if (birthYearInput.value === "") {
        errors.push("Įveskite gimimo metus");
    }
    if (!maleInput.checked && !femaleInput.checked) {
        errors.push("Nurodykite lytį");
    }
    if (emailInput.value === "") {
        errors.push("Įveskite el.paštą");
    }
    if (phoneInput.value === "") {
        errors.push("Įveskite telefoną");
    }

    if (errors.length > 0) {
        errorDiv.className = "alert alert-danger";
        cardBody.appendChild(errorDiv);

        errors.forEach((e) => {
        const errorLi = document.createElement("li");
        errorLi.textContent = e;
        errorDiv.appendChild(errorLi);
        });

        errors = [];
    } else {
        const reg: Participant = {
        name: nameInput.value,
        surname: surnameInput.value,
        birthYear: birthYearInput.valueAsNumber,
        gender: maleInput.checked? maleInput.value : femaleInput.value,
        email: emailInput.value,
        phone: phoneInput.value
        }

        fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp.json", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reg)
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("pavyko!");
    })

    }
        
}
     

