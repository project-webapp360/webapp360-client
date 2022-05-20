import React, {useContext, useEffect, useState} from 'react';
import Progressbar from "../../components/progressbar/progressbar";
import Eventcard from "../../components/eventcard/Eventcard";
import "./mainpage.css"
import {Context} from "../../index";
import {getEvents, getUsers} from "../../axios/API";
import {observer} from "mobx-react-lite";
import Progressbar_manage from "../../components/progressbar_manage/progressbar_manage";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    LOADED: 'loaded'
}

const Mainpage = observer(() => {

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
        events.fetchData(user.user.id)
        console.log(`user: ${user.user}`)
        console.log(`isAuth: ${user.isAuth}`)
    })

    const switchState = (state) => {
        switch (state) {

            case STATES.INITIAL: {
                return <h1>...</h1>
            }

            case STATES.LOADING: {
                return <h1>Выполняется загрузка...</h1>
            }

            case STATES.LOADED: {
                return events.events.map((item) =>


                    item.needCompete === undefined
                        ?
                        <Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                   dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={false}/>
                        :
                        <div>none</div>
                        /*<Eventcard idUser={user.user.id} id={item._id} title={item.title} dateStart={item.dateStart}
                                   dateEnd={item.dateEnd} name={item.name} creator={item.creator} Complete={true}/>*/
                )
            }

            default: {
                return <h1>ERROR...</h1>
            }

        }
    }

    return (
        <div className="mainPage">
            {user.user.role === 'MANAGER' || user.user.role === 'ADMIN'
              ?
              <Progressbar_manage/>
              :
              <div></div>
            }
            <Progressbar/>
            {switchState(events.caseLoading)}
        </div>

    );
});

export default Mainpage;