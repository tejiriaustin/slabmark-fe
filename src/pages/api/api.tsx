import axios from "axios";

export default function Api() {
    return axios.create({baseURL: process.env.API_URL,withCredentials: true})
}