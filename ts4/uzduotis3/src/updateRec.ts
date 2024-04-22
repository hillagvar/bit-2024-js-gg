import { editRecipe, recipeListSection } from "./app.js";
import { fetchRec } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Recipe } from "./recipe.js";


export function updateRec(r: Recipe) {
    const updRec: Recipe = {
    name:  (<HTMLInputElement>document.getElementById("edit-recipe-name")).value,
    time: (<HTMLInputElement>document.getElementById("edit-recipe-time")).value,
    description:  (<HTMLInputElement>document.getElementById("edit-recipe-desc")).value,
    
    } 

    fetchRec(`recipes/${r.id}`, "PUT", updRec)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
    recipeListSection.style.display = "block";
    editRecipe.style.display = "none";
    loadData();
    });
}