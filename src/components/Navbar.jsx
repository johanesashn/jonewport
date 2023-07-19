import { useState } from "react"

export default function Navbar(){
    const [showNav, setShowNav] = useState(true)
    const [navClass, setNavClass] = useState("")

    const goUp = () => {
        window.scrollTo(0,0)
    }

    let prevScrollPos = window.scrollY
    window.onscroll = function(){
        let curScrollPos = window.scrollY
        if (showNav === true){
            if (prevScrollPos > curScrollPos){
                setNavClass("")
            } else {
                setNavClass("hide")
            }
        }

        prevScrollPos = curScrollPos
    }
    return (
        <nav className={navClass}>
            <ul className="nav-list">
                <li onClick={goUp}>Home</li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    )
}