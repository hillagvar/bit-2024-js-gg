import { Registration } from "./registration.js";
import { fetchRegistrations } from "./fetchData.js";
// import { showData } from "./showData.js";
import { loadData } from "./loadData.js";
import { loginExec, registerExec } from "./auth.js";

const markInput = <HTMLInputElement>document.getElementById("mark");
const modelInput = <HTMLInputElement>document.getElementById("model");
const yearInput = <HTMLInputElement>document.getElementById("year");
const regNumberInput = <HTMLInputElement>document.getElementById("reg-number");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");

// const dataTableBody = <HTMLElement>document.getElementById("data-table-body");
// const dataTable = <HTMLElement>document.getElementById("data-table");
// const editForm = <HTMLElement>document.getElementById("edit-form");

// export const registrationData : Registration[] = [];

addRegButton.onclick = () => {

    const reg: Registration = {
        mark: markInput.value,
        model: modelInput.value,
        year: yearInput.valueAsNumber,
        regNumber: regNumberInput.value,
        phone: phoneInput.value
    }

    fetchRegistrations("registrations", "POST", reg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
    })
};

export const userInfo = {
    email : "",
    idToken : "",
    loggedIn: false,
};

(<HTMLElement>document.getElementById("data-section")).style.display = "none";
(<HTMLElement>document.getElementById("login-section")).style.display = "block";


loadDataButton.onclick = loadData;

/*
(<HTMLButtonElement>document.getElementById("login")).onclick = () => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsyx3IxM3ZS9hFvltczhwSzrw5agGVTz8", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "hilla.gvar@gmail.com",
        password: "zuikioUodega",
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

*/

(<HTMLButtonElement>document.getElementById("login")).onclick = loginExec;
(<HTMLButtonElement>document.getElementById("register")).onclick = registerExec;





    




