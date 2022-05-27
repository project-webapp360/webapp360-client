import React, {useContext, useState} from 'react';
import "./NavBar.css"
import Modal from "../modal/Modal";
import AddEvent from "../addEvent/AddEvent";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {deleteToken} from "../../axios/API";
import TokenService from "../../service/tokenService";
import Eventcard from "../eventcard/Eventcard";

const tokenService = new TokenService()

const NavBar = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logout = async () => {
        deleteToken(user.user.id)
        user.setIsAuth(false)
        user.setUser({})
        // localStorage.setItem('user', JSON.stringify(''))
        // localStorage.setItem('isAuth', "false")
        // localStorage.setItem('token', '')
        tokenService.unbindToken('accessToken')
        tokenService.unbindToken('refreshToken')
        navigate('/login')
    }

    const userManagingNavigate = () => {
        navigate('/UserManagingPage')
    }

    const userProfileNavigate = () => {
        navigate(`/ProfilePage/?id=${user.user.id}`)
    }

    const switchPermission = (role) => {
        switch (role) {

            case 'USER': {
                return (
                  <div>
                    <div className="line">
                        <div>
                            <button className="homebtn" onClick={() => {navigate('/mainpage')}}>
                                <i className="fa fa-home"></i>
                            </button>
                        </div>
                        <div className="logo">Обзор-360</div>
                        <div>
                            <button onClick={userProfileNavigate}>
                                <i className="fa fa-user"></i>
                            </button>
                            <button onClick={logout}>Выйти</button>
                        </div>
                    </div>
                </div>
                );}

            case 'MANAGER': {
                return (<div>
                    <div className="line">
                        <div>
                            <button className="homebtn" onClick={() => {navigate('/mainpage')}}>
                                <i className="fa fa-home"></i>
                            </button>
                            <button onClick={userProfileNavigate}>
                                <i className="fa fa-user"></i>
                            </button>
                        </div>
                        <div className="logo">Обзор-360</div>
                        <div>
                            <button onClick={logout}>Выйти</button>
                        </div>
                    </div>
                </div>
            );}

            case 'ADMIN': {
                return (
                <div>
                    <div className="line">
                        <div>
                            <button className="homebtn" onClick={() => {
                                navigate('/mainpage')
                            }}>
                                <i className="fa fa-home"></i>
                            </button>
                            <button onClick={userProfileNavigate}>
                                <i className="fa fa-user"></i>
                            </button>
                        </div>
                        <div className="logo">Обзор-360</div>
                        <div>
                            <button onClick={userManagingNavigate}>Управление пользователями</button>
                            <button onClick={logout}>Выйти</button>
                        </div>
                    </div>
                </div>
            );}

            default: {
                return (
                  <div className="line">
                      <div className="logo">Обзор-360</div>
                  </div>
                );}

        }
    }

    return (
      <div>
          {switchPermission(user.user.role)}
      </div>
       /* <div>
            {
                user.isAuth
                    ?
                    <div>
                        <Modal visible={modal1} setVisible={setModal1}>
                            <AddEvent setVisible={setModal1} create={createEvent}/>
                        </Modal>
                        <div className="line">
                            <div>
                                <button className="homebtn" onClick={() => {navigate('/mainpage')}}>
                                    <i className="fa fa-home"></i>
                                </button>
                            </div>
                            <div className="logo">Обзор-360</div>
                            <div>
                                <button onClick={userProfileNavigate}>
                                    <i className="fa fa-user"></i>
                                </button>
                                <button onClick={changeVisible1}>Создать опрос</button>
                                <button onClick={userManagingNavigate}>Управление пользователями</button>
                                <button onClick={logout}>Выйти</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="line">
                        <button>Авторизоваться</button>
                    </div>
            }
        </div>*/
    );
});
export default NavBar;