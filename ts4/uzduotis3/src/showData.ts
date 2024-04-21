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
        tdName.setAttribute("class", "recipe-time");
        tdName.innerHTML = r.time;

        const tdEditBtn = document.createElement("td");
        tdName.setAttribute("class", "btn-small orange darken-2");
        tdName.setAttribute("id", "edit-recipe");
        tdName.innerHTML = "Redaguoti";

        tr.appendChild(tdName);
        tr.appendChild(tdTime);
        tr.appendChild(tdEditBtn);

        dataTableBody.appendChild(tr);

    });
}