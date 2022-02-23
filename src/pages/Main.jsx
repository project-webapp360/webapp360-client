import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Main = observer(() => {
    const {user} = useContext(Context)

    return (
        <div>
            <h1>Main</h1>
            <h1>Main</h1>
            <h2>{user.user.id}</h2>
            <h2>{user.user.email}</h2>
        </div>
    );
});

export default Main;