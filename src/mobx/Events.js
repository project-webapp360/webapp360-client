import {action, computed, makeAutoObservable, makeObservable, observable, runInAction} from 'mobx'
import {getEvents, getEventsUser} from "../axios/API";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

export default class Events {
    events = [{
        title: "Название",
        dateStart: "2022-02-23",
        dateEnd: "Конец",
        name: 'Вася',
        creator: 'Менеджер'
    }]
    state = STATES.INITIAL

    constructor() {
        makeObservable(this, {
            state: observable,
            fetchData: action,
            caseLoading: computed,
            updateData: action
        })
    }

    get caseLoading() {
        switch (this.state) {
            case STATES.INITIAL:
            {
                console.log('CASE INITIAL')
                return STATES.INITIAL
            }
            case STATES.LOADING:
            {
                console.log('CASE LOADING')
                return STATES.LOADING
            }
            case STATES.LOADED:
            {
                console.log('CASE LOADED')
                return STATES.LOADED
            }
            default:
                return '123213'
        }
    }

    async fetchData(userId) {

        if (this.state === STATES.INITIAL)
        {
            this.state = STATES.LOADING
        }

        try {

            const data = await getEventsUser(userId)
            // const data = await getEvents()
            runInAction(() => {
                this.events = data
                this.state = STATES.LOADED
            })
            console.log(data)
            console.log('please work')
        } catch (e) {
            runInAction(() => {
                this.state = "error"
            })
        }
    }

    async updateData(data) {
        runInAction(() => {
            this.events = data
            this.state = STATES.LOADING
        })
    }
}