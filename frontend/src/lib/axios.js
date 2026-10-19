import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:10001/api"
})

export default api;