import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">SunCafe</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="http://sawara.pl/gallery/coffee/26.jpg" alt="" />
        </div>
    )
}
