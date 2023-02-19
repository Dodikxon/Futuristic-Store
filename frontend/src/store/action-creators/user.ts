import axios from "axios";

const api = 'http://localhost:5000/'

export const register = (username: string, email: string, password: string) =>{
    return async () => {
        try {
            const response = axios.post(`${api}auth/registration`, {
                username: username,
                email: email,
                password: password,
            })
                .then((response) => {
                    if (response.data.token){
                        localStorage.setItem('token', response.data.token)
                        return response.data
                    }
                })
        }catch (error) {
            console.log(error)
        }
    }
}

export const login = (email: string, password: string) => {
    const response = axios.post(`${api}auth/login`,{
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
    return async () => {
        try{
            localStorage.removeItem('token')
        }catch (error){
            console.log(error)
        }
    }
}