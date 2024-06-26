import { addRecipeSection } from "./app.js";
import { fetchRec } from "./fetchData.js";
import { loadData } from "./loadData.js";
let errors = [];
const nameInput = document.getElementById("recipe-name");
const timeInput = document.getElementById("recipe-time");
const descInput = document.getElementById("recipe-desc");
const statusDiv = document.getElementById("status");
export const addRecipe = () => {
    statusDiv.innerHTML = "";
    if (nameInput.value === "") {
        errors.push("Įveskite recepto pavadinimą");
    }
    if (timeInput.value === "") {
        errors.push("Įveskite gaminimo trukmę");
    }
    if (descInput.value === "") {
        errors.push("Įveskite recepto aprašymą");
    }
    if (errors.length > 0) {
        errors.forEach((e) => {
            const errorLi = document.createElement("li");
            errorLi.textContent = e;
            statusDiv.appendChild(errorLi);
        });
        errors = [];
    }
    else {
        const rec = {
            name: nameInput.value,
            time: timeInput.value,
            description: descInput.value,
        };
        fetchRec("recipes", "POST", rec)
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            loadData();
            addRecipeSection.style.display = "none";
            // statusDiv.textContent = "Receptas pridėtas sėkmingai!";
            nameInput.value = "";
            timeInput.value = "";
            descInput.value = "";
        });
    }
};
