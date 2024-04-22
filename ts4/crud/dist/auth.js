import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";
function authExec(method) {
    //url prisijungimui/registracijai, priklausomai nuo to, koks atsiustas method kintamasis
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //abiem atvejais siunciame el pasta ir passworda is formos
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
            console.log(data);
            //patikriname ar grazintame atsakyme (data objekte) yra error atributas
            //jei taip, tuomet nutraukiame vykdyma ir ismetame klaida, kuri patenka i catch metoda (apacioje)
            if (typeof data.error !== "undefined") {
                if (data.error.message === "EMAIL_EXISTS") {
                    throw new Error("Toks el.pašto adresas jau egzistuoja");
                }
                if (data.error.message === "WEAK_PASSWORD : Password should be at least 6 characters") {
                    throw new Error("Per trumpas slaptažodis");
                }
                throw new Error("Vartotojo vardas arba slaptažodis neteisingas");
            }
            //jei klaidos nebuvo, priskiriame vartotojo duomenis kintamajam userInfo
            userInfo.email = data.email;
            //priskiriame ir token
            userInfo.idToken = data.idToken;
            userInfo.loggedIn = true;
            //paslepiame login sekcija ir parodome duomenu sekcija
            document.getElementById("data-section").style.display = "block";
            document.getElementById("login-section").style.display = "none";
            //uzkraunam duomenis
            loadData();
        })
        .catch((err) => {
            let errorDiv = document.getElementById("login-error");
            errorDiv.style.display = "block";
            errorDiv.innerHTML = err.message;
        });
}
//eksportuojam prisijungimo ir registracijos funkcijas, kurios abi iskviecia authExec funkcija su skirtingais metodais
export function loginExec() {
    authExec("signInWithPassword");
}
export function registerExec() {
    authExec("signUp");
}
