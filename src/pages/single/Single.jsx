import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Singlepost from "../../components/singlePost/Singlepost";


export default function Single() {
    return (
        <div className="single">
            <Singlepost />
            <Sidebar />
        </div>
    )
}
