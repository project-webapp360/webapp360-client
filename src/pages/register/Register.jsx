import React, {useState} from 'react';
import './register.css'
import {registration} from "../../axios/API";
import {useNavigate} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {MenuItem} from "@mui/material";


const Register = observer(() => {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState("")

  const singUp = async (e) => {
    try {
      e.preventDefault()
      const data = await registration(email, password, userRole)

      navigate("/mainpage")
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  const array = [
    {
      Name: "user",
    },
    {
      Name: "manager",
    },
    {
      Name: "admin",
    },
  ]

  return (
    <div className="mainWindowParent">

      <div className="mainWindowChild">
        <form className="mainWindowForm" onSubmit={singUp}>

          <div className="realUserName">

            <div className="input-label-div">
              <div>
                <input type="text" className="inputsDiv"/>
                <label className="labelDiv">Имя</label>
              </div>
            </div>

            <div className="input-label-div">
              <div>
                <input type="text" className="inputsDiv"/>
                <label className="labelDiv">Фамилия</label>
              </div>
            </div>

            <div className="input-label-div">
              <div>
                <input type="text" className="inputsDiv"/>
                <label className="labelDiv">Отчество</label>
              </div>
            </div>

          </div>

          <div className="blackLine"></div>

          <div className="systemUserName">

            <div className="input-label-div">
              <div>
                <input value={email} onChange={e => setEmail(e.target.value)} id={email} name={email} type="email"
                       className="inputsDiv"/>
                <label className="labelDiv" htmlFor={email}>Email</label>
              </div>
            </div>

            <div className="input-label-div">
              <div>
                <input value={password} onChange={e => setPassword(e.target.value)} id={password} name={password}
                       type="password" className="inputsDiv"/>
                <label className="labelDiv" htmlFor={password}>Пароль</label>
              </div>
            </div>

            <div className="input-label-div">
              <div className="mySelectDiv">
                <select className="labelSelect" value={userRole} label="user" name="" id="" onChange={event => setUserRole(event.target.value)}>
                  {array.map((e) =>
                    <option value={e.Name}>{e.Name}</option>
                  )}
                </select>
              </div>
              <label className="labelDiv" htmlFor={userRole}>Роль</label>
            </div>
          </div>

          <button className="createButton">Создать нового пользователя</button>
        </form>
      </div>

    </div>
  );
});

export default Register;


/*
<div>

    <div className="super valign-wrapper center ">
        <div className="row form-border">
            <form className="col s12" onSubmit={signIn}>

                <div className="row">
                    <div className="input-field col s12">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="validate"/>
                        <label>Email</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="validate"/>
                        <label >Пароль</label>
                    </div>
                </div>

                <button className="btn z-depth-0 light-blue lighten-3 waves-effect waves-light">Войти
                </button>
            </form>

        </div>
    </div>

</div>*/
