import instagram from "../../public/assets/instagram.png"
import linkedin from "../../public/assets/linkedin.png"
// import me from "../../public/assets/me.png"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Jumbotron(){

    const [text] = useTypewriter({
        words: ["HELLO,", "HOLA,", "NI HAO,", "BONJOUR,"],
        typeSpeed: 150,
        deleteSpeed: 80,
        loop: {}
    })

    return (
        <main className="jumbotron">
            {/* <img src={me} alt="" className="jumbotron-photo"/> */}
            <section className="jumbotron-socials">
                <p>Based in Indonesia</p>
                <ul>
                    <li className="jumbotron-socials--list" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"><a href="https://www.instagram.com/johanesalberto/" target="_blank"><img src={instagram} alt="" /></a></li>
                    <li className="jumbotron-socials--list" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"><a href="https://www.linkedin.com/in/johanes-alberto/" target="_blank"><img src={linkedin} alt="" /></a></li>
                    <li className="jumbotron-socials--list" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600"><a href="mailto:johanesashn@gmail.com" target="_blank"><button className="jumbotron-button">Email Me</button></a></li>
                </ul>
            </section>
            <h1 className="jumbotron-title one jumbotron-greeting">{text}<Cursor/><span className="invisible">.</span></h1>
            <div className="jumbotron-main">
                <small>I AM</small>
                <h1 className="jumbotron-title two" id="home">
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0">J</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200">O</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400">H</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="600">A</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="800">N</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1000">E</span>
                    <span className="jumbotron-bounce" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1200">S</span>
                </h1>
            </div>
        </main>
    )
}