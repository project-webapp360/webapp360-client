import Main from "./pages/Main";
import Second from "./pages/Second";
import AuthPage from "./pages/AuthPage";
import Login from "./pages/login/Login";
import NumberComp from "./pages/number/NumberComp";
import Quiz from "./pages/Quiz/Quiz";
import Mainpage from "./pages/mainpage/mainpage";

export const authRoutes = [
    {
        path: '/auth',
        Component: AuthPage
    },
    {
        path: '/quiz',
        Component: Quiz
    },
    {
        path: '/mainpage',
        Component: Mainpage
    },

]

export const publicRoutes = [
    {
        path: '/main',
        Component: Main
    },
    {
        path: '/second',
        Component: Second
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/number',
        Component: NumberComp
    },


]