import React, {useContext, useState} from 'react';
import './login.css'
import {deleteToken, login, registration} from "../../axios/API";
import {useNavigate} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import UserService from '../../service/userService'
import TokenService from "../../service/tokenService";

const tokenService = new TokenService()


const Login = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (e) => {
        try {
            e.preventDefault()
            const data = await login(email, password)
            console.log(data.email)

            user.setUser(data)
            user.setIsAuth(true)
            // localStorage.setItem('user', JSON.stringify(data))
            // localStorage.setItem('isAuth', "true")
            navigate("/mainpage")
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const logout = async () => {
        deleteToken(user.user.id)
        user.setIsAuth(false)
        user.setUser({})
        // localStorage.setItem('user', JSON.stringify(''))
        // localStorage.setItem('isAuth', "false")
        // localStorage.setItem('token', '')
        tokenService.unbindToken('accessToken')
        tokenService.unbindToken('refreshToken')
        navigate("/login")
    }


    return (
        <div>

            <div className="super valign-wrapper center ">
                <div className="row form-border">
                    <form className="col s12" onSubmit={signIn}>

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

                        <button className="btn z-depth-0 light-blue lighten-3 waves-effect waves-light">Войти
                        </button>
                    </form>

                </div>
            </div>

        </div>
    );
});

export default Login;


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
