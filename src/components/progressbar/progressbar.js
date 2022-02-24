import React from 'react';
import {LinearProgress} from "@mui/material";
import "./progressbar.css"

const Progressbar = () => {



  return (
    <div className="progressbar">
      <p className="progressbar__text">пройдено 8 тестов из 10 возможных</p>
      <LinearProgress variant="determinate" value={80}/>
      <div className="progressbar__date">сегодня: {new Date().toLocaleDateString("fr-CA")}</div>
    </div>
  );
};

export default Progressbar;