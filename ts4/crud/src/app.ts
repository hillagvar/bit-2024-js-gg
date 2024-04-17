import { Registration } from "./registration.js";
import { fetchRegistrations } from "./fetchData.js";
// import { showData } from "./showData.js";
import { loadData } from "./loadData.js";

const markInput = <HTMLInputElement>document.getElementById("mark");
const modelInput = <HTMLInputElement>document.getElementById("model");
const yearInput = <HTMLInputElement>document.getElementById("year");
const regNumberInput = <HTMLInputElement>document.getElementById("reg-number");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");

// const dataTableBody = <HTMLElement>document.getElementById("data-table-body");
// const dataTable = <HTMLElement>document.getElementById("data-table");
// const editForm = <HTMLElement>document.getElementById("edit-form");

// export const registrationData : Registration[] = [];

addRegButton.onclick = () => {

    const reg: Registration = {
        mark: markInput.value,
        model: modelInput.value,
        year: yearInput.valueAsNumber,
        regNumber: regNumberInput.value,
        phone: phoneInput.value
    }

    fetchRegistrations("registrations", "POST", reg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
    })
};


loadDataButton.onclick = loadData;
    




