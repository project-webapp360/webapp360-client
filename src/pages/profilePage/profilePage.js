import React from 'react';
import {Avatar, CircularProgress, LinearProgress} from "@mui/material";
import "./profilePage.css"
import {Pie, PieChart, Tooltip} from "recharts";

const myData0 = [
  {name: "Отлично", value: 1, fill: "#2ed27a"},
  {name: "Хорошо", value: 2, fill: "#fdb846"},
  {name: "нормально", value: 3, fill: "#f5675b"},
  {name: "Плохо", value: 3, fill: "#707683"},
];

const myData1 = [
  {name: "Отлично", value: 4, fill: "#2ed27a"},
  {name: "Хорошо", value: 1, fill: "#fdb846"},
  {name: "нормально", value: 2, fill: "#f5675b"},
  {name: "Плохо", value: 3, fill: "#707683"},
];
const myData2 = [
  {name: "Отлично", value: 1, fill: "#2ed27a"},
  {name: "Хорошо", value: 5, fill: "#fdb846"},
  {name: "нормально", value: 3, fill: "#f5675b"},
  {name: "Плохо", value: 1, fill: "#707683"},
];
const myData3 = [
  {name: "Отлично", value: 3, fill: "#2ed27a"},
  {name: "Хорошо", value: 5, fill: "#fdb846"},
  {name: "нормально", value: 2, fill: "#f5675b"},
  {name: "Плохо", value: 3, fill: "#707683"},
];

const ProfilePage = () => {
  return (
    <div className="main">

      <div className="profileContent">
        <div className="profileInfo">
          <Avatar className="avatar" alt="" src="../profile_image.png" sx={{ width: 90, height: 90 }} />
          <div className="header">Профиль</div>
          <p>Никнэйм: Дятел</p>
          <p>Имя: Солонников Виктор</p>
          <p>Почта: AIM325@ya.ru</p>
          <p>Роль: ADMIN</p>

        </div>


        <div className="profileStatistic">

            <div className="profileStatisticProgress">
              <div>
                <PieChart width={150} height={150}>
                  <Pie
                      dataKey="value"
                      isAnimationActive={true}
                      data={myData0}
                      outerRadius={75}
                      fill="orangered"
                  />
                  <Tooltip/>
                </PieChart>
                {/*<CircularProgress variant="determinate" color="success" size={150} value={77}/>*/}
                <p>Работоспособность</p>
              </div>
              {/*<div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>*/}
            </div>
            <div className="profileStatisticProgress">
              <div>
                <PieChart width={150} height={150}>
                  <Pie
                      dataKey="value"
                      isAnimationActive={true}
                      data={myData1}
                      outerRadius={75}
                      fill="orangered"
                  />
                  <Tooltip/>
                </PieChart>
                {/*<CircularProgress variant="determinate" color="secondary" size={150} value={95}/>*/}
                <p>Ответственность</p>
              </div>
              {/*<div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>*/}
            </div>

            <div className="profileStatisticProgress">
              <div>
                <PieChart width={150} height={150}>
                  <Pie
                      dataKey="value"
                      isAnimationActive={true}
                      data={myData2}
                      outerRadius={75}
                      fill="orangered"
                  />
                  <Tooltip/>
                </PieChart>
                {/*<CircularProgress variant="determinate" color="error" size={150} value={33}/>*/}
                <p>Общительность</p>
              </div>
              {/*<div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>*/}
            </div>
            <div className="profileStatisticProgress">
              <div>
                <PieChart width={150} height={150}>
                  <Pie
                      dataKey="value"
                      isAnimationActive={true}
                      data={myData3}
                      outerRadius={75}
                      fill="orangered"
                  />
                  <Tooltip/>
                </PieChart>
                {/*<CircularProgress variant="determinate" color="info" size={150} value={67}/>*/}
                <p>Креативность</p>
              </div>
              {/*<div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>*/}
            </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;