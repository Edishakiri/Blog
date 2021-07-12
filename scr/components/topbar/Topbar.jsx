import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
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
                    <li className="topListItem">
                        {user && "Wyloguj"}
                    </li>  
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                        src="https://scontent.fktw4-1.fna.fbcdn.net/v/t31.18172-8/21016087_1490454277729256_5987909632378129204_o.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=90dHy7DQ4ucAX_ZrtO2&_nc_oc=AQnc8IW8POHpGZqxfVna_D8a63cNd1DKAv9FCxgvipt3dBV6ZKipSeQP61swusT2NlM&_nc_ht=scontent.fktw4-1.fna&oh=38ea6c934523fbd7b17dbcded2bc9707&oe=60EB42FB" alt="" />
                        
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
