import React, {useContext} from 'react';
import "./user_managing_card.css"
import {bannedUser, getUsers, unbannedUser} from "../../axios/API";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

const UserManagingCard = (props) => {

  const {user, users} = useContext(Context)
  const navigate = useNavigate()

  // function ban () {
  //  // props.banned = true
  //   console.log(props.number);
  //
  // }

  const testButton = async() => {
    console.log(await getUsers())
  }

  const userBanned = async() => {
      const data = await bannedUser(props.userName)
      await users.updateMobx()
      console.log(data)
  }

    const userUnbanned = async() => {
        const data = await unbannedUser(props.userName)
        await users.updateMobx()
        console.log(data)
    }

    const userStatisticPageNavigate = () => {
        navigate('/userStatisticPage')
    }

  return (
      <div>
      {
        props.userRole === user.user.role ?
            <div>
              {props.banned === false
                  ?
                  <div className="user-card">
                    <div className="user_info_div">
                      <button onClick={userStatisticPageNavigate} className="user-card__button__info">
                        <i className="fas fa-info-circle fa-xs"></i>
                      </button>
                      <div className="user-card__title">{props.userName} - {props.userRole}</div>
                    </div>
                    <div>
                      {/*<button className="user-card__button__bun">Заблокировать</button>*/}
                    </div>
                  </div>
                  :
                  <div className="user-card">
                    <div className="user_info_div">
                      <button onClick={userStatisticPageNavigate} className="user-card__button__info">
                        <i className="fas fa-info-circle fa-xs"></i>
                      </button>
                      <div className="user-card__title">{props.userName} - {props.userRole}</div>
                    </div>
                    <div>
                      <button className="user-card__button">Разблокировать</button>
                    </div>
                  </div>
              }

            </div>
            :
            <div>
              {props.banned === false
                  ?
                  <div className="user-card">
                    <div className="user_info_div">
                      <button onClick={userStatisticPageNavigate} className="user-card__button__info">
                        <i className="fas fa-info-circle fa-xs"></i>
                      </button>
                      <div className="user-card__title">{props.userName} - {props.userRole}</div>
                    </div>
                    <div>
                      <button onClick={() => {userBanned()}} className="user-card__button__bun">Заблокировать</button>
                    </div>
                  </div>
                  :
                  <div className="user-card">
                    <div className="user_info_div">
                      <button onClick={userStatisticPageNavigate} className="user-card__button__info">
                        <i className="fas fa-info-circle fa-xs"></i>
                      </button>
                      <div className="user-card__title">{props.userName} - {props.userRole}</div>
                    </div>
                    <div>
                      <button onClick={() => {userUnbanned()}} className="user-card__button">Разблокировать</button>
                    </div>
                  </div>
              }

            </div>
      }
      </div>
  );
};

export default UserManagingCard;