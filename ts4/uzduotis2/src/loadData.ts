import { fetchRegistrations } from "./fetchData.js";
import { Participant } from "./participant.js";
import { showData } from "./showData.js";

export let participantData : Participant[];

export const loadData = () => {

    fetchRegistrations("summercamp", "GET", null)
    .then((response) => {
        return response.json();
    })
    .then((data: {[key: string]: Participant}) => {

        participantData = [];

        Object.keys(data).forEach((k) => {
            data[k].id = k;
           participantData.push(data[k]);
        });

        showData(participantData);
        
    });
}