import { University } from "./university.js";

const htmlResult = document.getElementById("result")!;
const salis = <HTMLInputElement>document.getElementById("salis")!;
const suzinoti = document.getElementById("suzinoti")!;

suzinoti.onclick = () => {
    fetch(`http://universities.hipolabs.com/search?country=${salis.value}`)
.then((response) => {
    return response.json();
})
.then((data: University[]) => {
    let str="";
    data.forEach((u) => {
        str+= `<a href="http://${u.domains[0]}"> ${u.name} - ${u.country}</a> <br>`;
    })
    htmlResult.innerHTML = str;
});

};




