import { addReg } from "./addReg.js";
import { loginExec, registerExec } from "./auth.js";
import { loadData } from "./loadData.js";
const addRegButton = document.getElementById("add-reg");
const loadDataButton = document.getElementById("load-data");
export const userInfo = {
    email: "",
    idToken: "",
    loggedIn: false,
};
document.getElementById("data-section").style.display = "none";
document.getElementById("login-section").style.display = "block";
document.getElementById("login-error").style.display = "none";
addRegButton.onclick = addReg;
loadDataButton.onclick = loadData;
document.getElementById("login").onclick = loginExec;
document.getElementById("register").onclick = registerExec;
