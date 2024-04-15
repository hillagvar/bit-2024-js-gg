import { Nationalize } from "./nationalize.js";

//is DOM pasiimame HTML elementus
const nameInput = <HTMLInputElement>document.getElementById("name");
const getInfo = <HTMLButtonElement>document.getElementById("get-info");
const resultList = <HTMLUListElement>document.getElementById("result-list");
const nameResult = <HTMLElement>document.getElementById("name-result");

let x: HTMLElement|null;

//kai paspaudziame mygtuka "Gauti informacija"
getInfo.onclick = () => {
    //paimame ivesta varda
    const vardas = nameInput.value;

    //parsiunciame duomenis
    fetch (`https://api.nationalize.io/?name=${vardas}`)
    .then((response) => {
        //response - nera gauti duomenys, o yra rezultato stream'as
        //iskvieciame response metoda json, kuris is gauto stream'o konvertuoja duomenis i objekta
    return response.json();
    })
    .then((data: Nationalize) => {
    nameResult.innerHTML = data.name;
    resultList.innerHTML = "";
    data.country.forEach((c) => {
        const li = document.createElement("li");
        li.innerHTML = `${c.country_id} = ${((c.probability)*100).toFixed(2)}%`;
        li.className = "list-group-item";
        
        //kiekviename irasa idedame i ul sarasa
        resultList.appendChild(li);
        });
    });
}
