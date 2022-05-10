import React from 'react';
import "./user_managing_card.css"
import {getUsers} from "../../axios/API";

const UserManagingCard = (props) => {

  // function ban () {
  //  // props.banned = true
  //   console.log(props.number);
  //
  // }

  const testButton = async() => {
    console.log(await getUsers())
  }

  return (
    <div>
      {props.banned === false
        ?
        <div className="user-card">
          <div className="user_info_div">
            <button className="user-card__button__info">
              <i className="fas fa-info-circle fa-xs"></i>
            </button>
            <div className="user-card__title">{props.userName} - {props.userRole}</div>
          </div>
          <div>
            <button className="user-card__button__bun">Заблокировать</button>
          </div>
        </div>
        :
        <div className="user-card">
          <div className="user_info_div">
            <button onClick={testButton} className="user-card__button__info">
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
  );
};

export default UserManagingCard;