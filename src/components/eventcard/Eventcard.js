import React, {useState} from 'react';
import "./Eventcard.css"
import {Link} from "react-router-dom";
import Survey from "../survey/Survey";
import Modal from "../modal/Modal";

const Eventcard = (props) => {

  const [modal,setModal] = useState(false);
  const changeVisible = () => {
    setModal(true)
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
            <button className="eventcard__button-refuse">Отклонить</button>
            <button className="eventcard__button-agree" onClick={changeVisible}>Принять</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Eventcard;
