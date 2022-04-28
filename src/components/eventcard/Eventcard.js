import React, {useContext, useState} from 'react';
import "./Eventcard.css"
import Survey from "../survey/Survey";
import Modal from "../modal/Modal";
import {deleteEvent, deleteEventUser} from "../../axios/API";
import {Context} from "../../index";
import {observable} from "mobx";
import {useNavigate} from "react-router-dom";


const Eventcard = (props) => {

    const {events} = useContext(Context)

    const [modal, setModal] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);

    const changeVisible = () => {
        setModal(true)
    }
    const [modal1, setModal1] = useState(false);


  const eventDelete = async (idUser, id) => {
    // const data = await deleteEvent(id)
    const data = await deleteEventUser(idUser, id)
    await events.updateData(data)
    console.log(data + '123123123')
  }

    const changeConfirmVisibleTrue = () => {
        setModalConfirm(true)
    }

    const confirmDisagree = () => {
        setModalConfirm(false)
    }

  const confirmAgree = async () => {
    setModalConfirm(false)
    await eventDelete(props.idUser, props.id)
  }

    const navigate = useNavigate()

    const eventStatistik = (e) => {
        e.preventDefault()
        navigate("/eventStatistik")
    }

    return (
        <div>

            <Modal visible={modalConfirm} setVisible={setModalConfirm}>
                <div className="confirmModal">
                    Вы точно хотите удалить опрос?
                    <div className="blackLine"></div>
                    <div className="confirmModalButtons">
                        <button onClick={confirmAgree} className="confirmModalButtonAgree">Да</button>
                        <button onClick={confirmDisagree} className="confirmModalButtonDisagree">Нет</button>
                    </div>
                </div>
            </Modal>

      <Modal visible={modal} setVisible={setModal}>
        <Survey eventId={props.id} visible={modal} setVisible={setModal}/>
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
                        <button className="eventcard__button-info" onClick={eventStatistik}>
                            <i className="fas fa-info-circle fa-xs"></i>
                        </button>
                        <button className="eventcard__button-refuse" onClick={changeConfirmVisibleTrue}>Удалить</button>
                        <button className="eventcard__button-agree" onClick={changeVisible}>Начать</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Eventcard;
