import React, {useState} from "react";
/*import Modal from "../modal/Modal";*/
import "hammerjs";
import "./EventStatistik.css";
import "@progress/kendo-theme-material/dist/all.css";
import { PieChart, Pie, Tooltip } from "recharts";

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import {LinearProgress} from "@mui/material";

const applicationsStatusThisMonth = [
    {
        status: "Плохая",
        value: 14,
        color: "#f5675b",
    },
    {
        status: "Хорошая",
        value: 26,
        color: "#fdb846",
    },
    {
        status: "Отличная",
        value: 60,
        color: "#2ed27a",
    },
];

const labelContent = e => e.category;

const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
        <div>
            {category}: {value}%
        </div>
    );
};


const myData0 = [
    { name: "Отлично", value: 60, fill: "#2ed27a" },
    { name: "Хорошо", value: 26, fill: "#fdb846" },
    { name: "Плохо", value: 14, fill:"#f5675b" },
];

const myData1 = [
    { name: "Отлично", value: 60, fill: "#2ed27a" },
    { name: "Хорошо", value: 26, fill: "#fdb846" },
    { name: "Плохо", value: 14, fill:"#f5675b" },
];
const myData2 = [
    { name: "Отлично", value: 60, fill: "#2ed27a" },
    { name: "Хорошо", value: 26, fill: "#fdb846" },
    { name: "Плохо", value: 14, fill:"#f5675b" },
];
const myData3 = [
    { name: "Отлично", value: 60, fill: "#2ed27a" },
    { name: "Хорошо", value: 26, fill: "#fdb846" },
    { name: "Плохо", value: 14, fill:"#f5675b" },
];


const allUser = 13
const completedUser = 7

const EventStatistik = ({visible, setVisible}) => {
    return (

        <div className="statistic__main__window">
            <div className="progressbar">
                <p className="progressbar__text">Прошло {completedUser} пользователей из {allUser} возможных</p>
                <LinearProgress variant="determinate" value={completedUser/allUser*100}/>
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
                                    <Tooltip />
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
                                    <Tooltip />
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
                                    <Tooltip />
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
                                    <Tooltip />
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
                                    <p>Плохо</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="statistik__support__info">
                    <div className="statistik__support__info__div">
                        <p>Название опроса: Something</p>
                        <p>Опрос на: Солонников Виктор</p>
                        <p>Дата начала: 2022-04-28</p>
                        <p>Дата конца: 2022-04-29</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default EventStatistik;