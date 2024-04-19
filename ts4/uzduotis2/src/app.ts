import { addReg } from "./addReg.js";
import { loginExec, registerExec } from "./auth.js";
import { loadData } from "./loadData.js";

const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");

export const userInfo = {
    email : "",
    idToken : "",
    loggedIn: false,
};

(<HTMLElement>document.getElementById("data-section")).style.display = "none";
(<HTMLElement>document.getElementById("login-section")).style.display = "block";
(<HTMLElement>document.getElementById("login-error")).style.display = "none";

addRegButton.onclick = addReg;
loadDataButton.onclick = loadData;
(<HTMLButtonElement>document.getElementById("login")).onclick = loginExec;
(<HTMLButtonElement>document.getElementById("register")).onclick = registerExec;


     

