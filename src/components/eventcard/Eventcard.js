import React from 'react';
import "./Eventcard.css"
import {Link} from "react-router-dom";

const Eventcard = (props) => {
  return (
    <div className="eventcard">
      <div className="eventcard__firstString">
        <div className="eventcard__title">{props.title}</div>
        <div className="eventcard__testCreator">Тест от: {props.creator}</div>
      </div>
      <div className="eventcard__date-start">начало теста: {props.dateStart}</div>
      <div className="eventcard__date-end">конец теста: {props.dateEnd}</div>
      <div className="eventcard__lastString">
        <div className="eventcard__name">тест на: {props.name}</div>
        <div className="eventcard__buttons">
          <Link to="/mainpage" className="eventcard__button-refuse">отклонить</Link>
          <Link to="/quiz" className="eventcard__button-agree">принять</Link>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
