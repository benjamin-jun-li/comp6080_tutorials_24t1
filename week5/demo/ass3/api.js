import { BASE_URL } from "./config";

// GET POST PUT DELETE
const apiCall = (endpoint, method, data=null) => {
    let url = BASE_URL + endpoint;
    
    const options = {
        method: method.toUpperCase(),
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(res => {
        if (!res.ok) throw new Error(`Failed ${res.status} ${res.statusText}`)
        return res.json()
    });
}

export const getUserInfo = (option, id=null) => {
    if (option === "all") {
        return apiCall("/api/users", "GET")
    } else {
        return apiCall("/api/user/"+id, "GET")
    }
}

export const getThreads = () => {

}