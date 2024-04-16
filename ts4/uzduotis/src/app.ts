import { Participant } from "./participant.js";

let errors : string[] = [];

const nameInput = <HTMLInputElement>document.getElementById("name");
const surnameInput = <HTMLInputElement>document.getElementById("surname");
const birthYearInput = <HTMLInputElement>document.getElementById("birth-year");
const maleInput = <HTMLInputElement>document.getElementById("male");
const femaleInput = <HTMLInputElement>document.getElementById("female");
const emailInput = <HTMLInputElement>document.getElementById("email");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");
const statusDiv = <HTMLElement>document.getElementById("status");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");
const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

const dataTable = <HTMLElement>document.getElementById("data-table");
const editForm = <HTMLElement>document.getElementById("edit-form");

let participantData : Participant[];

addRegButton.onclick = () => {
    statusDiv.innerHTML = "";
    statusDiv.className = "";

    if (nameInput.value === "") {
        errors.push("Įveskite vardą");
    }
    if (surnameInput.value === "") {
        errors.push("Įveskite pavardę");
    }
    if (birthYearInput.value === "") {
        errors.push("Įveskite gimimo metus");
    }
    if (!maleInput.checked && !femaleInput.checked) {
        errors.push("Nurodykite lytį");
    }
    if (emailInput.value === "") {
        errors.push("Įveskite el.paštą");
    }
    if (phoneInput.value === "") {
        errors.push("Įveskite telefoną");
    }

    if (errors.length > 0) {
        statusDiv.className = "alert alert-danger";

        errors.forEach((e) => {
        const errorLi = document.createElement("li");
        errorLi.textContent = e;
        statusDiv.appendChild(errorLi);
        });

        errors = [];
    } else {
        const reg: Participant = {
        name: nameInput.value,
        surname: surnameInput.value,
        birthYear: birthYearInput.valueAsNumber,
        gender: maleInput.checked? maleInput.value : femaleInput.value,
        email: emailInput.value,
        phone: phoneInput.value
        }

        fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp.json", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reg)
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        statusDiv.textContent = "Registracija sėkminga!";
        nameInput.value = "";
        surnameInput.value = "";
        birthYearInput.value = "";
        maleInput.checked = false;
        femaleInput.checked = false;
        emailInput.value = "";
        phoneInput.value = "";
    })

    }
        
}

// addRegistrationButton.onclick=()=>{
//     let lytis=<HTMLInputElement|null>document.querySelector('input[name="sex"]:checked');
//     if (lytis!=null){
//         console.log(lytis.value);
//     }


const showData = () => {
    dataTableBody.innerHTML = "";
    participantData.forEach((p) => {

        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.innerHTML = p.name;

        const tdSurname = document.createElement("td");
        tdSurname.innerHTML = p.surname;

        const tdBirthYear = document.createElement("td");
        tdBirthYear.innerHTML = p.birthYear.toString();

        const tdV = document.createElement("td");

        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdBirthYear);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick = () => {
            dataTable.style.display = "none";
            editForm.style.display = "block";
            (<HTMLInputElement>document.getElementById("name-edit")).value = p.name;
            (<HTMLInputElement>document.getElementById("surname-edit")).value = p.surname;
            (<HTMLInputElement>document.getElementById("birth-year-edit")).value = p.birthYear.toString();
            if (p.gender === "male") {
                (<HTMLInputElement>document.getElementById("male-edit")).checked = true;
                console.log('male')
            } else {
                (<HTMLInputElement>document.getElementById("female-edit")).checked = true;
            }
            (<HTMLInputElement>document.getElementById("email-edit")).value = p.email;
            (<HTMLInputElement>document.getElementById("phone-edit")).value = p.phone;
            (<HTMLButtonElement>document.getElementById("update-reg")).onclick = () => {
            const updReg: Participant = {
                name:  (<HTMLInputElement>document.getElementById("name-edit")).value,
                surname: (<HTMLInputElement>document.getElementById("surname-edit")).value,
                birthYear:  (<HTMLInputElement>document.getElementById("birth-year-edit")).valueAsNumber,
                gender: (<HTMLInputElement>document.getElementById("male-edit")).checked ? (<HTMLInputElement>document.getElementById("male-edit")).value : (<HTMLInputElement>document.getElementById("female-edit")).value,
                email:  (<HTMLInputElement>document.getElementById("email-edit")).value,
                phone: (<HTMLInputElement>document.getElementById("phone-edit")).value
                } 

                fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp/${p.id}.json`,{
                method:"PUT",
                headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                },
                body:JSON.stringify(updReg)
                })
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    dataTable.style.display = "block";
                    editForm.style.display = "none";
                    loadData();
                });
            }
        }
    });
}

const loadData = () => {

    fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp.json",{
    method: "GET",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
        }
    }) 
    .then((response) => {
        return response.json();
    })
    .then((data: {[key: string]: Participant}) => {

        participantData = [];

        Object.keys(data).forEach((k) => {
            data[k].id = k;
           participantData.push(data[k]);
        });

        showData();
        
    });
}

loadDataButton.onclick = loadData;


     

