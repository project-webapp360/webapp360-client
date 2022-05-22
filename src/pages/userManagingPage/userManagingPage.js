import React, {useContext, useEffect} from 'react';
import './userManagingPage.css'
import UserManagingCard from "../../components/user_managing_card/user_managing_card";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import Eventcard from "../../components/eventcard/Eventcard";
import {observer} from "mobx-react-lite";

const STATES = {
  INITIAL: 'initial',
  LOADING: 'loading',
  ERROR: 'error',
  LOADED: 'loaded'
}

const UserManagingPage = observer(() => {
  const navigate = useNavigate()

  const {users, user} = useContext(Context)

  const register = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  useEffect(   () => {
    users.fetchData()
  }, [users.loading])

  const switchState = (state) => {
    switch (state) {

      case STATES.INITIAL: {
        return <h1>...</h1>
      }

      case STATES.LOADING: {
        return <h1>Выполняется загрузка...</h1>
      }

      case STATES.LOADED: {
        console.log(users.users)
        // return users.users.map((item) => <h1>{item.email}</h1>)
        // let result = users.users.filter(item => item.email !== user.user.email)
        return users.users.map((item) => <UserManagingCard userName={item.email} userRole={item.role} banned={item.isBanned}/>)
      }

      default: {
        return <h1>ERROR...</h1>
      }

    }
  }

  return (
    <div className="mainDiv">
      <div className="topPanel">
        <div>
          <div className="number_of_users">Всего сотрудников: {users.users.length}</div>
          <div className="userManagingPage_Date">Сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
        </div>
        <button className="create_button" onClick={register}>Создать нового пользователя</button>
      </div>
      <div>
        {/*{userNames.map((item) => <UserManagingCard number={item.number} userName={item.name} banned={item.ban}/>)}*/}
        {switchState(users.caseLoading)}
      </div>
    </div>
  );
});

export default UserManagingPage;