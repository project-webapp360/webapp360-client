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

    const [EventCardData, setEventCardData] = useState([
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Админ'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },])
    const listLength = EventCardData.length


    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal4, setModal3] = useState(false);


    const changeVisible1 = () => {
        setModal1(true)
    }

    const changeVisible2 = () => {
        setModal2(true)
    }

    const changeVisible3 = () => {
        setModal3(true)
    }

    const createEvent = (newEvent) => {
        setEventCardData([...EventCardData, newEvent])
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
        navigate('/login')
    }

    const userManagingNavigate = () => {
        navigate('/UserManagingPage')
    }

    const userProfileNavigate = () => {
        navigate("/profilePage")
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
                            <button onClick={logout}>Выйти</button>
                        </div>
                    </div>
                </div>
            );}

            case 'ADMIN': {
                return (
                <div>
                    <Modal visible={modal1} setVisible={setModal1}>
                        <AddEvent setVisible={setModal1} create={createEvent}/>
                    </Modal>
                    <div className="line">
                        <div>
                            <button className="homebtn" onClick={() => {
                                navigate('/mainpage')
                            }}>
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
      /*<div>
          {switchPermission(role)}
      </div>*/
        <div>
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
        </div>
    );
});
export default NavBar;