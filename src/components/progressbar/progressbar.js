import React, {useContext, useState} from 'react';
import {LinearProgress} from "@mui/material";
import {Context} from "../../index";
import "./progressbar.css"
import AddEvent from "../addEvent/AddEvent";
import Modal from "../modal/Modal";
import Progressbar_manage from "../progressbar_manage/progressbar_manage";

const Progressbar = (props) => {

    const {events} = useContext(Context)
    const allEvents = events.events.length
    const completedEvents = props.completedEvents


    const [EventCardData, setEventCardData] = useState([
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Админ'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },])
    const [modal1, setModal1] = useState(false);

    const changeVisible1 = () => {
        setModal1(true)
    }

    const createEvent = (newEvent) => {
        setEventCardData([...EventCardData, newEvent])
    }

    return (
    <div className="progressbar">
        {props.role === 'MANAGER' || props.role === 'ADMIN'
            ?
            <Modal visible={modal1} setVisible={setModal1}>
                <AddEvent setVisible={setModal1} create={createEvent}/>
            </Modal>
            :
            <div></div>
        }
      <p className="progressbar__text">Пройдено опросов лично {completedEvents} из {allEvents} возможных</p>
      <LinearProgress variant="determinate" value={completedEvents/allEvents*100}/>
        <div className="progressbar__div">
            <div className="progressbar__date">Сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
            {props.role === 'MANAGER' || props.role === 'ADMIN'
                ?
                <button className="progressbar__button" onClick={changeVisible1}>Создать опрос</button>
                :
                <div></div>
            }
        </div>
    </div>
  );
};

export default Progressbar;