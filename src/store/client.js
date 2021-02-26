import axios from "axios";

var reqvest;

function call_reqvest(lan) {
    var lang;  

    if (lan == "geo")
        lang = "ka";
    if (lan == "eng")
        lang = "en";
    if (lan == "rus")
        lang = "ru";

    reqvest = axios.create({
        baseURL: 'https://www.hilltop.ge/api/',
        // timeout: 1000,
        // headers: {'Accept-Language': 'ka'}
        headers: { 'Accept-Language': lang }
    });
}


export { call_reqvest, reqvest };
