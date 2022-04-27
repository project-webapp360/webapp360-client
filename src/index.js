import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from "./mobx/User";
import NumberCount from "./mobx/Number";
import Events from "./mobx/Events";
import Users from "./mobx/Users";

export const Context = createContext(null)

console.log(process.env.REACT_APP_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new User(),
        number: new NumberCount(),
        events: new Events(),
        users: new Users()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals