import { BASE_URL } from "./config"


// GET POST PUT DELETE
const apiCall = (method, endpoint, data = null) => {
    let url = BASE_URL + endpoint;

    const options = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(res => {
        if (!res.ok) throw new Error(`failed: ${res.status} ${res.statusText}`)
        res.json()
    })
}