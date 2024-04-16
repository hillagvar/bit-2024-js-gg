import { Registration } from "./registration.js";

const markInput = <HTMLInputElement>document.getElementById("mark");
const modelInput = <HTMLInputElement>document.getElementById("model");
const yearInput = <HTMLInputElement>document.getElementById("year");
const regNumberInput = <HTMLInputElement>document.getElementById("reg-number");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const addRegButton = <HTMLButtonElement>document.getElementById("add-reg");

const loadDataButton = <HTMLButtonElement>document.getElementById("load-data");
const dataTableBody = <HTMLElement>document.getElementById("data-table-body");

const dataTable = <HTMLElement>document.getElementById("data-table");
const editForm = <HTMLElement>document.getElementById("edit-form");

let registrationData : Registration[];


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

const showData = () => {
    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {

        /*
        dataTableBody.innerHTML+=`
        <tr>
            <td>${reg.mark}</td>
            <td>${reg.model}</td>
            <td>${reg.regNumber}</td>
            <td></td>
        </tr>
        `;
        */ 

        const tr = document.createElement("tr");

        const tdMark = document.createElement("td");
        tdMark.innerHTML = reg.mark;

        const tdModel = document.createElement("td");
        tdModel.innerHTML = reg.model;

        const tdRegNumber = document.createElement("td");
        tdRegNumber.innerHTML = reg.regNumber;

        const tdV = document.createElement("td");

        tr.appendChild(tdMark);
        tr.appendChild(tdModel);
        tr.appendChild(tdRegNumber);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick = () => {
            dataTable.style.display = "none";
            editForm.style.display = "block";
        (<HTMLInputElement>document.getElementById("mark-edit")).value = reg.mark;
        (<HTMLInputElement>document.getElementById("model-edit")).value = reg.model;
        (<HTMLInputElement>document.getElementById("year-edit")).value = reg.year.toString();
        (<HTMLInputElement>document.getElementById("reg-number-edit")).value = reg.regNumber;
        (<HTMLInputElement>document.getElementById("phone-edit")).value = reg.phone;
        (<HTMLButtonElement>document.getElementById("update-reg")).onclick = () => {
            const updReg: Registration = {
                mark:  (<HTMLInputElement>document.getElementById("mark-edit")).value,
                model: (<HTMLInputElement>document.getElementById("model-edit")).value,
                year:  (<HTMLInputElement>document.getElementById("year-edit")).valueAsNumber,
                regNumber:  (<HTMLInputElement>document.getElementById("reg-number-edit")).value,
                phone: (<HTMLInputElement>document.getElementById("phone-edit")).value
                } 

                fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/registrations/${reg.id}.json`,{
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

    fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/registrations.json",{
    method: "GET",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
        }
    }) 
    .then((response) => {
        return response.json();
    })
    .then((data: {[key: string]: Registration}) => {
        //Object.keys(data) - grazina objekto raktu masyva

        //masyvas su duomenimis
        registrationData = [];

        //sukame cikla per visus objekto raktus
        Object.keys(data).forEach((k) => {
            //kiekviena registracija ikeliame i reg masyva (data[k] yra objektas)
            //pridedame nauja id atributa
            data[k].id = k;
           registrationData.push(data[k]);
           //kitas uzrasymas {id:k, ... data[k]} - paimame visus atributus is objekto data[k] ir pridedame // atributa id, kurio reiksme k
            //registrationData.push({id: k, ...data[k]});

        });

        showData();

        console.log(registrationData);
        
    });
}

loadDataButton.onclick = loadData;
    




