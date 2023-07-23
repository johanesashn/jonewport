import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Jumbotron(){
    const [text] = useTypewriter({
        words: ["allo,", "i,", "olla,"],
        
        loop: {}
    })

    return (
        <div class="jumbotron">
            <div class="scroll">
            <p>scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
            </div>
            <section class="header">
            <div class="upside">
                <button id="jump" class="pink" data-aos="zoom-in" data-aos-duration="500">H</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">{text}</button>
            </div>

            <div class="midside">
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300">I</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">'</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">m</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600" class="space"></button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700" class="J">J</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800">o</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900">h</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">a</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1100">n</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1200">e</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1300">s</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1400">,</button>
            </div>

            <div class="downside">
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1500">W</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1600">e</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1700">b</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1800" class="space"></button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1900">D</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2000">e</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2100">v</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2200">e</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2300">l</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2400">o</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2500">p</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2600">e</button>
                <button data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2700">r</button>
            </div>
            </section>

            <section class="desc">
                <div class="left">
                <h3>Front End Developer / WordPress Developer</h3>
                </div>

                <a href="mailto:johanesashn@gmail.com" target="_blank">
                    <button class="contact">
                    <span></span>
                    <p>Contact me!</p>
                    </button>
                </a>
            </section>

            <div class="scroll">
            <p>scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
            </div>
        </div>
    )
}