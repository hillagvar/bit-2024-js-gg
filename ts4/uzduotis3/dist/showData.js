import { addRecipeSection, editRecipe, recipeListSection } from "./app.js";
import { deleteRec } from "./deleteRec.js";
import { updateRec } from "./updateRec.js";
export const showData = (recipeData) => {
    const dataTableBody = document.getElementById("data-table-body");
    dataTableBody.innerHTML = "";
    recipeData.forEach((r) => {
        const tr = document.createElement("tr");
        tr.setAttribute("id", "recipe-row");
        tr.setAttribute("class", "valign-wrapper");
        const tdName = document.createElement("td");
        tdName.setAttribute("class", "recipe-name");
        tdName.innerHTML = r.name;
        const tdTime = document.createElement("td");
        tdTime.setAttribute("class", "recipe-time");
        tdTime.innerHTML = r.time;
        const tdEditBtn = document.createElement("td");
        tdEditBtn.setAttribute("class", "btn-small orange darken-2");
        tdEditBtn.setAttribute("id", "edit-recipe-btn");
        tdEditBtn.innerHTML = "Redaguoti";
        tr.appendChild(tdName);
        tr.appendChild(tdTime);
        tr.appendChild(tdEditBtn);
        dataTableBody.appendChild(tr);
        tr.onclick = () => {
            recipeListSection.style.display = "none";
            addRecipeSection.style.display = "none";
            editRecipe.style.display = "block";
            document.getElementById("edit-recipe-name").value = r.name;
            document.getElementById("edit-recipe-time").value = r.time;
            document.getElementById("edit-recipe-desc").value = r.description;
            document.getElementById("update-recipe").onclick = () => updateRec(r);
            document.getElementById("delete-recipe").onclick = () => deleteRec(r);
            document.getElementById("go-back").onclick = () => {
                recipeListSection.style.display = "block";
                editRecipe.style.display = "none";
            };
        };
    });
};
