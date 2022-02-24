import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
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
  const [answers, setAnswers] = useState([0,0,0,0,0,0,0,0,0,0])
  const [page, setPage] = useState(1)

  const [array1, setArray1] = useState(false)
  const [array2, setArray2] = useState(false)
  const [array3, setArray3] = useState(false)
  const [array4, setArray4] = useState(false)

  const [disArray1, setDisArray1] = useState(false)
  const [disArray2, setDisArray2] = useState(false)
  const [disArray3, setDisArray3] = useState(false)
  const [disArray4, setDisArray4] = useState(false)

  const decrease = (event) => {
    setPage(page-1)
    handleCheckBox0()
    if (answers[page - 1] === 1) {
      handleCheckBox1(event)
      console.log(1)
    }
    if (answers[page - 1] === 2) {
      handleCheckBox2(event)
      console.log(2)
    }
    if (answers[page - 1] === 3) {
      handleCheckBox3(event)
      console.log(3)
    }
    if (answers[page - 1] === 4) {
      handleCheckBox4(event)
      console.log(4)
    }
  }

  const increase = (event) => {
    setPage(page+1)
    handleCheckBox0()
    if (answers[page - 1] === 1) {
      setArray1(true)
      setDisArray2(true)
      setDisArray3(true)
      setDisArray4(true)
      console.log(1)
    }
    if (answers[page - 1] === 2) {
      handleCheckBox2(event)
      console.log(2)
    }
    if (answers[page - 1] === 3) {
      handleCheckBox3(event)
      console.log(3)
    }
    if (answers[page - 1] === 4) {
      handleCheckBox4(event)
      console.log(4)
    }
  }

  const handleCheckBox0 =() => {
    setArray1(false)
    setArray2(false)
    setArray3(false)
    setArray4(false)
    setDisArray1(false)
    setDisArray2(false)
    setDisArray3(false)
    setDisArray4(false)
  }

  const handleCheckBox1 =(event) => {
    if(array1 === false) {
      setArray1(true)
      setDisArray2(true)
      setDisArray3(true)
      setDisArray4(true)
      const ans = 1
      setAnswers(answers[page-1]=ans)
      console.log(answers);
    } else {
      setArray1(false)
      setDisArray2(false)
      setDisArray3(false)
      setDisArray4(false)
      const ans = 0
      setAnswers(answers[page-1]=ans)
    }
  }
  const handleCheckBox2 =(event) => {
    if(array2 === false) {
      setArray2(true)
      setDisArray1(true)
      setDisArray3(true)
      setDisArray4(true)
      const ans = 2
      setAnswers(answers[page-1]=ans)
      console.log(answers);
    } else {
      setArray2(false)
      setDisArray1(false)
      setDisArray3(false)
      setDisArray4(false)
      const ans = 0
      setAnswers(answers[page-1]=ans)
    }
  }
  const handleCheckBox3 =(event) => {
    if(array3 === false) {
      setArray3(true)
      setDisArray1(true)
      setDisArray2(true)
      setDisArray4(true)
      const ans = 3
      setAnswers(answers[page-1]=ans)
      console.log(answers);
    } else {
      setArray3(false)
      setDisArray1(false)
      setDisArray2(false)
      setDisArray4(false)
      const ans = 0
      setAnswers(answers[page-1]=ans)
    }
  }
  const handleCheckBox4 =(event) => {
    if(array4 === false) {
      setArray4(true)
      setDisArray1(true)
      setDisArray2(true)
      setDisArray3(true)
      const ans = 4
      setAnswers(answers[page-1]=ans)
      console.log(answers);
    } else {
      setArray4(false)
      setDisArray1(false)
      setDisArray2(false)
      setDisArray3(false)
      const ans = 0
      setAnswers(answers[page-1]=ans)
    }
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
        <div className="survey__first-line">{questions[page-1]}</div>
        <FormGroup>
          <FormControlLabel onChange={handleCheckBox1} className="survey__test-form" control={<Checkbox/>} checked={array1} disabled={disArray1} label="Редко" />
          <FormControlLabel onChange={handleCheckBox2} className="survey__test-form" control={<Checkbox/>} checked={array2} disabled={disArray2} label="Часто" />
          <FormControlLabel onChange={handleCheckBox3} className="survey__test-form" control={<Checkbox/>} checked={array3} disabled={disArray3} label="Всегда" />
          <FormControlLabel onChange={handleCheckBox4} className="survey__test-form" control={<Checkbox/>} checked={array4} disabled={disArray4} label="Никогда" />
        </FormGroup>
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