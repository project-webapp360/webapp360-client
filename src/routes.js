import Main from "./pages/Main";
import Second from "./pages/Second";
import AuthPage from "./pages/AuthPage";
import Login from "./pages/login/Login";
import NumberComp from "./pages/number/NumberComp";
import Quiz from "./pages/Quiz/Quiz";
import Mainpage from "./pages/mainpage/mainpage";
import Register from "./pages/register/Register";

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
    {
        path: '/register',
        Component: Register
    }

]

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    },
]