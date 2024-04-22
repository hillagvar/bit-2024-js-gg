import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";
function auth(method) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("login-email").value,
            password: document.getElementById("login-password").value,
            returnSecureToken: true,
        })
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        if (typeof data.error !== "undefined") {
            console.log(data.error);
            if (data.error.message === "EMAIL_EXISTS") {
                throw new Error("Toks el.pašto adresas jau egzistuoja");
            }
            if (data.error.message === "WEAK_PASSWORD : Password should be at least 6 characters") {
                throw new Error("Per trumpas slaptažodis");
            }
            throw new Error("Vartotojo vardas arba slaptažodis neteisingas");
        }
        userInfo.email = data.email;
        userInfo.idToken = data.idToken;
        userInfo.loggedIn = true;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("recipe-list-section").style.display = "block";
        loadData();
    })
        .catch((err) => {
        let errorDiv = document.getElementById("login-error");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = err.message;
    });
}
export function login() {
    auth("signInWithPassword");
}
export function register() {
    auth("signUp");
}
