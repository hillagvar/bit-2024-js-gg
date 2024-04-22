import { deleteReg } from "./deleteReg.js";
import { updateReg } from "./updateReg.js";
export const dataTable = document.getElementById("data-table");
export const editForm = document.getElementById("edit-form");
export const showData = (participantData) => {
    const dataTableBody = document.getElementById("data-table-body");
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
        tr.onclick = () => {
            dataTable.style.display = "none";
            editForm.style.display = "block";
            document.getElementById("name-edit").value = p.name;
            document.getElementById("surname-edit").value = p.surname;
            document.getElementById("birth-year-edit").value = p.birthYear.toString();
            if (p.gender === "male") {
                document.getElementById("male-edit").checked = true;
                document.getElementById("female-edit").checked = false;
            }
            else {
                document.getElementById("female-edit").checked = true;
                document.getElementById("male-edit").checked = false;
            }
            document.getElementById("email-edit").value = p.email;
            document.getElementById("phone-edit").value = p.phone;
            document.getElementById("update-reg").onclick = () => updateReg(p);
            document.getElementById("delete-reg").onclick = () => deleteReg(p);
        };
    });
};
