import React, {useContext} from 'react';
import {LinearProgress} from "@mui/material";
import "./progressbar.css"
import {Context} from "../../index";

const Progressbar = () => {

    const {events} = useContext(Context)
    const allEvents = events.events.length
    const completedEvents = 1

  return (
    <div className="progressbar">
      <p className="progressbar__text">пройдено {completedEvents} тестов из {allEvents} возможных</p>
      <LinearProgress variant="determinate" value={completedEvents/allEvents*100}/>
      <div className="progressbar__date">сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
    </div>
  );
};

export default Progressbar;