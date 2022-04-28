import React, {useContext, useState} from 'react';
import "./Eventcard.css"
import Survey from "../survey/Survey";
import EventStatistik from "../eventStatistik/EventStatistik";
import Modal from "../modal/Modal";
import Modal1 from "../modal/Modal";
import {deleteEvent} from "../../axios/API";
import {Context} from "../../index";
import {observable} from "mobx";
import {useNavigate} from "react-router-dom";


const Eventcard = (props) => {

  const {events} = useContext(Context)

  const [modal,setModal] = useState(false);
  const changeVisible = () => {
    setModal(true)
  }
  const [modal1,setModal1] = useState(false);


  const eventDelete = async (id) => {
    const data = await deleteEvent(id)
    await events.updateData(data)
    console.log(data)
  }

  const navigate = useNavigate()

  const eventStatistik = (e) => {
    e.preventDefault()
    navigate("/eventStatistik")
  }

  return (

    <div>
      <Modal visible={modal} setVisible={setModal}>
        <Survey visible={modal} setVisible={setModal}/>
      </Modal>
{/*      <Modal1 visible={modal1} setVisible={setModal1}>
        <EventStatistik visible={modal1} setVisible={setModal1}/>
      </Modal1>*/}
      <div className="eventcard">
        <div className="eventcard__firstString">
          <div className="eventcard__title">{props.title}</div>
          <div className="eventcard__testCreator">Тест от: {props.creator}</div>
        </div>
        <div className="eventcard__date-start">начало теста: {props.dateStart}</div>
        <div className="eventcard__date-end">конец теста: {props.dateEnd}</div>
        <div className="eventcard__lastString">
          <div className="eventcard__name">тест на: {props.name}</div>
          <div className="eventcard__buttons">
            <button className="eventcard__button-refuse" onClick={() =>{eventDelete(props.id)}}>Отклонить</button>
            <button className="eventcard__button-info" onClick={eventStatistik}>Статистика</button>
            <button className="eventcard__button-agree" onClick={changeVisible}>Принять</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Eventcard;
