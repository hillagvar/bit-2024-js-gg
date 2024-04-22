import { editRecipe, recipeListSection } from "./app.js";
import { fetchRec } from "./fetchData.js";
import { loadData } from "./loadData.js";
export function updateRec(r) {
    const updRec = {
        name: document.getElementById("edit-recipe-name").value,
        time: document.getElementById("edit-recipe-time").value,
        description: document.getElementById("edit-recipe-desc").value,
    };
    fetchRec(`recipes/${r.id}`, "PUT", updRec)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        recipeListSection.style.display = "block";
        editRecipe.style.display = "none";
        loadData();
    });
}
