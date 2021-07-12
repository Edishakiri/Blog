import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="http://sawara.pl/gallery/coffee/25.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Tytuł" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Treść artykułu" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Opublikuj</button>
            </form>
        </div>
    )
}
