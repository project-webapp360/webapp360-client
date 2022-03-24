import React, {useContext, useState} from 'react';
import "./AddEvent.css"
import {createEvent, getEvents} from "../../axios/API";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const AddEvent = ({create, setVisible}) => {

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
      creator: "Менеджер"
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
          "Ivan",
          user.user.role
      )
      const eventsFormDB = await getEvents()
      events.setEvents([...eventsFormDB])
      console.log(events.events)
    navigate('/mainpage')
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  const newEventCreate = async () => {

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

      <input className="inputs" type="text" placeholder={"Название опроса"} value={title} onChange={e => setTitle(e.target.value)}/>

      <input className="inputs" type="date" value={dateEnd} onChange={event => setDateEnd(event.target.value)}/>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select value={name} label="user" onChange={event => setName(event.target.value)}>
          {array.map((e) =>
            <MenuItem value={e.Name}>{e.Name}</MenuItem>
          )}
        </Select>
      </FormControl>

      <button className="input__button" onClick={newEventForm}>Create Test</button>
    </form>
  );
};

export default AddEvent;