import React from 'react';
import {Avatar, LinearProgress} from "@mui/material";
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
const count0 = 0
const count1 = 0
const count2 = 0
const count3 = 0


const ProfilePage = () => {
  return (
    <div className="main">
      <div className="profileContent">
        <div className="profileStatistic">
          <div className="statistik__main__statistik">
            <div className="statistic__pair">
              <div className="statistik__pie__div">
                <div className="statistik__pie__div__left">
                  <p>Работоспособность</p>
                  <div>
                    <div className="blackLine"></div>
                    <PieChart width={200} height={200}>
                      <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={myData0}
                          outerRadius={100}
                          fill="orangered"
                      />
                    </PieChart>
                    <div className="inner__text">{count0}</div>
                  </div>

                </div>
                <div className="statistik__pie__div__right">
                  <div className="circleDiv">
                    <div className="circleGreen"></div>
                    <p>Отлично</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleYellow"></div>
                    <p>Хорошо</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleRed"></div>
                    <p>Нормально</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleBlack"></div>
                    <p>Плохо</p>
                  </div>
                </div>

              </div>
              <div className="statistik__pie__div">

                <div className="statistik__pie__div__left">
                  <p>Ответственность</p>
                  <div className="blackLine"></div>
                  <div>
                    <PieChart width={200} height={200}>
                      <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={myData1}
                          outerRadius={100}
                          fill="orangered"
                      />
                    </PieChart>
                    <div className="inner__text">{count1}</div>
                  </div>
                </div>

                <div className="statistik__pie__div__right">
                  <div className="circleDiv">
                    <div className="circleGreen"></div>
                    <p>Отлично</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleYellow"></div>
                    <p>Хорошо</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleRed"></div>
                    <p>Нормально</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleBlack"></div>
                    <p>Плохо</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="statistic__pair">
              <div className="statistik__pie__div">

                <div className="statistik__pie__div__left">
                  <p>Общительность</p>
                  <div className="blackLine"></div>
                  <div><PieChart width={200} height={200}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={myData2}
                        outerRadius={100}
                        fill="orangered"
                    />
                  </PieChart>
                    <div className="inner__text">{count2}</div>
                  </div>
                </div>

                <div className="statistik__pie__div__right">
                  <div className="circleDiv">
                    <div className="circleGreen"></div>
                    <p>Отлично</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleYellow"></div>
                    <p>Хорошо</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleRed"></div>
                    <p>Нормально</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleBlack"></div>
                    <p>Плохо</p>
                  </div>
                </div>

              </div>
              <div className="statistik__pie__div">

                <div className="statistik__pie__div__left">
                  <p>Креативность</p>
                  <div className="blackLine"></div>
                  <div>
                    <PieChart width={200} height={200}>
                      <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={myData3}
                          outerRadius={100}
                          fill="orangered"
                      />
                    </PieChart>
                    <div className="inner__text">{count3}</div>
                  </div>
                </div>

                <div className="statistik__pie__div__right">
                  <div className="circleDiv">
                    <div className="circleGreen"></div>
                    <p>Отлично</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleYellow"></div>
                    <p>Хорошо</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleRed"></div>
                    <p>Нормально</p>
                  </div>
                  <div className="circleDiv">
                    <div className="circleBlack"></div>
                    <p>Плохо</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="profileInfoMain">
          <div className="profileInfoStatisticGroup">
            <div className="profileInfoStatistic">
              <div className="heading">Общая оценка</div>
              <div className="blackLine"></div>
              <p>Работоспособность: 1.00/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="success" value={20}/>
              </div>
              <p>Ответственность: 2.00/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="warning" value={40}/>
              </div>
              <p>Общительность: 3.00/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="error" value={60}/>
              </div>
              <p>Креативность: 4.00/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="inherit" value={80}/>
              </div>
            </div>
            <div className="profileInfoStatistic">
              <div className="heading">Предыдущая общая оценка</div>
              <div className="blackLine"></div>
              <p>Работоспособность: 0.75/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="success" value={15}/>
              </div>
              <p>Ответственность: 2.50/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="warning" value={30}/>
              </div>
              <p>Общительность: 3.25/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="error" value={65}/>
              </div>
              <p>Креативность: 3.25/5</p>
              <div className="profileStatisticProgressbar">
                <LinearProgress variant="determinate" color="inherit" value={65}/>
              </div>
            </div>
          </div>
          <div className="profileInfo">
            <Avatar className="avatar" alt="" src="../profile_image.png" sx={{ width: 90, height: 90 }} />
            <div className="header">Профиль</div>
            <p>Никнэйм: Дятел</p>
            <p>Имя: Солонников Виктор</p>
            <p>Почта: AIM325@ya.ru</p>
            <p>Роль: ADMIN</p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;