import React, {useState} from "react";
import Modal from "../modal/Modal";
import "hammerjs";
import "./EventStatistik.css";
import "@progress/kendo-theme-material/dist/all.css";
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
        color: "#8c0505",
    },
    {
        status: "Хорошая",
        value: 26,
        color: "#eac405",
    },
    {
        status: "Отличная",
        value: 60,
        color: "#12ef06",
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

const allUser = 13
const completedUser = 7

const EventStatistik = ({visible, setVisible}) => {
/*    const [modal,setModal] = useState(false);*/
    return (
        <div>
{/*            <Modal visible={modal} setVisible={setModal}>
                <div className="statistik__modal"></div>
            </Modal>*/}
            <div className="progressbar">
                <p className="progressbar__text">прошло {completedUser} пользователей из {allUser} возможных</p>
                <LinearProgress variant="determinate" value={completedUser/allUser*100}/>
            </div>
            <div className="statistik__main">
            <div className="statistik__main1">
                <Chart>
                <ChartTitle/>
                <ChartLegend visible={false} />
                <ChartTooltip render={renderTooltip} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="donut"
                        data={applicationsStatusThisMonth}
                        categoryField="status"
                        field="value"
                    >
                        <ChartSeriesLabels
                            color="#fff"
                            background="none"
                            content={labelContent}
                        />
                    </ChartSeriesItem>
                </ChartSeries>
            </Chart>
                <Chart>
                    <ChartTitle/>
                    <ChartLegend visible={false} />
                    <ChartTooltip render={renderTooltip} />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="donut"
                            data={applicationsStatusThisMonth}
                            categoryField="status"
                            field="value"
                        >
                            <ChartSeriesLabels
                                color="#fff"
                                background="none"
                                content={labelContent}
                            />
                        </ChartSeriesItem>
                    </ChartSeries>
                </Chart>
                </div>
                <div className="statistik__main1">
                    <Chart>
                        <ChartTitle/>
                        <ChartLegend visible={false} />
                        <ChartTooltip render={renderTooltip} />
                        <ChartSeries>
                            <ChartSeriesItem
                                type="donut"
                                data={applicationsStatusThisMonth}
                                categoryField="status"
                                field="value"
                            >
                                <ChartSeriesLabels
                                    color="#fff"
                                    background="none"
                                    content={labelContent}
                                />
                            </ChartSeriesItem>
                        </ChartSeries>
                    </Chart>
                    <Chart>
                        <ChartTitle/>
                        <ChartLegend visible={false} />
                        <ChartTooltip render={renderTooltip} />
                        <ChartSeries>
                            <ChartSeriesItem
                                type="donut"
                                data={applicationsStatusThisMonth}
                                categoryField="status"
                                field="value"
                            >
                                <ChartSeriesLabels
                                    color="#fff"
                                    background="none"
                                    content={labelContent}
                                />
                            </ChartSeriesItem>
                        </ChartSeries>
                    </Chart>
                </div>
                </div>
            </div>
    );
}

export default EventStatistik;