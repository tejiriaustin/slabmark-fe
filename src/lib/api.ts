import axios from "axios";
import Router from 'next/router'
import {getToken} from '@/storage'

const axiosClient = axios.create({baseURL: process.env.API_URL,withCredentials: true})

axiosClient.interceptors.request.use((config) => {
    const token = getToken()

    config.headers['Authorization'] = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use((response)=> {
    return response
}, (error)=> {
    const statusCode = error.response?.status

    if (statusCode === 401) {
        Router.replace('/login')
    }

    return Promise.reject(error)
})

export default axiosClient;

