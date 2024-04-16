import { Participant } from "./participant.js";

let errors : string[] = [];

const nameInput = <HTMLInputElement>document.getElementById("name");
const surnameInput = <HTMLInputElement>document.getElementById("surname");
const birthYearInput = <HTMLInputElement>document.getElementById("birth-year");
const maleInput = <HTMLInputElement>document.getElementById("male");
const femaleInput = <HTMLInputElement>document.getElementById("female");
const emailInput = <HTMLInputElement>document.getElementById("email");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");
const statusDiv = <HTMLElement>document.getElementById("status");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");
const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

const dataTable = <HTMLElement>document.getElementById("data-table");
const editForm = <HTMLElement>document.getElementById("edit-form");

addRegButton.onclick = () => {
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
        statusDiv.textContent = "Registracija sėkminga!";
    })

    }
        
}

// addRegistrationButton.onclick=()=>{
//     let lytis=<HTMLInputElement|null>document.querySelector('input[name="sex"]:checked');
//     if (lytis!=null){
//         console.log(lytis.value);
//     }


     

