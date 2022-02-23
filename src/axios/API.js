import {$AuthHost, $host, $refresh} from './index'
import jwtDecode from "jwt-decode";
import TokenService from "../service/tokenService"
import createAuthRefreshInterceptor from 'axios-auth-refresh'
const tokenService = new TokenService()

export const registration = async (email, password) => {
    const {data} = await $host.post('api/register', {
        email, password, role: 'ADMIN'
    })
    // localStorage.setItem('token', data.accessToken)
    tokenService.setToken('accessToken', data.accessToken)
    tokenService.setToken('refreshToken', data.refreshToken)
    return jwtDecode(data.accessToken)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {
        email, password
    })
    // localStorage.setItem('token', data.accessToken)
    console.log(data.refreshToken)
    tokenService.setToken('accessToken', data.accessToken)
    tokenService.setToken('refreshToken', data.refreshToken)
    return jwtDecode(data.accessToken)
}




export const getUsers = async () => {
    const {data} = await $AuthHost.get('api/users')
    // localStorage.setItem('token', data.accessToken)
    return jwtDecode(data.accessToken)
}

export const deleteToken = async (id) => {
    await $host.post('/api/token/delete', {
        id
    })
}




const refreshAuthLogic = failedRequest => $refresh.get('api/token/refresh')
    .then(tokenRefreshResponse => {
        tokenService.setToken('accessToken', tokenRefreshResponse.data.accessToken)
        tokenService.setToken('refreshToken', tokenRefreshResponse.data.refreshToken)
        failedRequest.response.config.headers.authorization = 'Bearer ' + tokenRefreshResponse.data.accessToken;
        return Promise.resolve();
    })

export const refreshToken = async (failedRequest) => {
    const {data} = await $refresh.get('api/token/refresh')
    // localStorage.setItem('token', data.accessToken)
    tokenService.setToken('accessToken', data.accessToken)
    tokenService.setToken('refreshToken', data.refreshToken)
    failedRequest.response.config.headers['Authorization'] = "Bearer " + data.accessToken
    return Promise.resolve();
}

createAuthRefreshInterceptor($AuthHost, refreshAuthLogic);
