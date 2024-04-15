import { Registration } from "./registration.js";

const markInput = <HTMLInputElement>document.getElementById("mark");
const modelInput = <HTMLInputElement>document.getElementById("model");
const yearInput = <HTMLInputElement>document.getElementById("year");
const regNumberInput = <HTMLInputElement>document.getElementById("reg-number");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");

addRegButton.onclick = () => {
    const reg: Registration = {
        mark: markInput.value,
        model: modelInput.value,
        year: yearInput.valueAsNumber,
        regNumber: regNumberInput.value,
        phone: phoneInput.value
    }
     fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/registrations.json",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reg)
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
    })
};



