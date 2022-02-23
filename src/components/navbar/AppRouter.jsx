import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "../../pages/Main";
import Second from "../../pages/Second";
import {authRoutes, publicRoutes} from "../../routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {/*<Route path="*" element={<Navigate to="/main"/>}/>*/}


            {/*<Route path="/second" element={<Second/>}>*/}

            {/*</Route>*/}
        </Routes>
    );
});

export default AppRouter;