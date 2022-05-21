import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {addCustomerAction, removeCustomerAction} from "../../redux/reducers/customerReducer";
import {
    eventsErrorAction,
    eventsInitialAction,
    eventsLoadedAction,
    eventsLoadingAction
} from "../../redux/reducers/eventsReducer";
import {getEvents} from "../../axios/API";
const STATES = require('../../redux/states')


const Quiz = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const events = useSelector(state => state.events)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    const fetchEvents = async () => {
        dispatch(eventsInitialAction())
        console.log('begin')
        dispatch(eventsLoadingAction())
        try {
            const events = await getEvents()
            dispatch(eventsLoadedAction(events))
            console.log('success')
        } catch (e) {
            dispatch(eventsErrorAction())
            console.log('error')
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div>
            <h1>{cash}</h1>
            <Button onClick={() => {addCash(10)}}>Прибавить</Button>
            <Button onClick={() => {getCash(10)}}>Отнять</Button>
            <div>
                {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => {removeCustomer(customer)}}>{customer.name}</div>)}
                </div>
                :
                <h1>
                    Клиенты отсутствуют!
                </h1>}
            </div>
            <Button onClick={() => {addCustomer(prompt())}}>Добавить клиента</Button>
            <Button onClick={() => {getCash(Number(prompt()))}}>Удалить клиента</Button>
            <Button onClick={() => {fetchEvents()}}>Fetch</Button>
            {events.states === STATES.INITIAL && <h1>INITIAL</h1>}
            {events.states === STATES.LOADING && <h1>LOADING</h1>}
            {events.states === STATES.LOADED && <h1>LOADED</h1>}
            {events.states === STATES.ERROR && <h1>ERROR</h1>}
        </div>
    );
};

export default Quiz;