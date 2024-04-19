import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Participant } from "./participant.js";
import { dataTable, editForm } from "./showData.js";

export function deleteReg(p: Participant) {
            
    fetchRegistrations(`summercamp/${p.id}`, "DELETE", null)
    .then((response)=>{
        return response.json();
        })
    .then((data)=>{
        dataTable.style.display = "block";
        editForm.style.display = "none";
        loadData();
        });
}