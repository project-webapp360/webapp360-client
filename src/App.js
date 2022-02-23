import React, {useContext, useEffect, useState} from "react";
import DemoList from "./components/lists/DemoList";
import axios from "axios";
import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import Main from "./pages/Main";
import Second from "./pages/Second";
import AppRouter from "./components/navbar/AppRouter";
import Navbar from "./components/navbar/Navbar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {getUsers} from "./axios/API";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])


    const [list, setList] = useState(
        [
            {id: 1, body: 'Today'},
            {id: 2, body: 'is a'},
            {id: 3, body: 'good'},
            {id: 4, body: 'day'}
        ])


    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setList(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>preh1</h1>
            <BrowserRouter>
                <h1>sdfdsfsdfdsfsdf</h1>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>




    );
})

export default App;
