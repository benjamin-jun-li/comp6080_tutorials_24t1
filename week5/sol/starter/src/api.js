import { BASE_URL } from "./config.js";

const apiCall = (endpoint, method, data = null) => {
    let url = BASE_URL + endpoint;
    console.log(url);
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (method !== "GET") {
        options.body = JSON.stringify(data);
    }
    console.log(options);
    return fetch(url, options)
        .then(res => {
            if (!res.ok) throw new Error(`Failed ${res.status} ${res.statusText}`);
            return res.json();
        })
        .then(resData => resData)
        .catch(err => console.error(err))
}

export default apiCall;