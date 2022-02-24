import React, {useState} from 'react';
import "./AddEvent.css"

const AddEvent = ({create, setVisible}) => {

  const [title, setTitle] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [name, setName] = useState('')

  const newEventForm = (e) => {
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

      <select className="inputs" name="user" id="user" value={name} onChange={e => setName(e.target.value)}>
        {array.map((e) =>
          <option value={e.Name}>{e.Name}</option>
        )}
      </select>

      <button className="input__button" onClick={newEventForm}>Create Test</button>
    </form>
  );
};

export default AddEvent;