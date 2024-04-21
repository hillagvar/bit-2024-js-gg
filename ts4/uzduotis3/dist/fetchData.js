import { userInfo } from "./app.js";
export const fetchRec = (path, method, data) => {
    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    if (data !== null) {
        options.body = JSON.stringify(data);
    }
    return fetch(`https://fir-project-26cda-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options);
};
