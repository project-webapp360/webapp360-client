import React from 'react';
import {Avatar, CircularProgress, LinearProgress} from "@mui/material";
import "./profilePage.css"

const ProfilePage = () => {
  return (
    <div className="main">

      <div className="profileContent">
        <div className="profileInfo">
          <Avatar className="avatar" alt="" src="../profile_image.png" sx={{ width: 90, height: 90 }} />
          <div className="header">Профиль</div>
          <p>Имя: Солонников Виктор</p>
          <p>Роль: ADMIN</p>
          <p>Почта: AIM325@ya.ru</p>
          <p>Средняя оценка:
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
        </div>


        <div className="profileStatistic">

            <div className="profileStatisticProgress">
              <div>
                <CircularProgress variant="determinate" color="success" size={150} value={77}/>
                <p>Общительность</p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="profileStatisticProgress">
              <div>
                <CircularProgress variant="determinate" color="secondary" size={150} value={95}/>
                <p>Креативность</p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>

            <div className="profileStatisticProgress">
              <div>
                <CircularProgress variant="determinate" color="error" size={150} value={33}/>
                <p>Трудолюбие</p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="profileStatisticProgress">
              <div>
                <CircularProgress variant="determinate" color="info" size={150} value={67}/>
                <p>Исполнительность</p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;