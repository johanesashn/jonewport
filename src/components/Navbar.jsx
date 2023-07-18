import { useState } from "react"

export default function Navbar(){
    const [showNav, setShowNav] = useState(true)
    const [navClass, setNavClass] = useState("")

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
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    )
}