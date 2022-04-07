import React, {useState} from 'react';
import './register.css'
import {registration} from "../../axios/API";
import {useNavigate} from 'react-router-dom'
import {observer} from "mobx-react-lite";


const Register = observer(() => {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const singUp = async (e) => {
    try {
      e.preventDefault()
      const data = await registration(email, password, role)

      navigate("/mainpage")
    } catch (e) {
      alert(e.response.data.message)
    }
  }


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

          <div className="systemUserName">

            <div className="input-label-div">
              <div>
                <input  value={email} onChange={e => setEmail(e.target.value)} id={email} name={email} type="email"
                        className="inputsDiv"/>
                <label className="labelDiv" htmlFor={email}>Email</label>
              </div>
            </div>

            <div className="input-label-div">
              <div>
                <input  value={password} onChange={e => setPassword(e.target.value)} id={password} name={password}
                        type="password" className="inputsDiv"/>
                <label className="labelDiv" htmlFor={password}>Пароль</label>
              </div>
            </div>

            <div className="input-label-div">
              <div>
                <input value={role} onChange={e => setRole(e.target.value)} id={role} name={role} type="text"
                       className="inputsDiv"/>
                <label className="labelDiv" htmlFor={role}>Роль</label>
              </div>
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
