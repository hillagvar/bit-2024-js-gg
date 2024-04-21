import { deleteReg } from "./deleteReg.js";
import { Participant } from "./participant.js";
import { dataTable, editForm } from "./showData.js";
import { updateReg } from "./updateReg.js";

export function showFullData(p : Participant) {

    dataTable.style.display = "none";
    editForm.style.display = "block";

    (<HTMLInputElement>document.getElementById("name-edit")).value = p.name;
    (<HTMLInputElement>document.getElementById("surname-edit")).value = p.surname;
    (<HTMLInputElement>document.getElementById("birth-year-edit")).value = p.birthYear.toString();
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