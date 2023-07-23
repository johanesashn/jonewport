export default function WalkingText(props){
    return (
        <div className={`walkingText-container ${props.class}`}>
            <div className="walkingText">
                <h2>{props.text}</h2>
                <h2>{props.text}</h2>
                <h2>{props.text}</h2>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}