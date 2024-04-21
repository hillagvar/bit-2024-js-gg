import { Recipe } from "./recipe.js";

export const showData = (recipeData: Recipe[]) => {

const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

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
        tdEditBtn.setAttribute("id", "edit-recipe");
        tdEditBtn.innerHTML = "Redaguoti";

        tr.appendChild(tdName);
        tr.appendChild(tdTime);
        tr.appendChild(tdEditBtn);

        dataTableBody.appendChild(tr);

    });
}