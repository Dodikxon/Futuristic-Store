import axios from "axios";

const api = 'http://localhost:5000/auth'

export const register = (username: string, email: string, password: string) =>{
    return async () => {
        try {
            const response = axios.post(`${api}/registration`, {
                username: username,
                email: email,
                password: password,
            })
                .then((response) => {
                    if (response.data.token){
                        localStorage.setItem('token', response.data.token)
                        // Add redirect on store
                        return response.data
                    }
                })
        }catch (error) {
            console.log(error)
        }
    }
}

export const login = (email: string, password: string) => {
    return async () => {
        try {
            const response = axios.post(`${api}/login`,{
                email: email,
                password: password,
            })
                .then((response) => {
                    if (response.data.token){
                        localStorage.setItem('token', response.data.token)
                        // Add redirect on store
                        return response.data
                    }
                })
        }catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => {
    return async () => {
        try{
            localStorage.removeItem('token')
        }catch (error){
            console.log(error)
        }
    }
}