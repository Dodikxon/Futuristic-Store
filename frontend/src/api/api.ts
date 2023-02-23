export const api = 'http://localhost:5000'

export function token(){
    let token = localStorage.getItem('token')
    return token
}