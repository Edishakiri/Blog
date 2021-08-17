import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:3000/images/"

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-youtube"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    
                    <li className="topListItem">
                        <Link className="link" to="/" >Strona główna</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/" >O nas</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >Kontakt</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >Wpis</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Wyloguj"}
                    </li>  
                </ul>
            </div>
            <div className="topRight">
                
                {user ? (
                    <Link to="/settings">
                        <img className="topImg"
                        src={user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login" >Zaloguj</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register" >Zarejestruj się</Link>
                            </li>
                          </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
