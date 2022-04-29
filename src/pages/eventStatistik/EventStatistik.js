import React, {useContext, useEffect} from "react";
/*import Modal from "../modal/Modal";*/
import "hammerjs";
import "./EventStatistik.css";
import "@progress/kendo-theme-material/dist/all.css";
import {Pie, PieChart, Tooltip} from "recharts";
import {LinearProgress} from "@mui/material";
import Eventcard from "../../components/eventcard/Eventcard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useSearchParams} from "react-router-dom";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

const labelContent = e => e.category;

const renderTooltip = context => {
    const {category, value} = context.point || context;
    return (
        <div>
            {category}: {value}%
        </div>
    );
};


const myData0 = [
    {name: "Отлично", value: 0, fill: "#2ed27a"},
    {name: "Хорошо", value: 0, fill: "#fdb846"},
    {name: "нормально", value: 0, fill: "#f5675b"},
    {name: "Плохо", value: 0, fill: "#707683"},
    {name: "Нету результатов", value: 1, fill: "#466fc5"},
];

const myData1 = [
    {name: "Отлично", value: 0, fill: "#2ed27a"},
    {name: "Хорошо", value: 0, fill: "#fdb846"},
    {name: "нормально", value: 0, fill: "#f5675b"},
    {name: "Плохо", value: 0, fill: "#707683"},
    {name: "Нету результатов", value: 1, fill: "#466fc5"},
];
const myData2 = [
    {name: "Отлично", value: 0, fill: "#2ed27a"},
    {name: "Хорошо", value: 0, fill: "#fdb846"},
    {name: "нормально", value: 0, fill: "#f5675b"},
    {name: "Плохо", value: 0, fill: "#707683"},
    {name: "Нету результатов", value: 1, fill: "#466fc5"},
];
const myData3 = [
    {name: "Отлично", value: 0, fill: "#2ed27a"},
    {name: "Хорошо", value: 0, fill: "#fdb846"},
    {name: "нормально", value: 0, fill: "#f5675b"},
    {name: "Плохо", value: 0, fill: "#707683"},
    {name: "Нету результатов", value: 1, fill: "#466fc5"},
];


const EventStatistik = observer(() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const {userStatistic} = useContext(Context)

    useEffect(() => {
         userStatistic.fetchResult(id);
    })


    const calculate = () => {
        userStatistic.results.results.map((item) => {
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
        if (myData0[0].value !== 0 || myData0[3].value !== 0 || myData0[3].value !== 0 || myData0[3].value !== 0) {
            myData0[4].value --
        }
        if (myData1[0].value !== 0 || myData1[3].value !== 0 || myData1[3].value !== 0 || myData1[3].value !== 0) {
            myData1[4].value --
        }
        if (myData2[0].value !== 0 || myData2[3].value !== 0 || myData2[3].value !== 0 || myData2[3].value !== 0) {
            myData2[4].value --
        }
        if (myData3[0].value !== 0 || myData3[3].value !== 0 || myData3[3].value !== 0 || myData3[3].value !== 0) {
            myData3[4].value --
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
                return <div className="statistic__main__window">
                    <div className="progressbar">
                        <p className="progressbar__text">Прошло {userStatistic.results.results.length} пользователей из {userStatistic.usersCount} возможных</p>
                        <LinearProgress variant="determinate" value={userStatistic.results.results.length / userStatistic.usersCount * 100}/>
                    </div>
                    <div className="statistik__main">
                        <div className="statistik__main__statistik">
                            <div className="statistic__pair">
                                <div className="statistik__pie__div">
                                    <div className="statistik__pie__div__left">
                                        <p>Работоспособность</p>
                                        <div className="blackLine"></div>
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                dataKey="value"
                                                isAnimationActive={true}
                                                data={myData0}
                                                outerRadius={100}
                                                fill="orangered"
                                            />
                                            <Tooltip/>
                                        </PieChart>
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
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                dataKey="value"
                                                isAnimationActive={true}
                                                data={myData1}
                                                outerRadius={100}
                                                fill="orangered"
                                            />
                                            <Tooltip/>
                                        </PieChart>
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
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                dataKey="value"
                                                isAnimationActive={true}
                                                data={myData2}
                                                outerRadius={100}
                                                fill="orangered"
                                            />
                                            <Tooltip/>
                                        </PieChart>
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
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                dataKey="value"
                                                isAnimationActive={true}
                                                data={myData3}
                                                outerRadius={100}
                                                fill="orangered"
                                            />
                                            <Tooltip/>
                                        </PieChart>
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
                        <div className="statistik__support__info">
                            <div className="statistik__support__info__div">
                                <p>Название опроса: {userStatistic.results.title}</p>
                                <p>Опрос на: {userStatistic.results.name}</p>
                                <p>Дата начала: {userStatistic.results.dateStart}</p>
                                <p>Дата конца: {userStatistic.results.dateEnd}</p>
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
            {switchState(userStatistic.caseLoading)}
        </div>
    );
})

export default EventStatistik;