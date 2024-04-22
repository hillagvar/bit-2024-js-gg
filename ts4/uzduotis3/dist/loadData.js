import { fetchRec } from "./fetchData.js";
import { showData } from "./showData.js";
export let recipeData;
export const loadData = () => {
    fetchRec("recipes", "GET", null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        recipeData = [];
        Object.keys(data).forEach((k) => {
            data[k].id = k;
            recipeData.push(data[k]);
        });
        showData(recipeData);
    });
};
