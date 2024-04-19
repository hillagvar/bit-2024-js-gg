import { deleteReg } from "./deleteReg.js";
import { updateReg } from "./updateReg.js";
const dataTable = document.getElementById("data-table");
const editForm = document.getElementById("edit-form");
export function showFullData(p) {
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
}
