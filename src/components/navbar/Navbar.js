import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {deleteToken, getUsers, refreshToken} from "../../axios/API";
import TokenService from "../../service/tokenService"
import {Button} from "react-bootstrap";
const tokenService = new TokenService()

const Navbar = observer(() => {


    const {user} = useContext(Context)
    const navigate = useNavigate()

    // user.setUser(localStorage.getItem('user'))
    // const auth = localStorage.getItem('isAuth')
    // function checkIsAuth() {
    //     return auth === "true";
    // }
    // user.setIsAuth(checkIsAuth())

    const logout = async () => {
        deleteToken(user.user.id)
        user.setIsAuth(false)
        user.setUser({})
        // localStorage.setItem('user', JSON.stringify(''))
        // localStorage.setItem('isAuth', "false")
        // localStorage.setItem('token', '')
        tokenService.unbindToken('accessToken')
        tokenService.unbindToken('refreshToken')
        navigate("/login")
    }

    const getAllUsers = async (e) => {
        try {
            e.preventDefault()
            const data = await getUsers()
            console.log(data)
        } catch (e) {
            // alert(e.response.data.message)
        }
    }


    return (
        <div>
            {
                user.isAuth
                    ?
                    <div className="navbar">
                        <div className="navbar__items">
                            <div className="item">
                                <button onClick={() => user.setIsAuth(!user.isAuth)}>Change</button>
                            </div>

                            <div className="item">
                                <Link to="/main">Main</Link>
                            </div>
                            <div className="item">
                                <Link to="/second">Second</Link>
                            </div>
                            <div className="item">
                                <button onClick={getAllUsers}>Auth</button>
                            </div>
                            <div className="item">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="item">
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="navbar">
                        <div className="navbar__items">
                            <button onClick={() => user.setIsAuth(!user.isAuth)}>Change</button>
                            <div className="item">
                                <Button variant="primary">Primary</Button>{' '}
                            </div>
                            <div className="item">
                                <Link to="/number">Number</Link>
                            </div>
                            <div className="item">
                                <Link to="/main">Main</Link>
                            </div>
                            <div className="item">
                                <Link to="/second">Second</Link>
                            </div>
                            <div className="item">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
});

export default Navbar;