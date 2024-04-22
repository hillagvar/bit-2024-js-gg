import { addRecipe } from "./addRec.js";
import { login, register } from "./auth.js";
import { fetchRec } from "./fetchData.js";
const openFormBtn = document.getElementById("open-form");
const nameInput = document.getElementById("recipe-name");
const timeInput = document.getElementById("recipe-time");
const descInput = document.getElementById("recipe-desc");
const addRecipeBtn = document.getElementById("add-recipe");
const loginSection = document.getElementById("login-section");
export const addRecipeSection = document.getElementById("add-recipe-form");
export const recipeListSection = document.getElementById("recipe-list-section");
export const editRecipe = document.getElementById("edit-recipe");
export const userInfo = {
    email: "",
    idToken: "",
    loggedIn: false,
};
addRecipeBtn.onclick = () => {
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
        console.log("Įrašas pridėtas");
    });
};
recipeListSection.style.display = "none";
addRecipeSection.style.display = "none";
loginSection.style.display = "block";
editRecipe.style.display = "none";
document.getElementById("login").onclick = login;
document.getElementById("register").onclick = register;
openFormBtn.onclick = () => {
    addRecipeSection.style.display = "block";
    addRecipeBtn.onclick = addRecipe;
};
