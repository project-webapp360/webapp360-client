import {$AuthHost, $host, $refresh} from './index'
import jwtDecode from "jwt-decode";
import TokenService from "../service/tokenService"
import createAuthRefreshInterceptor from 'axios-auth-refresh'
const tokenService = new TokenService()

export const registration = async (email, password, role, nickName, firstName, lastName) => {
    const {data} = await $host.post('api/register', {
        email, password, role, nickName, firstName, lastName
    })
    // localStorage.setItem('token', data.accessToken)
    tokenService.setToken('accessToken', data.accessToken)
    tokenService.setToken('refreshToken', data.refreshToken)
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {
        email, password
    })
    // localStorage.setItem('token', data.accessToken)
    console.log(data.refreshToken)
    tokenService.setToken('accessToken', data.accessToken)
    tokenService.setToken('refreshToken', data.refreshToken)
    // return jwtDecode(data.accessToken)
    return data
}

export const getIdToProfile = async (email) => {
    const {data} = await $host.post('api/user/profile', {
        email
        })
    return data
}



export const deleteToken = async (id) => {
    await $host.post('api/token/delete', {
        id
    })
}




export const createEvent = async (title, dateStart, dateEnd, name, creator, type, needToComplete) => {
    const {data} = await $host.post('api/event/create', {
        title, dateStart, dateEnd, name, creator, type, needToComplete
    })
    return data
}

export const createEventUsers = async (eventId) => {
    const {data} = await $host.post('api/event/create/user', {
        id: eventId
    })
    return data
}

export const getEvents = async () => {
    const {data} = await $host.get('api/event/events')
    return data
}


export const getEventsUser = async (userId) => {
    const {data} = await $host.post('api/event/events/user', {
        id: userId
    })
        console.log(data)
    return data
}

export const deleteEvent = async (id) => {
    const {data} = await $host.get(`api/event/delete/${id}`)
    return {data}
}

export const deleteEventUser = async (idUser, idEvent) => {
    const {data} = await $host.post('api/event/delete/user', {
        idUser: idUser, idEvent: idEvent
    })
    return {data}
}

export const bannedUser = async (email) => {
    const {data} = await $host.post('api/user/banned', {
        email
    })
    return {data}
}

export const unbannedUser = async (email) => {
    const {data} = await $host.post('api/user/unbanned', {
        email
    })
    return {data}
}



export const getUsers = async () => {
    const {data} = await $host.get('api/users')
    // localStorage.setItem('token', data.accessToken)
    // return jwtDecode(data.accessToken)
    return data
}

export const sendResultsUser = async (evendId, eventsResults, userId, targetEmail) => {
    console.log("START API sendResultsUser")
    const {data} = await $host.post('api/results/set/user', {
        id: evendId,
        eventsResults: eventsResults,
        userId,
        targetEmail
    })
    console.log("END API sendResultsUser")
    return {data}
}

export const getResultsUser = async (eventId) => {
    const {data} = await $host.post('api/results/get/user', {
        eventId
    })
    return data
}

export const userGetResult = async (userId) => {
    const {data} = await $host.post('api/user/get/results', {
        userId
    })
    return data
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
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + data.accessToken
    return Promise.resolve();
}

createAuthRefreshInterceptor($AuthHost, refreshToken);
