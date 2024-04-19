import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { dataTable, editForm } from "./showData.js";
export function deleteReg(p) {
    fetchRegistrations(`summercamp/${p.id}`, "DELETE", null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        dataTable.style.display = "block";
        editForm.style.display = "none";
        loadData();
    });
}
