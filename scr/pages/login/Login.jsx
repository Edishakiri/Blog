import { Link } from "react-router-dom";

import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Cześć!</span>
            <form className="loginForm">
                <label>E-mail</label>
                <input type="text" className="loginInputs" placeholder="Podaj email" />
                <label>Hasło</label>
                <input type="password" className="loginInputs" placeholder="Podaj hasło" />
                <button className="loginButton">Logowanie</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Zarejestruj się</Link>
            </button>
        </div>
    )
}
