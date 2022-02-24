import React, {useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from Yrial";
import "./Survey.css"
import Modal from "../modal/Modal";

const Survey = ({visible, setVisible}) => {

  const [questions, setQuestions] = useState([
    "Вы сталкиваетесь с трудностями в общении в процессе работы?",
    "Выполняет ли в срок Иван свою работу?",
    "Помогаете ли Вы друг другу с Иваном в коллективной работе?",
    "Иванов предупреждает о проблемах в работе?",
    "Пунктуален ли Иван Иванов?",
    "На Ваш взгляд, развиваются ли профессиональные навыки Ивана?",
    "Просит ли Иван помощь в работе, если не справляется сам?",
    "Видит ли Иванов свои ошибки и умеет ли их анализировать?",
    "Иванов предлагает новые идеи и решения?",
    "Иван умеет находить общий язык со своими коллегами?",
  ])
  const [answers, setAnswers] = useState([0,0,0,0,0,0,0,0,0,0,])
  const [page, setPage] = useState(1)
  const [value, setValue] = useState(0);

  const decrease = (event) => {
    console.log(page)
    setPage(page-1)
    getAnswer(page-2)
  }

  const increase = (event) => {
    console.log(page)
    setPage(page+1)
    getAnswer(page)
  }

  const [modal,setModal] = useState(false);
  const changeVisible = () => {
    setModal(true)
  }

  const changeOffVisible = () => {
    setModal(false)
  }

  const changeAllVisible = () => {
    setModal(false)
    setVisible(false)
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value)
    answers[page-1] = event.target.value
  };

  const getAnswer = (num) => {
    const timed = answers[num]
    setValue(timed)
  };

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
        <FormLabel className="survey__first-line">{questions[page-1]}</FormLabel>
        <RadioGroup
          className="survey__test-form"
          defaultValue={value}
          name="radio-buttons-group"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Редко" />
          <FormControlLabel value="2" control={<Radio />} label="Часто" />
          <FormControlLabel value="3" control={<Radio />} label="Всегда" />
          <FormControlLabel value="4" control={<Radio />} label="Никогда" />
        </RadioGroup>
      </FormControl>
        <div className="survey__navigation">
          <div className="survey__page">{page} из 10</div>
          {page > 1
            ?
            <button className="survey__button" onClick={decrease}>Назад</button>
            :
            <button disabled className="survey__button">Назад</button>
          }
          {page < 10
            ?
            <button className="survey__button" onClick={increase}>Вперёд</button>
            :
            <button disabled className="survey__button">Вперёд</button>
          }
          <button onClick={changeVisible} className="survey__button-end">Завершить</button>
        </div>
      </div>
    </div>
  );
};

export default Survey;