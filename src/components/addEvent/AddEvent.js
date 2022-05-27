import React, {useContext, useEffect, useState} from 'react';
import {createEvent, createEventUsers, getEvents, getEventsUser} from "../../axios/API";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import "./AddEvent.css"
import {observer} from "mobx-react-lite";
import Eventcard from "../eventcard/Eventcard";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

const AddEvent = observer(({create, setVisible}) => {

    const {user, users} = useContext(Context)
    const {events} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        users.fetchData()
    }, [])

    const [title, setTitle] = useState('')
    const [dateEnd, setDateEnd] = useState(' ')
    const [name, setName] = useState(' ')
    const [emailName, emailSetName] = useState(' ')
    const [type, setType] = useState(' ')

    const newEventForm = async (e) => {
        e.preventDefault()
        const newEvent = {
            title,
            dateStart: new Date().toLocaleDateString("fr-CA"),
            dateEnd,
            name,
            creator: 'Менеджер',
            type
        }
        create(newEvent)
        setVisible(false);
        setTitle('')
        setDateEnd('')
        setName('')

        try {
            const data = await createEvent(
                title,
                new Date().toLocaleDateString("fr-CA"),
                dateEnd,
                name,
                user.user.firstName + ' ' + user.user.lastName,
                type,
                users.users.length
                // 'Менеджер'
            )

            const allUsers = await createEventUsers(data._id)

            const eventsFormDB = await getEventsUser(user.user.id)
            console.log(eventsFormDB)
            await events.updateData(user.user.id)
            console.log(events.events)
            navigate('/mainpage')
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    const switchState = (state) => {
        switch (state) {

            case STATES.INITIAL: {
                return <h1>...</h1>
            }

            case STATES.LOADING: {
                return <h1>Выполняется загрузка...</h1>
            }

            case STATES.LOADED: {
                let resultEmails = users.users.filter(item => item.email !== user.user.email)
                return resultEmails.map((e) =>
                    <option value={e.firstName + ' ' + e.lastName + '|' + e.email}>{e.firstName} {e.lastName}    [{e.role}]</option>
                )
            }

            default: {
                return <h1>ERROR...</h1>
            }

        }
    }




    return (
        <form className="full-form">

            <input className="inputs" type="text" placeholder={"Название опроса"} value={title}
                   onChange={e => setTitle(e.target.value)}/>

            <input className="inputs" type="date" value={dateEnd} min={new Date().toLocaleDateString("fr-CA")}
                   onChange={event => setDateEnd(event.target.value)}/>

            <div className="mySelectDiv">
                <select className="mySelect" value={name} label="user" name="" id=""
                        onChange={event => setName(event.target.value)}>
                    <option className="hiddenOption" value=" ">Опрос на ...</option>
                    {switchState(users.caseLoading)}
                </select>
            </div>

            <div className="mySelectDiv">
                <select className="mySelect" value={type} label="type" name="" id=""
                        onChange={event => setType(event.target.value)}>
                    <option className="hiddenOption" value=" ">Тип опроса</option>
                    <option value="0">User</option>
                    <option value="1">Manager</option>
                </select>
            </div>

            {title != '' && dateEnd != ' ' && name != ' ' && type != ' '
                ?
                <button className="input__button" onClick={newEventForm}>Создать опрос</button>
                :
                <button disabled className="input__button" onClick={newEventForm}>Создать опрос</button>
            }
        </form>
    );
});

export default AddEvent;