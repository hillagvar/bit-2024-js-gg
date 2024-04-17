import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Registration } from "./registration.js";

export const showData = (registrationData: Registration[]) => {
    const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {

        /*
        dataTableBody.innerHTML+=`
        <tr>
            <td>${reg.mark}</td>
            <td>${reg.model}</td>
            <td>${reg.regNumber}</td>
            <td></td>
        </tr>
        `;
        */ 

        const tr = document.createElement("tr");

        const tdMark = document.createElement("td");
        tdMark.innerHTML = reg.mark;

        const tdModel = document.createElement("td");
        tdModel.innerHTML = reg.model;

        const tdRegNumber = document.createElement("td");
        tdRegNumber.innerHTML = reg.regNumber;

        const tdV = document.createElement("td");

        tr.appendChild(tdMark);
        tr.appendChild(tdModel);
        tr.appendChild(tdRegNumber);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick = () => {
        (<HTMLElement>document.getElementById("data-table")).style.display = "none";
        (<HTMLElement>document.getElementById("edit-form")).style.display = "block";
        (<HTMLInputElement>document.getElementById("mark-edit")).value = reg.mark;
        (<HTMLInputElement>document.getElementById("model-edit")).value = reg.model;
        (<HTMLInputElement>document.getElementById("year-edit")).value = reg.year.toString();
        (<HTMLInputElement>document.getElementById("reg-number-edit")).value = reg.regNumber;
        (<HTMLInputElement>document.getElementById("phone-edit")).value = reg.phone;
        (<HTMLButtonElement>document.getElementById("update-reg")).onclick = () => {
            const updReg: Registration = {
                mark:  (<HTMLInputElement>document.getElementById("mark-edit")).value,
                model: (<HTMLInputElement>document.getElementById("model-edit")).value,
                year:  (<HTMLInputElement>document.getElementById("year-edit")).valueAsNumber,
                regNumber:  (<HTMLInputElement>document.getElementById("reg-number-edit")).value,
                phone: (<HTMLInputElement>document.getElementById("phone-edit")).value
                } 

                fetchRegistrations(`registrations/${reg.id}`, "PUT", updReg)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    (<HTMLElement>document.getElementById("data-table")).style.display = "block";
                    (<HTMLElement>document.getElementById("edit-form")).style.display = "none";
                    loadData();
                });
            }
        }
    });
}