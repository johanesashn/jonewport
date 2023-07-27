export default function CardMini(props){
    let company = ""

    if (props.name === "beranidigital") {
        company = "Berani Digital"
    } else if (props.name === "pintara") {
        company = "Pintara"
    } else if (props.name === "hdsign") { 
        company = "HDSign"
    } else if (props.name === "usu") {
        company = "University of Sumatera Utara"
    } else if (props.name === "freelancer"){
        company = "Freelancer"
    }
    
    return (
        <div className="card-mini" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
            <div className="line card-mini--line"></div>
            <img src={`./assets/logo_${props.name}.png`} alt="" className="card-mini--logo"/>
            <div className="card-mini--caption">
                <p className="company-name">{company}</p>
                <h3 className="status">{props.status}</h3>
            </div>
            <a href={props.link} target="_blank"><button className="card-mini--button">view</button></a>
        </div>
    )
}