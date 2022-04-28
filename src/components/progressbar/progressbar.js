import React, {useContext} from 'react';
import {LinearProgress} from "@mui/material";
import {Context} from "../../index";
import "./progressbar.css"

const Progressbar = () => {

    const {events} = useContext(Context)
    const allEvents = events.events.length
    const completedEvents = 1

  return (
    <div className="progressbar">
      <p className="progressbar__text">Пройдено {completedEvents} тестов из {allEvents} возможных</p>
      <LinearProgress variant="determinate" value={completedEvents/allEvents*100}/>
      <div className="progressbar__date">Сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
    </div>
  );
};

export default Progressbar;