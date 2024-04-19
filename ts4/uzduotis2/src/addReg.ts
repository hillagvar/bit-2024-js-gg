import { fetchRegistrations } from "./fetchData.js";
import { Participant } from "./participant.js";

let errors : string[] = [];

const nameInput = <HTMLInputElement>document.getElementById("name");
const surnameInput = <HTMLInputElement>document.getElementById("surname");
const birthYearInput = <HTMLInputElement>document.getElementById("birth-year");
const maleInput = <HTMLInputElement>document.getElementById("male");
const femaleInput = <HTMLInputElement>document.getElementById("female");
const emailInput = <HTMLInputElement>document.getElementById("email");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const statusDiv = <HTMLElement>document.getElementById("status");

export const addReg = () => {
    
    statusDiv.innerHTML = "";
    statusDiv.className = "";

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
        statusDiv.className = "alert alert-danger";

        errors.forEach((e) => {
        const errorLi = document.createElement("li");
        errorLi.textContent = e;
        statusDiv.appendChild(errorLi);
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

        fetchRegistrations("summercamp", "POST", reg)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        statusDiv.textContent = "Registracija sėkminga!";
        nameInput.value = "";
        surnameInput.value = "";
        birthYearInput.value = "";
        maleInput.checked = false;
        femaleInput.checked = false;
        emailInput.value = "";
        phoneInput.value = "";
    })

    }
}
        
