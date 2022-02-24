import {makeAutoObservable} from 'mobx'

export default class Events {
    constructor() {
        this._events = JSON.parse(localStorage.getItem("events")) || {}
        makeAutoObservable(this)
    }

    get events() {
        return this._events
    }

    setEvents(events) {
        this._user = events
        localStorage.setItem('events', JSON.stringify(events))
    }
}