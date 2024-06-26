import { fetchRegistrations } from "./fetchData.js";
let errors = [];
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const birthYearInput = document.getElementById("birth-year");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const statusDiv = document.getElementById("status");
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
    }
    else {
        const reg = {
            name: nameInput.value,
            surname: surnameInput.value,
            birthYear: birthYearInput.valueAsNumber,
            gender: maleInput.checked ? maleInput.value : femaleInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
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
        });
    }
};
