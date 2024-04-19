import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { dataTable, editForm } from "./showData.js";
export function updateReg(p) {
    const updReg = {
        name: document.getElementById("name-edit").value,
        surname: document.getElementById("surname-edit").value,
        birthYear: document.getElementById("birth-year-edit").valueAsNumber,
        gender: document.querySelector('input[name="gender-edit"]:checked').value,
        email: document.getElementById("email-edit").value,
        phone: document.getElementById("phone-edit").value
    };
    fetchRegistrations(`summercamp/${p.id}`, "PUT", updReg)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        dataTable.style.display = "block";
        editForm.style.display = "none";
        loadData();
    });
}
