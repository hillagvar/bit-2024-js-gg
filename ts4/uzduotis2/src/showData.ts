import { deleteReg } from "./deleteReg.js";
import { Participant } from "./participant.js";
import { updateReg } from "./updateReg.js";

export const dataTable = <HTMLElement>document.getElementById("data-table");
export const editForm = <HTMLElement>document.getElementById("edit-form");

export const showData = (participantData: Participant[]) => {

const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

    dataTableBody.innerHTML = "";
    participantData.forEach((p) => {

        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.innerHTML = p.name;

        const tdSurname = document.createElement("td");
        tdSurname.innerHTML = p.surname;

        const tdBirthYear = document.createElement("td");
        tdBirthYear.innerHTML = `${p.birthYear}`;

        const tdV = document.createElement("td");

        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdBirthYear);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick = () => {

    dataTable.style.display = "none";
    editForm.style.display = "block";

    (<HTMLInputElement>document.getElementById("name-edit")).value = p.name;
    (<HTMLInputElement>document.getElementById("surname-edit")).value = p.surname;
    (<HTMLInputElement>document.getElementById("birth-year-edit")).value = `${p.birthYear}`;
    if (p.gender === "male") {
        (<HTMLInputElement>document.getElementById("male-edit")).checked = true;
        (<HTMLInputElement>document.getElementById("female-edit")).checked = false;
    } else {
        (<HTMLInputElement>document.getElementById("female-edit")).checked = true;
        (<HTMLInputElement>document.getElementById("male-edit")).checked = false;
            }
    (<HTMLInputElement>document.getElementById("email-edit")).value = p.email;
    (<HTMLInputElement>document.getElementById("phone-edit")).value = p.phone;

    (<HTMLButtonElement>document.getElementById("update-reg")).onclick = () => updateReg(p);

    (<HTMLButtonElement>document.getElementById("delete-reg")).onclick = () => deleteReg(p);

}
    });
}