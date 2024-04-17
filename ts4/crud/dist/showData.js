import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
export const showData = (registrationData) => {
    const dataTableBody = document.getElementById("data-table-body");
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
            document.getElementById("data-table").style.display = "none";
            document.getElementById("edit-form").style.display = "block";
            document.getElementById("mark-edit").value = reg.mark;
            document.getElementById("model-edit").value = reg.model;
            document.getElementById("year-edit").value = reg.year.toString();
            document.getElementById("reg-number-edit").value = reg.regNumber;
            document.getElementById("phone-edit").value = reg.phone;
            document.getElementById("update-reg").onclick = () => {
                const updReg = {
                    mark: document.getElementById("mark-edit").value,
                    model: document.getElementById("model-edit").value,
                    year: document.getElementById("year-edit").valueAsNumber,
                    regNumber: document.getElementById("reg-number-edit").value,
                    phone: document.getElementById("phone-edit").value
                };
                fetchRegistrations(`registrations/${reg.id}`, "PUT", updReg)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    document.getElementById("data-table").style.display = "block";
                    document.getElementById("edit-form").style.display = "none";
                    loadData();
                });
            };
            document.getElementById("delete-reg").onclick = () => {
                fetchRegistrations(`registrations/${reg.id}`, "DELETE", null)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    document.getElementById("data-table").style.display = "block";
                    document.getElementById("edit-form").style.display = "none";
                    loadData();
                });
            };
        };
    });
};
