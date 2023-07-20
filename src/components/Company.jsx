import CardMini from "./CardMini"

export default function Company(){
    return (
        <div className="company" id="experience">
            <div className="company-title">
                <h2 className="company-title--main" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">EXPERIENCE</h2>
                <p className="company-title--sub" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">Don't <b>miss</b> the latest happenings in my <b>Porto.</b></p>
            </div>
            <div className="company-cards">
                <CardMini name="pintara" status="Software Engineer" link="https://www.instagram.com/kampusindonesia/"/>
                <CardMini name="beranidigital" status="Front-End Developer" link="https://beranidigital.id/"/>
                <CardMini name="hdsign" status="Web Developer" link="https://www.instagram.com/hdsign.id/"/>
                <CardMini name="usu" status="teaching assistant" link="https://www.usu.ac.id/"/>
            </div>
        </div>
    )
}