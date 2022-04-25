import React, {useContext, useState} from 'react';
import "./Eventcard.css"
import Survey from "../survey/Survey";
import Modal from "../modal/Modal";
import {deleteEvent, deleteEventUser} from "../../axios/API";
import {Context} from "../../index";
import {observable} from "mobx";

const Eventcard = (props) => {

  const {events} = useContext(Context)

  const [modal,setModal] = useState(false);
  const changeVisible = () => {
    setModal(true)
  }

  const eventDelete = async (idUser, id) => {
    const data = await deleteEvent(id)
    // const data = await deleteEventUser(idUser, id)
    await events.updateData(data)
    console.log(data + '123123123')
  }

  return (

    <div>
      <Modal visible={modal} setVisible={setModal}>
        <Survey visible={modal} setVisible={setModal}/>
      </Modal>
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
            <button className="eventcard__button-refuse" onClick={() =>{eventDelete(props.idUser ,props.id)}}>Отклонить</button>
            <button className="eventcard__button-info">Статистика</button>
            <button className="eventcard__button-agree" onClick={changeVisible}>Принять</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Eventcard;
