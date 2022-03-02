import React, {useContext, useEffect} from 'react';
import Progressbar from "../../components/progressbar/progressbar";
import Eventcard from "../../components/eventcard/Eventcard";
import "./mainpage.css"
import {Context} from "../../index";
import {getEvents} from "../../axios/API";
import {observer} from "mobx-react-lite";

const Mainpage = observer(() => {

  const {events} = useContext(Context)

  useEffect(   () => {
    async function fetchData() {
      const events = await getEvents()
      localStorage.setItem("events", JSON.stringify(events))
    }
    fetchData()
  })


  return (
    <div>
      <Progressbar/>
      {
        events.events.map((item) => <Eventcard title={item.title} dateStart={item.dateStart} dateEnd={item.dateEnd} name={item.name} creator={item.creator}/>)
      }
    </div>
  );
});

export default Mainpage;