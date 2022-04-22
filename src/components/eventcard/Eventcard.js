import React, {useContext, useState} from 'react';
import "./Eventcard.css"
import Survey from "../survey/Survey";
import Modal from "../modal/Modal";
import {deleteEvent} from "../../axios/API";
import {Context} from "../../index";

const Eventcard = (props) => {

  const {events} = useContext(Context)

  const [modal, setModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);

  const changeVisible = () => {
    setModal(true)
  }

  const eventDelete = async (id) => {
    const data = await deleteEvent(id)
    await events.updateData(data)
    console.log(data)
  }

  const changeConfirmVisibleTrue = () => {
    setModalConfirm(true)
  }

  const confirmDisagree = () => {
    setModalConfirm(false)
  }

  const confirmAgree = () => {
    setModalConfirm(false)
    eventDelete(props.id)
  }

  return (
    <div>

        <Modal visible={modalConfirm} setVisible={setModalConfirm}>
          <div className="confirmModal">
            Вы точно хотите удалить опрос?
            <div className="blackLine" ></div>
            <div className="confirmModalButtons">
            <button onClick={confirmAgree} className="confirmModalButtonAgree">Да</button>
            <button onClick={confirmDisagree} className="confirmModalButtonDisagree">Нет</button>
          </div>
        </div>
      </Modal>

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
            <button className="eventcard__button-refuse" onClick={changeConfirmVisibleTrue}>Отклонить
            </button>
            <button className="eventcard__button-info">Статистика</button>
            <button className="eventcard__button-agree" onClick={changeVisible}>Принять</button>
          </div>
        </div>

      </div>

    </div>
  );
};
export default Eventcard;
