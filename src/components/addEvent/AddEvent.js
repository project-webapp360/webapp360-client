import React, {useContext, useState} from 'react';
import {createEvent, createEventUsers, getEvents, getEventsUser} from "../../axios/API";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import "./AddEvent.css"
import {observer} from "mobx-react-lite";

const AddEvent = observer(({create, setVisible}) => {

    const {user} = useContext(Context)
    const {events} = useContext(Context)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [name, setName] = useState('')

    const newEventForm = async (e) => {
        e.preventDefault()
        const newEvent = {
            title,
            dateStart: new Date().toLocaleDateString("fr-CA"),
            dateEnd,
            name,
            creator: 'Менеджер'
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
                // user.user.role,
                'Менеджер'
            )

            const allUsers = await createEventUsers(data._id)

            // const eventsFormDB = await getEvents()
            console.log('events massive 1')
            const eventsFormDB = await getEventsUser(user.user.id)
            console.log('events massive 2')
            console.log(eventsFormDB)
            await events.updateData(eventsFormDB)
            // events.setEvents([...eventsFormDB])
            console.log(events.events)
            navigate('/mainpage')
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    const array = [
        {
            Name: "user1",
        },
        {
            Name: "user2",
        },
        {
            Name: "user3",
        },
    ]

    return (
        <form className="full-form">

            <input className="inputs" type="text" placeholder={"Название опроса"} value={title}
                   onChange={e => setTitle(e.target.value)}/>

            <input className="inputs" type="date" value={dateEnd} min={new Date().toLocaleDateString("fr-CA")}
                   onChange={event => setDateEnd(event.target.value)}/>

            <div className="mySelectDiv">
                <select className="mySelect" value={name} label="user" name="" id=""
                        onChange={event => setName(event.target.value)}>
                    {array.map((e) =>
                        <option value={e.Name}>{e.Name}</option>
                    )}
                </select>
            </div>

            <button className="input__button" onClick={newEventForm}>Create Test</button>
        </form>
    );
});

export default AddEvent;