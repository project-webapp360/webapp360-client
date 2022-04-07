import axios from "axios";
import TokenService from "../service/tokenService"
const tokenService = new TokenService()

const $host = axios.create({
    baseURL: process.env.REACT_APP_URL
})

const $AuthHost = axios.create({
    baseURL: process.env.REACT_APP_URL
})

export const $refresh = axios.create({
    baseURL: process.env.REACT_APP_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${tokenService.getTokenFromStorage('accessToken')}`
    return config
}

/*const refreshInterceptor = config => {
    config.headers.authorization = `Bearer ${tokenService.getTokenFromStorage('refreshToken')}`
    return config
}*/

$AuthHost.interceptors.request.use(authInterceptor)
// $refresh.interceptors.request.use(refreshInterceptor)

export {
    $host,
    $AuthHost
}