import Main from "./pages/Main";
import Second from "./pages/Second";
import AuthPage from "./pages/AuthPage";
import Login from "./pages/login/Login";
import NumberComp from "./pages/number/NumberComp";

export const authRoutes = [
    {
        path: '/auth',
        Component: AuthPage
    }

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
    }

]