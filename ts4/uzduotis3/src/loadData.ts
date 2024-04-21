import { fetchRec } from "./fetchData.js";
import { Recipe } from "./recipe.js";
import { showData } from "./showData.js";

export let recipeData : Recipe[] = [];

export const loadData = () => {

    fetchRec("recipes", "GET", null)
    .then((response) => {
        return response.json();
    })
    .then((data: {[key: string]: Recipe}) => {

        Object.keys(data).forEach((k) => {
            data[k].id = k;
           recipeData.push(data[k]);
        });

        showData(recipeData);
        
    });
}