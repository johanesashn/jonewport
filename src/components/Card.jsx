export default function Card(props){
    return (
        <a data-aos="zoom-in" data-aos-duration="500" href={props.target} target="_blank" className="card">
            <div className="card-background">
                <p className="click">visit me</p>
                <p>{props.desc}</p>
            </div>
            <div className="card-image">
                <img src={`./assets/${props.name}.png`} alt="" />
            </div>
            <div className="card-caption">
                <img src={`./assets/logo_${props.name}.png`} alt="" />
                {props.name}
            </div>
        </a>
    )
}