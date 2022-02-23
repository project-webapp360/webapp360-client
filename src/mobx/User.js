import {makeAutoObservable} from 'mobx'

export default class User {
    constructor() {
        // this._isAuth = false
        this._isAuth = (localStorage.getItem("isAuth") === "true") || false
        this._user = JSON.parse(localStorage.getItem("user")) || {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
        localStorage.setItem('isAuth', `${bool}`)
    }


    setUser(user) {
        this._user = user
        localStorage.setItem('user', JSON.stringify(user))
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}

/*
localStorage.setItem('user', JSON.stringify(data))
localStorage.setItem('isAuth', "true")

localStorage.setItem('user', JSON.stringify(''))
localStorage.setItem('isAuth', "false")

user.setUser(localStorage.getItem('user'))
const auth = localStorage.getItem('isAuth')
function checkIsAuth() {
    return auth === "true";
}
user.setIsAuth(checkIsAuth())*/
