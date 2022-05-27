import React, {useContext, useEffect, useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import "./Survey.css"
import Modal from "../modal/Modal";
import {sendResultsUser} from "../../axios/API";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const Survey = observer(({eventId, visible, setVisible, type, targetEmail}) => {

  const {user, events} = useContext(Context)

  const [questionsUser, setQuestionsUser] = useState([
    "На Ваш взгляд, развиваются ли профессиональные навыки сотрудника?",
    "Видит ли сотрудник свои ошибки и умеет ли их анализировать?",
    "Всегда ли вы удовлетворены работой данного сотрудника?",
    "Выполняет ли сотрудник свою работу в срок?",
    "Предупреждает ли сотрудник о своих проблемах в работе?",
    "Часто ли сотрудник отлынивает от работы?",
    "Иван умеет находить общий язык со своими коллегами?",
    "Просит ли Иван помощь в работе, если не справляется сам?",
    "Всегда ли сотрудник доволен выполнением своей работы?",
    "Предлагает ли сотрудник новые идеи и решения?",
  ])

  const [questionsManager, setQuestionsManager] = useState([
       "Всегда ли вы довольны руководителем?",
       "Как часто руководитель умело организует вашу деятельность?",
       "Всегда ли вы доверяете начальнику?",
       "Всегда ли руководитель слушает свою команду?",
       "Часто руководитель даёт команде советы?",
       "Часто ли у вас появляется ощущение, что руководитель ничего не делает?",
       "Всегда ли руководитель ясно доводит цели для вашей команды?",
       "Как часто вам интересно слушать вашего руководителя?",
       "Как часто руководитель находчив?",
       "Как часто руководство отмечало ваши заслуги?",

  ])
  const [answers, setAnswers] = useState(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
  const [page, setPage] = useState(1)
  const [value, setValue] = useState(0);

    const decrease = (event) => {
    console.log(page)
    setPage(page - 1)
    getAnswer(page - 2)
  }

  const increase = (event) => {
    console.log(page)
    setPage(page + 1)
    getAnswer(page)
  }

  const [modal, setModal] = useState(false);
  const changeVisible = () => {
    setModal(true)
  }

  const changeOffVisible = () => {
    setModal(false)
  }

  const sendAnswers = async (e) => {
    e.preventDefault()
    setModal(false)
    setVisible(false)
    await sendResultsUser(eventId, answers, user.user.id, targetEmail)
    await events.updateData(user.user.id)
  }

  const testSendAnswers = async (e) => {
    e.preventDefault()
    setModal(false)
    setVisible(false)
    await sendResultsUser(eventId, ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4',], user.user.id, targetEmail)
    await events.updateData(user.user.id)
  }

  const changeAllVisible = () => {
    setModal(false)
    setVisible(false)
  }


  const handleRadioChange = (event) => {
    setValue(event.target.value)
    answers[page - 1] = event.target.value
  };

  const getAnswer = (num) => {
    const timed = answers[num]
    setValue(timed)
  };

  useEffect(() => {

  }, [])

  return (
    <div>
      <Modal visible={modal} setVisible={setModal}>
        <div className="survey__modal">
          Вы точно хотите завершить опрос?
          <div className="survey__modal-buttons">
            <button onClick={changeAllVisible} className="survey__button">Да</button>
            <button onClick={changeOffVisible} className="survey__button-end">Нет</button>
          </div>
        </div>
      </Modal>

      <div className="survey__main">
        <div className="survey__first-line-number">Вопрос {page}</div>


        <FormControl variant="standard">
          {type === 0
              ?
              <FormLabel className="survey__first-line">{questionsUser[page - 1]}</FormLabel>
              :
              <div></div>
          }
          {type === 1
              ?
              <FormLabel className="survey__first-line">{questionsManager[page - 1]}</FormLabel>
              :
              <div></div>
          }
          <RadioGroup
            className="survey__test-form"
            defaultValue={value}
            name="radio-buttons-group"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="4" control={<Radio/>} label="Всегда"/>
            <FormControlLabel value="3" control={<Radio/>} label="Часто"/>
            <FormControlLabel value="2" control={<Radio/>} label="Редко"/>
            <FormControlLabel value="1" control={<Radio/>} label="Никогда"/>
          </RadioGroup>
        </FormControl>

        <div className="survey__navigation">
          <div className="survey__page">{page} из 10</div>
          <div className="button__group">
            {/*<button onClick={testSendAnswers}>Test</button>*/}
            {page > 1
                ?
                <button className="survey__button" onClick={decrease}>Назад</button>
                :
                <button disabled className="survey__button">Назад</button>
            }
            {page < 10 && answers[page - 1] != 0
                ?
                <button className="survey__button" onClick={increase}>Вперёд</button>
                :
                <button disabled className="survey__button" onClick={increase}>Вперёд</button>
            }
            {page === 10 && answers[page - 1] != 0
                ?
                <button onClick={sendAnswers} className="survey__button-end">Завершить</button>
                :
                <div></div>
            }
            {page === 10 && answers[page - 1] === 0
                ?
                <button disabled onClick={sendAnswers} className="survey__button-end">Завершить</button>
                :
                <div></div>
            }
          </div>
        </div>

      </div>
    </div>
  );
});

export default Survey;