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
        <div>

            <div className="super valign-wrapper center ">
                <div className="row form-border">
                    <form className="col s12" onSubmit={singUp}>

                        <div className="row">
                            <div className="input-field col s12">
                                <input value={email} onChange={e => setEmail(e.target.value)} id={email} name={email} type="email" className="validate"/>
                                    <label htmlFor={email}>Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input value={password} onChange={e => setPassword(e.target.value)} id={password} name={password} type="password" className="validate"/>
                                    <label htmlFor={password}>Пароль</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input value={role} onChange={e => setRole(e.target.value)} id={role} name={role} type="text" className="validate"/>
                                <label htmlFor={role}>Роль</label>
                            </div>
                        </div>

                        <button className="btn z-depth-0 light-blue lighten-3 waves-effect waves-light">Создать
                        </button>
                    </form>

                </div>
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
