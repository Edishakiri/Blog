import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)


    const handleSubmit = async (e)=> {
        e.preventDefault()
        setError(false)
        try{
            
            const res = await axios.post("/auth/register", {
                username,email,password
            })
            res.data && window.location.replace("/login")
        } catch(err){
            setError(true)
        }
        
    }
    
    return (
        <div className="register">
            <span className="registerTitle">Zapraszamy!</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Nazwa użytkownika</label>
                <input type="text" className="registerInputs" placeholder="Podaj nazwę użytkownika"
                onChange={e=>setUsername(e.target.value)}
                />
                 <label>Email</label>
                <input type="text" className="registerInputs" placeholder="Podaj emial" 
                onChange={e=>setEmail(e.target.value)}
                />
                <label>Hasło</label>
                <input type="password" className="registerInputs" placeholder="Podaj hasło" 
                onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Rejestracja</button>
            </form>
            <button className="registerLoginButton">
               <Link className="link" to="/login">Zaloguj się</Link>
            </button>
           {error &&  <span>Podany login lub mail jest w użytku</span>}
        </div>
    )
}
