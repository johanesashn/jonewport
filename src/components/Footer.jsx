import instagram from "../../public/assets/instagram.png"
import linkedin from "../../public/assets/linkedin.png"
import gmail from "../../public/assets/gmail.png"
import arrow from "../../public/assets/arrow.png"

export default function Footer(){

    const goUp = () => {
        window.scrollTo(0,0)
    }

    return (
        <footer>
            <div className="line"></div>
            <div className="footer-content">
                <h2 className="footer-title"></h2>
                <ul className="footer-content--list">
                    <li><a href="https://www.instagram.com/johanesalberto/" target="_blank"><img src={instagram} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/johanes-alberto/" target="_blank"><img src={linkedin} alt="" /></a></li>
                    <li><a href="mailto:johanesalbertosiahaan15092003@gmail.com" target="_blank"><img src={gmail} alt="" /></a></li>
                </ul>
            </div>
            <button onClick={goUp} className="footer-button">Go Upside <img src={arrow} alt="" className="footer-button--image"/></button>
        </footer>
    )
}