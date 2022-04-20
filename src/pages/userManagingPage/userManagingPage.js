import React from 'react';
import './userManagingPage.css'
import UserManagingCard from "../../components/user_managing_card/user_managing_card";
import {useNavigate} from "react-router-dom";

const UserManagingPage = () => {
  const navigate = useNavigate()

  const numberOfUsers = 6

  const userNames = [
    {
      number: 1,
      name: 'Вася',
      ban: false
    },
    {
      number: 2,
      name: 'Серафим',
      ban: true
    },
    {
      number: 3,
      name: 'Оля',
      ban: false
    },
    {
      number: 4,
      name: 'Олег',
      ban: false
    },
    {
      number: 5,
      name: 'Родион',
      ban: true
    }]

  const register = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <div className="mainDiv">
      <div className="topPanel">
        <div>
          <div className="number_of_users">Всего сотрудников: {numberOfUsers}</div>
          <div className="progressbar__date">Сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
        </div>
        <button className="create_button" onClick={register}>Создать нового пользователя</button>
      </div>
      <div>
        {userNames.map((item) => <UserManagingCard number={item.number} userName={item.name} banned={item.ban}/>)}
      </div>
    </div>
  );
};

export default UserManagingPage;