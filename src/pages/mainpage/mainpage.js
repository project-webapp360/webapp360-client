import React, {useContext, useEffect, useState} from 'react';
import Progressbar from "../../components/progressbar/progressbar";
import Eventcard from "../../components/eventcard/Eventcard";
import "./mainpage.css"
import {Context} from "../../index";
import {getEvents} from "../../axios/API";
import {observer} from "mobx-react-lite";

const Mainpage = observer(() => {

  const {events} = useContext(Context)
  const [EventCardData, setEventCardData] = useState([
    {
      title: "Название",
      dateStart:"2022-02-23",
      dateEnd:"Конец",
      name:'Вася',
      creator:'Менеджер'
    },
    {
      title: "Название",
      dateStart:"2022-02-23",
      dateEnd:"Конец",
      name:'Вася',
      creator:'Менеджер'
    },
    {
      title: "Название",
      dateStart:"2022-02-23",
      dateEnd:"Конец",
      name:'Вася',
      creator:'Менеджер'
    },
    {
      title: "Название",
      dateStart:"2022-02-23",
      dateEnd:"Конец",
      name:'Вася',
      creator:'Админ'
    },
    {
      title: "Название",
      dateStart:"2022-02-23",
      dateEnd:"Конец",
      name:'Вася',
      creator:'Менеджер'
    },])

  useEffect(   () => {
    async function fetchData() {
      const events = await getEvents()
      localStorage.setItem("events", JSON.stringify(events))
    }
    fetchData()
  })

  return (
    <div className="mainPage">
      <Progressbar/>
      {events.events.map((item) => <Eventcard title={item.title} dateStart={item.dateStart} dateEnd={item.dateEnd} name={item.name} creator={item.creator}/>)}
      </div>
  );
});

export default Mainpage;