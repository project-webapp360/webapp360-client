import {action, computed, makeObservable, observable, runInAction} from 'mobx'
import {getResultsUser, getUsers} from "../axios/API";


const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

export default class UserStatistic {
    results = []
    state = STATES.INITIAL
    usersCount

    constructor() {
        makeObservable(this, {
            state:  observable,
            fetchResult: action,
            caseLoading: computed
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

    async fetchResult(eventId) {

        if (this.state === STATES.INITIAL)
        {
            this.state = STATES.LOADING
        }

        try {
            const data = await getResultsUser(eventId)
            console.log(data)
            const usersCountData = await getUsers()
            runInAction(() => {
                this.usersCount = usersCountData.length
                this.results = data
                this.state = STATES.LOADED
            })
            console.log('please work too')
        } catch (e) {
            runInAction(() => {
                this.state = "error"
            })
        }
    }

    async updateData(eventId) {
        runInAction(() => {
            this.fetchResult(eventId)
        })
    }


}