// import { registrationData } from "./app.js";
// import { registrationData } from "./app.js";
import { fetchRegistrations } from "./fetchData.js";
import { showData } from "./showData.js";
export const loadData = () => {
    const registrationData = [];
    fetchRegistrations("registrations", "GET", null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        //Object.keys(data) - grazina objekto raktu masyva
        //masyvas su duomenimis
        // registrationData.splice(0, registrationData.length);
        // registrationData = [];
        //sukame cikla per visus objekto raktus
        Object.keys(data).forEach((k) => {
            //kiekviena registracija ikeliame i reg masyva (data[k] yra objektas)
            //pridedame nauja id atributa
            // data[k].id = k;
            //    registrationData.push(data[k]);
            //kitas uzrasymas {id:k, ... data[k]} - paimame visus atributus is objekto data[k] ir pridedame // atributa id, kurio reiksme k
            registrationData.push(Object.assign({ id: k }, data[k]));
        });
        showData(registrationData);
        // console.log(registrationData);
    });
};
