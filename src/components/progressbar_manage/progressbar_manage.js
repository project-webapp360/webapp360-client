import React, {useContext} from 'react';
import {LinearProgress} from "@mui/material";
import {Context} from "../../index";
import "./progressbar_manage.css"

const Progressbar_manage = () => {

    const {events} = useContext(Context)
    const allEvents = events.events.length
    const completedEvents = 1

  return (
    <div className="progressbar">
      <p className="progressbar__text">Окончено опросов {completedEvents} из {allEvents} запущенных</p>
      <LinearProgress variant="determinate" color="secondary" value={completedEvents/allEvents*100}/>
    </div>
  );
};

export default Progressbar_manage;