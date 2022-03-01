import React, {useContext, useEffect, useState} from 'react';
import Progressbar from "../../components/progressbar/progressbar";
import Eventcard from "../../components/eventcard/Eventcard";
import "./mainpage.css"
import NavBar from "../../components/с_navBar/NavBar";
import Modal from "../../components/modal/Modal";
import AddEvent from "../../components/addEvent/AddEvent";
import {Context} from "../../index";
import {getEvents} from "../../axios/API";
import {observer} from "mobx-react-lite";

const Mainpage = observer(() => {

  const {events} = useContext(Context)


  useEffect( async () => {
    const events = await getEvents()
    localStorage.setItem("events", JSON.stringify(events))
  })
  //
  // console.log(JSON.parse(localStorage.getItem("events")))
  // console.log(events.events)

  // useEffect(async () => {
  //   events.setEvents(await getEvents())
  // })

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
  //
  //
  //
  // const changeVisible1 = () => {
  //   setModal1(true)
  // }
  //
  // const changeVisible2 = () => {
  //   setModal2(true)
  // }
  //
  // const changeVisible3 = () => {
  //   setModal3(true)
  // }
  //
  // const createEvent = (newEvent) => {
  //   setEventCardData([...EventCardData, newEvent] )
  // }


  return (
    <>

      {/*<NavBar setVisible1={changeVisible1} setVisible2={changeVisible2} setVisible3={changeVisible3}/>*/}
      <Progressbar/>
      {
        events.events.map((item) => <Eventcard title={item.title} dateStart={item.dateStart} dateEnd={item.dateEnd} name={item.name} creator={item.creator}/>)
      }
    </>
  );
});

export default Mainpage;