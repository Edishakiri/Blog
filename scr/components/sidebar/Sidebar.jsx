import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">O NAS</span>
                <img src="http://sawara.pl/gallery/coffee/13.jpg" alt="" />
                <p>Jesteśmy osobami które chcą informować ludzi o najnowyszch nowinkach odnośnie kawy
                    oraz chcielibyśmy dzielić się z Wami naszą wiedzą po to aby kawa stała się lepsza :)
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Kategorie</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Kawa</li>
                    <li className="sidebarListItem">Ekspresy</li>
                    <li className="sidebarListItem">Ciekawostki</li>
                    <li className="sidebarListItem">Przepisy</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Śledź nas na:</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-youtube"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
