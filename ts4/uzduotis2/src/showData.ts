import { Participant } from "./participant.js";
import { showFullData } from "./showFullData.js";

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
        tdBirthYear.innerHTML = p.birthYear.toString();

        const tdV = document.createElement("td");

        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdBirthYear);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick = () => showFullData(p);
    });
}