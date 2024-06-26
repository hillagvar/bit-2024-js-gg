let errors = [];
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const birthYearInput = document.getElementById("birth-year");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addRegButton = document.getElementById("add-reg");
const statusDiv = document.getElementById("status");
const loadDataButton = document.getElementById("load-data");
const dataTableBody = document.getElementById("data-table-body");
const dataTable = document.getElementById("data-table");
const editForm = document.getElementById("edit-form");
let participantData;
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
    }
    else {
        const reg = {
            name: nameInput.value,
            surname: surnameInput.value,
            birthYear: birthYearInput.valueAsNumber,
            gender: maleInput.checked ? maleInput.value : femaleInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
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
        });
    }
};
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
            document.getElementById("name-edit").value = p.name;
            document.getElementById("surname-edit").value = p.surname;
            document.getElementById("birth-year-edit").value = p.birthYear.toString();
            if (p.gender === "male") {
                document.getElementById("male-edit").checked = true;
                document.getElementById("female-edit").checked = false;
            }
            else {
                document.getElementById("female-edit").checked = true;
                document.getElementById("male-edit").checked = false;
            }
            document.getElementById("email-edit").value = p.email;
            document.getElementById("phone-edit").value = p.phone;
            document.getElementById("update-reg").onclick = () => {
                const updReg = {
                    name: document.getElementById("name-edit").value,
                    surname: document.getElementById("surname-edit").value,
                    birthYear: document.getElementById("birth-year-edit").valueAsNumber,
                    // gender: (<HTMLInputElement>document.getElementById("male-edit")).checked ? (<HTMLInputElement>document.getElementById("male-edit")).value : (<HTMLInputElement>document.getElementById("female-edit")).value,
                    gender: document.querySelector('input[name="gender-edit"]:checked').value,
                    email: document.getElementById("email-edit").value,
                    phone: document.getElementById("phone-edit").value
                };
                fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp/${p.id}.json`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updReg)
                })
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    dataTable.style.display = "block";
                    editForm.style.display = "none";
                    loadData();
                });
            };
            document.getElementById("delete-reg").onclick = () => {
                fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp/${p.id}.json`, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    dataTable.style.display = "block";
                    editForm.style.display = "none";
                    loadData();
                });
            };
        };
    });
};
const loadData = () => {
    fetch("https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/summercamp.json", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        participantData = [];
        Object.keys(data).forEach((k) => {
            data[k].id = k;
            participantData.push(data[k]);
        });
        showData();
    });
};
loadDataButton.onclick = loadData;
export {};
