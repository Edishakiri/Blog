import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Utwórz konto</span>
                    <span className="settingDeleteTitle">Usuń konto</span>
                </div>
                <form className="settingForm">
                    <label>Zdjęcie profilowe</label>
                    <div className="settingPP">
                        <img src="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/101487569_3117272778380723_4002770659284353024_n.jpg?_nc_cat=103&_nc_rgb565=1&ccb=1-3&_nc_sid=e3f864&_nc_ohc=3PIUG-spsfQAX_WzYkv&_nc_ht=scontent.fktw1-1.fna&oh=a5fec132aa13e4c981be489fc327d809&oe=60ED0224" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Imię:</label>
                    <input type="text" placeholder="Jak się nazywasz?" />
                    <label>E-mail:</label>
                    <input type="email" placeholder="@" />
                    <label>Hasło:</label>
                    <input type="password" />
                    <button className="settingSubmit">Akceptuj</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
