import { addRecipe } from "./addRec.js";
import { login, register } from "./auth.js";
import { fetchRec } from "./fetchData.js";
import { Recipe } from "./recipe.js";

const openFormBtn = <HTMLButtonElement>document.getElementById("open-form");
const nameInput = <HTMLInputElement>document.getElementById("recipe-name");
const timeInput = <HTMLInputElement>document.getElementById("recipe-time");
const descInput = <HTMLInputElement>document.getElementById("recipe-desc");
const addRecipeBtn = <HTMLButtonElement>document.getElementById("add-recipe");
const loginSection = <HTMLElement>document.getElementById("login-section");
const addRecipeSection = <HTMLElement>document.getElementById("add-recipe-form");
const recipeListSection = <HTMLElement>document.getElementById("recipe-list-section");

export const userInfo = {
    email : "",
    idToken : "",
    loggedIn: false,
};

addRecipeBtn.onclick = () => {

    const rec: Recipe = {
        name: nameInput.value,
        time: timeInput.value,
        description: descInput.value,
    }

    fetchRec("recipes", "POST", rec)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
    })

}

recipeListSection.style.display = "none";
addRecipeSection.style.display = "none";
loginSection.style.display = "block";

(<HTMLButtonElement>document.getElementById("login")).onclick = login;
(<HTMLButtonElement>document.getElementById("register")).onclick = register;

openFormBtn.onclick = () => {
    addRecipeSection.style.display = "block";

    addRecipeBtn.onclick = addRecipe;

}
