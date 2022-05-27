import React, {useContext, useEffect, useState} from 'react';
import Progressbar from "../../components/progressbar/progressbar";
import Eventcard from "../../components/eventcard/Eventcard";
import "./mainpage.css"
import {Context} from "../../index";
import {getEvents, getUsers} from "../../axios/API";
import {observer} from "mobx-react-lite";
import Progressbar_manage from "../../components/progressbar_manage/progressbar_manage";
import DevTools from "mobx-react-devtools";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

const Mainpage = observer(() => {

    let completedEvents = 0

    const {user} = useContext(Context)
    const {events} = useContext(Context)
    const [EventCardData, setEventCardData] = useState([
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Админ'
        },
        {
            title: "Название",
            dateStart: "2022-02-23",
            dateEnd: "Конец",
            name: 'Вася',
            creator: 'Менеджер'
        },])

    useEffect(() => {
        if (events.loading) return;
        events.fetchData(user.user.id)
        console.log(`user:`)
        console.log(user.user)
        console.log(`isAuth: ${user.isAuth}`)
    }, [events.loading])

    const switchState = (state) => {
        switch (state) {

            case STATES.INITIAL: {
                return <h1>...</h1>
            }

            case STATES.LOADING: {
                return <h1>Выполняется загрузка...</h1>
            }

            case STATES.LOADED: {
                // console.log(events.events[0].name)

                completedEvents = (events.events.filter(event => event.needComplete === false)).length
                let ce = 0
                if (events.events.length >= 1) {
                   ce = events.events[0].completedEvents
                }
                return <div className="mainPage">

                    <div>
                        {user.user.role === 'MANAGER' || user.user.role === 'ADMIN'
                            ?
                            <Progressbar_manage completedEvents={ce}/>
                            :
                            <div></div>
                        }
                        <Progressbar completedEvents={completedEvents} role={user.user.role}/>

                    </div>

                    {events.events.map((item) =>
                    <div>
                        {item.needComplete === true
                            ?
                            <Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                       dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={false}
                                       type={item.type} targetEmail={item.targetEmail}/>
                            :
                            /*<div></div>*/
                            <Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                       dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={true}
                                       type={item.type} targetEmail={item.targetEmail}/>}
                    </div>
                )} </div>


                /*return events.events.map((item) =>
                    <div>
                        {item.needComplete === true
                        ?
                        <Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                   dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={false} type={item.type}/>
                        :
                        /!*<div></div>*!/
                        <Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                   dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={true} type={item.type}/>}
                    </div>
                )*/
            }

            default: {
                return <h1>ERROR...</h1>
            }

        }
    }

    return (
        <div>
            {switchState(events.caseLoading)}
        </div>

    );
});

export default Mainpage;