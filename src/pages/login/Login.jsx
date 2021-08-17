
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./login.css";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        } catch (err){
            dispatch({type:"LOGIN_FAILURE"});

        }
    }
    return (
        <div className="login">
            <span className="loginTitle">Cześć!</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Nazwa użytkownika</label>
                <input type="text" className="loginInputs" placeholder="Podaj nazwe użytkownika" 
                ref={userRef}
                />
                <label>Hasło</label>
                <input type="password" className="loginInputs" placeholder="Podaj hasło"
                ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>Logowanie</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Zarejestruj się</Link>
            </button>
        </div>
    )
}
