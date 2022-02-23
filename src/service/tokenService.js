
// export const TokenService = () => {
//     function setToken(key, token) {
//         localStorage.setItem(key, token)
//     }
//
//     function getTokenFromStorage(token) {
//         return localStorage.getItem(token)
//     }
//
//     function unbindToken(key) {
//         localStorage.setItem(key, '')
//     }
// }


export default class TokenService {

    setToken(key, token) {
        localStorage.setItem(key, token)
    }

    getTokenFromStorage(token) {
       return localStorage.getItem(token)
    }

    unbindToken(key) {
        localStorage.setItem(key, '')
    }
}
