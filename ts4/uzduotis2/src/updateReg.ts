import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Participant } from "./participant.js";
import { dataTable, editForm } from "./showData.js";

export function updateReg(p: Participant) {
    const updReg: Participant = {
    name:  (<HTMLInputElement>document.getElementById("name-edit")).value,
    surname: (<HTMLInputElement>document.getElementById("surname-edit")).value,
    birthYear:  (<HTMLInputElement>document.getElementById("birth-year-edit")).valueAsNumber,
    gender: (<HTMLInputElement>document.querySelector('input[name="gender-edit"]:checked')).value,
    email:  (<HTMLInputElement>document.getElementById("email-edit")).value,
    phone: (<HTMLInputElement>document.getElementById("phone-edit")).value
    } 

    fetchRegistrations(`summercamp/${p.id}`, "PUT", updReg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
    dataTable.style.display = "block";
    editForm.style.display = "none";
    loadData();
    });
}