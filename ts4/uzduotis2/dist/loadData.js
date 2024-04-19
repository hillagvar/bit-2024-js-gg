import { fetchRegistrations } from "./fetchData.js";
import { showData } from "./showData.js";
export let participantData;
export const loadData = () => {
    fetchRegistrations("summercamp", "GET", null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        participantData = [];
        Object.keys(data).forEach((k) => {
            data[k].id = k;
            participantData.push(data[k]);
        });
        showData(participantData);
    });
};
