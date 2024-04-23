import { addRecipeSection, editRecipe, loginSection, recipeListSection, userInfo } from "./app.js";
import { loadData } from "./loadData.js";
import { User } from "./user.js";

function auth(method: string) {
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
    saveUser();
    hideLogin();
    loadData();
    })
    .catch((err: Error) => {
        let errorDiv = (<HTMLElement>document.getElementById("login-error"));
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

export function saveUser() {
    localStorage.setItem("userInfo", JSON.stringify (userInfo));
}

export function loadUser() {
    const userStr = localStorage.getItem("userInfo");
    if (userStr !== null) {
        const user: User = JSON.parse(userStr);
        userInfo.email = user.email;
        userInfo.idToken = user.idToken;
        userInfo.loggedIn = user.loggedIn;
        loadData();
        hideLogin();
    } 
}

export function showLogin() {
recipeListSection.style.display = "none";
addRecipeSection.style.display = "none";
editRecipe.style.display = "none";
(<HTMLElement>document.getElementById("change-account-form")).style.display = "none";
(<HTMLElement>document.getElementById("navigation")).style.display = "none";
loginSection.style.display = "block";
}

export function hideLogin() {
recipeListSection.style.display = "block";
(<HTMLElement>document.getElementById("navigation")).style.display = "block";
loginSection.style.display = "none";
}

export function logOut() {
    localStorage.removeItem("userInfo");
    (<HTMLInputElement>document.getElementById("login-email")).value = "",
    (<HTMLInputElement>document.getElementById("login-password")).value = "";

    showLogin();
}
 
export function deleteAccount() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8`,{
        method:"POST",
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
        },
        
        body: JSON.stringify({
            idToken:userInfo.idToken
        })
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        logOut();
    })
}

export function changeEmail() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8`,{
        method:"POST",
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
        },
        
        body: JSON.stringify({
            idToken:userInfo.idToken,
            email: (<HTMLInputElement>document.getElementById("new-email")).value,
            returnSecureToken: true,
        })
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        (<HTMLInputElement>document.getElementById("new-email")).value = "";
        
        userInfo.email = data.email;
        saveUser();

    })

}

(<HTMLElement>document.getElementById("log-out")).onclick = logOut;
(<HTMLElement>document.getElementById("delete-account")).onclick = deleteAccount;

(<HTMLElement>document.getElementById("change-account")).onclick = () => {
recipeListSection.style.display = "none";
addRecipeSection.style.display = "none";
editRecipe.style.display = "none";
(<HTMLElement>document.getElementById("change-account-form")).style.display = "block";
}

(<HTMLElement>document.getElementById("change-email")).onclick = changeEmail;