import React, {useContext, useState} from 'react';
import "./NavBar.css"
import Modal from "../modal/Modal";
import AddEvent from "../addEvent/AddEvent";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {deleteToken} from "../../axios/API";
import TokenService from "../../service/tokenService";

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
    const [modal3, setModal3] = useState(false);


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
        navigate("/login")
    }

    const register = () => {
        navigate("/register")
    }

    return (
        <div>
            {
                user.isAuth
                    ?
                    <div>
                        <Modal visible={modal1} setVisible={setModal1}>
                            <AddEvent visible={modal1} setVisible={setModal1} create={createEvent}/>
                        </Modal>
                        <Modal visible={modal2} setVisible={setModal2}>Modal 2</Modal>
                        <Modal visible={modal3} setVisible={setModal3}>Modal 3</Modal>
                        <div className="line">
                            <div>
                                <button className="homebtn" onClick={() => {
                                navigate('/mainpage')}
                                }>Домой</button>
                            </div>
                            <div>
                                <button onClick={changeVisible1}>Создать опрос</button>
                                <button onClick={changeVisible2}>Результаты опросов</button>
                                <button onClick={changeVisible3}>Управление пользователями</button>
                                <button onClick={register}>Создать пользователя</button>
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