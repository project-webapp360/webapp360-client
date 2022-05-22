
const STATES = require('../states')

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const INITIAL = 'INITIAL'
const LOADING = 'LOADING'
const LOADED = 'LOADED'
const ERROR = 'ERROR'

const defaultState = {
    states: STATES.INITIAL,
    events: []
}

export const eventsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]}
        case INITIAL:
            return {...state, states: STATES.INITIAL, events: []}
        case LOADING:
            return {...state, states: STATES.LOADING, events: []}
        case LOADED:
            return {...state, states: STATES.LOADED, events: [action.payload]}
        case ERROR:
            return {...state, states: STATES.ERROR}


        default:
            return {...state, states: STATES.ERROR}
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})

export const eventsInitialAction = (payload) => ({type: INITIAL, payload})
export const eventsLoadingAction = (payload) => ({type: LOADING, payload})
export const eventsLoadedAction = (payload) => ({type: LOADED, payload})
export const eventsErrorAction = (payload) => ({type: ERROR, payload})