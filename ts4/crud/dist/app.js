import { fetchRegistrations } from "./fetchData.js";
// import { showData } from "./showData.js";
import { loadData } from "./loadData.js";
const markInput = document.getElementById("mark");
const modelInput = document.getElementById("model");
const yearInput = document.getElementById("year");
const regNumberInput = document.getElementById("reg-number");
const phoneInput = document.getElementById("phone");
const addRegButton = document.getElementById("add-reg");
const loadDataButton = document.getElementById("load-data");
// const dataTableBody = <HTMLElement>document.getElementById("data-table-body");
// const dataTable = <HTMLElement>document.getElementById("data-table");
// const editForm = <HTMLElement>document.getElementById("edit-form");
// export const registrationData : Registration[] = [];
addRegButton.onclick = () => {
    const reg = {
        mark: markInput.value,
        model: modelInput.value,
        year: yearInput.valueAsNumber,
        regNumber: regNumberInput.value,
        phone: phoneInput.value
    };
    fetchRegistrations("registrations", "POST", reg)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Įrašas pridėtas");
    });
};
loadDataButton.onclick = loadData;
loadData();
