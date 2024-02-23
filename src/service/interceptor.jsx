import axios from "axios";
import Config from "./config.json";

const getInstance = async (ApiUrl, port, url) => {
    const apiUrl = ApiUrl + port + '/' + url;

    var headers = Config.API_HEADER;
    let config = {
        header: headers
    }
    return axios.get(apiUrl, config)
}

const postInstance = async (ApiUrl, port, url, body, ENV, APPID) => {
    const apiUrl = ApiUrl + port + '/' + url
    let config = {
        header: {
            ENV: ENV,
            appId: APPID
        }
    }
    return axios.post(
        apiUrl, body
    )

}

const putInstance = async (ApiUrl, port, url, body, ENV, APPID) => {
    const apiUrl = ApiUrl + port + '/' + url
    let config = {
        header: {
            ENV: ENV,
            appId: APPID
        }
    }
    return axios.put(
        apiUrl, body
    )
}

const deleteInstance = async (ApiUrl, port, url) => {
    const apiUrl = ApiUrl + port + '/' + url
    var headers = Config.API_HEADER;
    let config = {
        header: headers
    }
    return axios.delete(apiUrl, config)

}
const apicall = async (method, port, routername, body) => {
    if (method === "get") {
        const response = await getInstance(Config.API_BASE_URL, port, routername) || {}
        return response;
    } else if (method === "post") {
        const response = await postInstance(Config.API_BASE_URL, port, routername, body) || {}
        return response;
    } else if (method === "put") {
        const response = await putInstance(Config.API_BASE_URL, port, routername, body) || {}
        return response;
    } else if (method === "delete") {
        const response = await deleteInstance(Config.API_BASE_URL, port, routername) || {}
        return response;
    }
}
axios.interceptors.request.use(function (config) {
    console.log("start API call");
    return config
},
    function (error) {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(function (response) {
    console.log("ended api call");
    return response
},
    function (error) {
        return null
    }
)

export default { apicall }