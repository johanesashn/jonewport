import CardMini from "./CardMini"

export default function Company(){
    return (
        <div className="company" id="experience">
            <div className="company-title">
                <h2 className="company-title--main" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"><span className="company-label">Outstanding</span> EXPERIENCES</h2>
                <p className="company-title--sub" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">Don't <b>miss</b> the latest happenings in my <b>Porto.</b></p>
            </div>
            <div className="company-cards">
                <CardMini name="telkom" status="frontend developer" link="https://www.linkedin.com/company/telekomunikasi-indonesia/mycompany/"/>
                <CardMini name="telkom" status="Fullstack Developer" link="https://www.linkedin.com/company/telekomunikasi-indonesia/mycompany/"/>
                <CardMini name="kampusindonesia" status="Software Engineer" link="https://www.instagram.com/kampusindonesia/"/>
                <CardMini name="beranidigital" status="Front-End Developer" link="https://beranidigital.id/"/>
                <CardMini name="hdsign" status="Web Developer" link="https://www.instagram.com/hdsign.id/"/>
                <CardMini name="usu" status="teaching assistant" link="https://www.usu.ac.id/"/>
                <CardMini name="freelancer" status="Web Developer" link="https://www.linkedin.com/in/johanes-alberto/"/>
            </div>
        </div>
    )
}