import React from 'react';
import "./user_managing_card.css"

const UserManagingCard = (props) => {

  function ban () {
   // props.banned = true
    console.log(props.number);

  }

  return (
    <div>
      {props.banned === false
        ?
        <div className="user-card">
          <div className="user-card__title">{props.userName}</div>
          <div>
            <button onClick={ban} className="user-card__button">БАН!!!</button>
          </div>
        </div>
        :
        <div className="user-card">
          <div className="user-card__title">{props.userName}</div>
          <div>
            <button className="user-card__button">РазБАНить?</button>
          </div>
        </div>
      }

    </div>
  );
};

export default UserManagingCard;