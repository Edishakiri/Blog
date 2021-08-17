import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import "./singlepost.css"

export default function Singlepost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:3000/images/"
    const {user} = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
   
    useEffect(()=>{
            const getPost = async ()=> {
                const res = await axios.get("/posts/" +path )
                setPost(res.data)
                setTitle(res.data.title)
                setDesc(res.data.desc)
            }
        
            getPost()
    },[path]);

    const handleDelete = async () => {
        try {
        await axios.delete(`posts/${post._id}`, {data:{username:user.username}})
        } catch (err) {
            window.location.replace("/");
        }
    }

    const handleUpdate = async () => {
        try {
        await axios.put(`posts/${post._id}`, {data:{username:user.username, title, desc}})
        } catch (err) {
            //window.location.reload();
            setUpdateMode(false)
        }
    }


    return (
        <div className="Singlepost">
            <div className="singlePostWrapper">
                {post.photo && (
                
                
                <img className="singlePostImg" 
                src={PF + post.photo}
                 alt="" 
                 />
                )}{
                    updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=> setTitle(e.target.value)}/> : (

                    
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user.username && (
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true)}></i>
                        <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                    
                    )}
                </h1>
                )}
                 
                <div className="singlePostInfo">
                    <span className="singlePostAutor">
                    Autor: 
                    <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                    </Link>
                   </span>
                </div>   
                {updateMode ?( <textarea className="singlePostDescInput" value={desc} onChange={(e)=> setDesc (e.target.value)}/> ) : (
                <p className="singlePostDesc">{post.desc}</p>
                )}
                {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Wprowadź zmiany</button>
                )}    
                </div>
            <span className="singlePostData">{new Date(post.createdAt).toDateString()}</span> 
        </div>
    )
}
