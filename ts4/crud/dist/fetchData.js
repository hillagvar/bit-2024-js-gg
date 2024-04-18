import { userInfo } from "./app.js";
export const fetchRegistrations = (path, method, data) => {
    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    if (data !== null) {
        options.body = JSON.stringify(data);
        //options = {body:JSON.stringify(data), ...options};
    }
    //pridedame token, kuri gavome po registracijos arba prisijungimo
    return fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options);
};
