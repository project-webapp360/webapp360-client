import {action, computed, makeObservable, observable, runInAction} from 'mobx'
import {getUsers} from "../axios/API";


const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

export default class Users {
    users = []
    state = STATES.INITIAL
    loading = false

    constructor() {
        makeObservable(this, {
            loading: observable,
            state: observable,
            fetchData: action,
            caseLoading: computed,
            updateData: action
        })
    }

    get caseLoading() {
        switch (this.state) {
            case STATES.INITIAL: {
                console.log('CASE INITIAL')
                return STATES.INITIAL
            }
            case STATES.LOADING: {
                console.log('CASE LOADING')
                return STATES.LOADING
            }
            case STATES.LOADED: {
                console.log('CASE LOADED')
                return STATES.LOADED
            }
            default:
                return '123213'
        }
    }

    async fetchData() {

        this.state = STATES.LOADING

        try {
            const data = await getUsers()
            runInAction(() => {
                this.users = data
                this.state = STATES.LOADED
            })
            console.log('please work too')
        } catch (e) {
            runInAction(() => {
                this.state = "error"
            })
        }
    }

    async updateData(data) {
        runInAction(() => {
            this.users = data
            this.state = STATES.LOADING
        })
    }

    async updateMobx() {
        this.loading = true
        await this.fetchData()
        this.loading = false
    }
}