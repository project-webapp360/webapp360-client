import React from 'react';
import "./user_managing.css"
import UserManagingCard from "../user_managing_card/user_managing_card";
import {useNavigate} from "react-router-dom";

const UserManaging = (props) => {
  const navigate = useNavigate()

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
    props.setVisible(false);
  }

  return (
    <div>
      <button className="create-button" onClick={register}>Создать нового пользователя</button>
      {userNames.map((item) => <UserManagingCard number={item.number} userName={item.name} banned={item.ban}/>)}
    </div>
  );
};

export default UserManaging;