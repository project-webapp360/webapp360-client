import React, {useContext, useEffect} from 'react';
import {Avatar, LinearProgress} from "@mui/material";
import "./profilePage.css"
import {Pie, PieChart, Tooltip} from "recharts";
import {Context} from "../../index";
import {useSearchParams} from "react-router-dom";
import {observer} from "mobx-react-lite";



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
let count0 = 0
let count1 = 0
let count2 = 0
let count3 = 0

let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0

const STATES = {
  INITIAL: 'initial',
  LOADING: 'loading',
  ERROR: 'error',
  LOADED: 'loaded'
}


const ProfilePage = observer(() => {

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id")
  const {userProfile} = useContext(Context)

  const {user} = useContext(Context)

  useEffect(() => {
    userProfile.fetchResult(id)
  }, [])

  const calculate = () => {
    myData0[0].value = 0
    myData0[1].value = 0
    myData0[2].value = 0
    myData0[3].value = 0
    myData1[0].value = 0
    myData1[1].value = 0
    myData1[2].value = 0
    myData1[3].value = 0
    myData2[0].value = 0
    myData2[1].value = 0
    myData2[2].value = 0
    myData2[3].value = 0
    myData3[0].value = 0
    myData3[1].value = 0
    myData3[2].value = 0
    myData3[3].value = 0

    if  (userProfile.results.results.length <= userProfile.usersCount) {
      userProfile.results.results.map((item) => {
        item.map((items,index) => {
          if (index === 0 || index === 1 || index === 2) {
            if (items === '1'){
              myData0[3].value ++;
            };
            if (items === '2'){
              myData0[2].value ++;
            };
            if (items === '3'){
              myData0[1].value ++;
            };
            if (items === '4'){
              myData0[0].value ++;
            };
          }
          if (index === 3 || index === 4 || index === 5) {
            if (items === '1'){
              myData1[3].value ++;
            };
            if (items === '2'){
              myData1[2].value ++;
            };
            if (items === '3'){
              myData1[1].value ++;
            };
            if (items === '4'){
              myData1[0].value ++;
            };
          }
          if (index === 6 || index === 7) {
            if (items === '1'){
              myData2[3].value ++;
            };
            if (items === '2'){
              myData2[2].value ++;
            };
            if (items === '3'){
              myData2[1].value ++;
            };
            if (items === '4'){
              myData2[0].value ++;
            };
          }
          if (index === 8 || index === 9) {
            if (items === '1'){
              myData3[3].value ++;
            };
            if (items === '2'){
              myData3[2].value ++;
            };
            if (items === '3'){
              myData3[1].value ++;
            };
            if (items === '4'){
              myData3[0].value ++;
            };
          }

        })
      })

      if (userProfile.results.results.length != 0){
        count0 = (myData0[0].value*5 + myData0[1].value*4 + myData0[2].value*3 + myData0[3].value*2)/(3*userProfile.results.results.length)
        count1 = (myData1[0].value*5 + myData1[1].value*4 + myData1[2].value*3 + myData1[3].value*2)/(3*userProfile.results.results.length)
        count2 = (myData2[0].value*5 + myData2[1].value*4 + myData2[2].value*3 + myData2[3].value*2)/(2*userProfile.results.results.length)
        count3 = (myData3[0].value*5 + myData3[1].value*4 + myData3[2].value*3 + myData3[3].value*2)/(2*userProfile.results.results.length)

        count0 = count0.toFixed(2)
        count1 = count1.toFixed(2)
        count2 = count2.toFixed(2)
        count3 = count3.toFixed(2)

        count5 = 0
        count6 = 0
        count7 = 0
        count8 = 0
      }
    } else {
      userProfile.results.results.map((item, index) => {
        if (index >= (userProfile.results.results.length - userProfile.usersCount)){
          item.map((items,index) => {
            if (index === 0 || index === 1 || index === 2) {
              if (items === '1'){
                myData0[3].value ++;
              };
              if (items === '2'){
                myData0[2].value ++;
              };
              if (items === '3'){
                myData0[1].value ++;
              };
              if (items === '4'){
                myData0[0].value ++;
              };
            }
            if (index === 3 || index === 4 || index === 5) {
              if (items === '1'){
                myData1[3].value ++;
              };
              if (items === '2'){
                myData1[2].value ++;
              };
              if (items === '3'){
                myData1[1].value ++;
              };
              if (items === '4'){
                myData1[0].value ++;
              };
            }
            if (index === 6 || index === 7) {
              if (items === '1'){
                myData2[3].value ++;
              };
              if (items === '2'){
                myData2[2].value ++;
              };
              if (items === '3'){
                myData2[1].value ++;
              };
              if (items === '4'){
                myData2[0].value ++;
              };
            }
            if (index === 8 || index === 9) {
              if (items === '1'){
                myData3[3].value ++;
              };
              if (items === '2'){
                myData3[2].value ++;
              };
              if (items === '3'){
                myData3[1].value ++;
              };
              if (items === '4'){
                myData3[0].value ++;
              };
            }
          })
        } else {
          if (index >= (userProfile.results.results.length - 2*userProfile.usersCount) || index < (userProfile.results.results.length - userProfile.usersCount))
            item.map((items,index) => {
              if (index === 0 || index === 1 || index === 2) {
                if (items === '1'){
                  count5 =+ 2
                };
                if (items === '2'){
                  count5 =+ 3
                };
                if (items === '3'){
                  count5 =+ 4
                };
                if (items === '4'){
                  count5 =+5
                };
              }
              if (index === 3 || index === 4 || index === 5) {
                if (items === '1'){
                  count6 =+ 2
                };
                if (items === '2'){
                  count6 =+ 3
                };
                if (items === '3'){
                  count6 =+ 4
                };
                if (items === '4'){
                  count6 =+ 5
                };
              }
              if (index === 6 || index === 7) {
                if (items === '1'){
                  count7 =+ 2
                };
                if (items === '2'){
                  count7 =+ 3
                };
                if (items === '3'){
                  count7 =+ 4
                };
                if (items === '4'){
                  count7 =+ 5
                };
              }
              if (index === 8 || index === 9) {
                if (items === '1'){
                  count8 =+ 2
                };
                if (items === '2'){
                  count8 =+ 3
                };
                if (items === '3'){
                  count8 =+ 4
                };
                if (items === '4'){
                  count8 =+ 5
                };
              }
            })
        }
      })

      if (userProfile.results.results.length != 0){
        count0 = (myData0[0].value*5 + myData0[1].value*4 + myData0[2].value*3 + myData0[3].value*2)/(3*userProfile.results.results.length)
        count1 = (myData1[0].value*5 + myData1[1].value*4 + myData1[2].value*3 + myData1[3].value*2)/(3*userProfile.results.results.length)
        count2 = (myData2[0].value*5 + myData2[1].value*4 + myData2[2].value*3 + myData2[3].value*2)/(2*userProfile.results.results.length)
        count3 = (myData3[0].value*5 + myData3[1].value*4 + myData3[2].value*3 + myData3[3].value*2)/(2*userProfile.results.results.length)

        count0 = count0.toFixed(2)
        count1 = count1.toFixed(2)
        count2 = count2.toFixed(2)
        count3 = count3.toFixed(2)

        count5 = count5.toFixed(2)
        count6 = count6.toFixed(2)
        count7 = count7.toFixed(2)
        count8 = count8.toFixed(2)
      }
    }
  }

  const switchState = (state) => {

    switch (state) {

      case STATES.INITIAL: {
        return <h1>...</h1>
      }

      case STATES.LOADING: {
        return <h1>Выполняется загрузка...</h1>
      }

      case STATES.LOADED: {
        calculate()
        return <div className="main">
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
                  <p>Работоспособность: {count0}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="success" value={count0*20}/>
                  </div>
                  <p>Ответственность: {count1}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="warning" value={count1*20}/>
                  </div>
                  <p>Общительность: {count2}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="error" value={count2*20}/>
                  </div>
                  <p>Креативность: {count3}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="inherit" value={count3*20}/>
                  </div>
                </div>
                <div className="profileInfoStatistic">
                  <div className="heading">Предыдущая общая оценка</div>
                  <div className="blackLine"></div>
                  <p>Работоспособность: {count5}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="success" value={count5*20}/>
                  </div>
                  <p>Ответственность: {count6}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="warning" value={count6*20}/>
                  </div>
                  <p>Общительность: {count7}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="error" value={count7*20}/>
                  </div>
                  <p>Креативность: {count8}/5</p>
                  <div className="profileStatisticProgressbar">
                    <LinearProgress variant="determinate" color="inherit" value={count8*20}/>
                  </div>
                </div>
              </div>
              <div className="profileInfo">
                <Avatar className="avatar" alt="" src="../profile_image.png" sx={{ width: 90, height: 90 }} />
                <div className="header">Профиль</div>
                <p>Никнэйм: {userProfile.results.nickName}</p>
                <p>Имя: {userProfile.results.firstName} {userProfile.results.lastName}</p>
                <p>Почта: {userProfile.results.email}</p>
                <p>Роль: {userProfile.results.role}</p>

              </div>
            </div>
          </div>

        </div>
      }

      default: {
        return <h1>ERROR...</h1>
      }
    }
  }


  return (
      <div>
        {switchState(userProfile.caseLoading)}
      </div>
  );
});

export default ProfilePage;