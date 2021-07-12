import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Zapraszamy!</span>
            <form className="registerForm">
                <label>Nazwa użytkownika</label>
                <input type="text" className="registerInputs" placeholder="Podaj nazwę użytkownika" />
                 <label>Email</label>
                <input type="text" className="registerInputs" placeholder="Podaj emial" />
                <label>Hasło</label>
                <input type="password" className="registerInputs" placeholder="Podaj hasło" />
                <button className="registerButton">Rejestracja</button>
            </form>
            <button className="registerLoginButton">
               <Link className="link" to="/login">Zaloguj się</Link>
            </button>
        </div>
    )
}
