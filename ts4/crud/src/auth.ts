import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";

function authExec(method: string) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8`, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: (<HTMLInputElement>document.getElementById("login-email")).value,
        password: (<HTMLInputElement>document.getElementById("login-password")).value,
        returnSecureToken: true,
    })
})
.then((response)=> {
    return response.json();
})
.then((data)=> {
    // console.log(data);
    userInfo.email = data.email;
    userInfo.idToken = data.idToken;
    userInfo.loggedIn = true;
    (<HTMLElement>document.getElementById("data-section")).style.display = "block";
(<HTMLElement>document.getElementById("login-section")).style.display = "none";
loadData();
    })
}

export function loginExec() {
    authExec("signInWithPassword");
}

export function registerExec() {
    authExec("signUp");
}