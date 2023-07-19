import CardMini from "./CardMini"

export default function Company(){
    return (
        <div className="company">
            <div className="company-title">
                <h2 className="company-title--main">EXPERIENCE</h2>
                <p className="company-title--sub">Don't <b>miss</b> the latest happenings in my <b>Porto.</b></p>
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