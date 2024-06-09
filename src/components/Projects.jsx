import Card from "./Card"

export default function Projects(){
    return (
        <div className="project" id="projects">
            <div className="project-title">
                <div className="project-label">Cool!</div>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className="project-title--sub">Latest</p>
                <h2 data-aos="fade-up" data-aos-duration="500" date-aos-delay="500" className="project-title--main">PROJECTS</h2>
            </div>
            <div className="project-container">
                <Card name="foodies" target="https://jofood.netlify.app/" desc="food recipees website"/>
                <Card name="broquiz" target="https://broquizz.netlify.app/" desc="quiz website"/>
                <Card name="tulist" target="https://tulist.vercel.app/" desc="to-do list website"/>
                <Card name="playpark" target="https://playpark.vercel.app/" desc="gaming website"/>
                <Card name="joquotes" target="https://joquotes.netlify.app/" desc="quotes generator website"/>
                <Card name="pintara" target="https://jocourse.vercel.app/" desc="course website"/>
            </div>
        </div>
    )
}