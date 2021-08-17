import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
    const [file,setFile] = useState(null)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)

    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:3000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId:user._id,
            username,
            email,
            password
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename );
            data.append("Dokument",file );
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload", data)
                
            } catch(err){

            }
        } try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        }catch (err) {
             dispatch({type:"UPDATE_FAILURE"})
        }
    }

    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Utwórz konto</span>
                    <span className="settingDeleteTitle">Usuń konto</span>
                </div>
                <form className="settingForm" onSubmit={handleSubmit}>
                    <label>Zdjęcie profilowe</label>
                    <div className="settingPP">
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} onChange={(e)=>setFile(e.target.value)}/>
                    </div>
                    <label>Imię:</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label>E-mail:</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Hasło:</label>  
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                    <button className="settingSubmit" type="submit">Akceptuj</button>
                    {success && (<span style={{color: "green"}} >Profil zaktualizowany</span>)}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
