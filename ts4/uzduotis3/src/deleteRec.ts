import { editRecipe, recipeListSection } from "./app.js";
import { fetchRec } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Recipe } from "./recipe.js";


export function deleteRec(r: Recipe) {
            
    fetchRec(`recipes/${r.id}`, "DELETE", null)
    .then((response)=>{
        return response.json();
        })
    .then((data)=>{
        recipeListSection.style.display = "block";
        editRecipe.style.display = "none";
        loadData();
        });
}