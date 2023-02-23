import axios from "axios";
import {api} from "../../api/api";


export const register = (email: string, username: string, password: string) =>{
    const response = axios.post(`${api}/auth/registration`, {
        email: email,
        username: username,
        password: password,
    })
        .then((response) => {
            if (response.data.token){
                localStorage.setItem('token', response.data.token)
                return response.data
            }
        })
}

export const login = (email: string, password: string) => {
    const response = axios.post(`${api}/auth/login`,{
        email: email,
        password: password,
    })
        .then((response) => {
            if (response.data.token){
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        })
}

export const tokenUpdate = (email: string, password: string) => {
    const response = axios.post(`${api}/auth/login`,{
        email: email,
        password: password,
    })
        .then((response) => {
            if (response.data.token){
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        })
}



export const logout = () => {
    localStorage.removeItem('token')
}