import { userInfo } from "./app.js";

export const fetchRegistrations = (path: string, method: string, data: any ) => {
    let options: any = {
        method: method,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
    };
    if (data !== null) {
        options.body = JSON.stringify(data);
        //options = {body:JSON.stringify(data), ...options};
    }

    //pridedame token, kuri gavome po registracijos arba prisijungimo
    //siunciame ir token, nes kitaip nerodys informacijos
    return fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options);
}