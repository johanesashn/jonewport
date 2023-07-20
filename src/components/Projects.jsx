import Card from "./Card"

export default function Projects(){
    return (
        <div className="project" id="projects">
            <div className="project-title">
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className="project-title--sub">Latest</p>
                <h2 data-aos="fade-up" data-aos-duration="500" date-aos-delay="500" className="project-title--main">PROJECTS</h2>
            </div>
            <div className="project-container">
                <Card name="foodies" target="https://jofood.netlify.app/" desc="food recipees website"/>
                <Card name="pintara" target="https://jocourse.vercel.app/" desc="course website"/>
                <Card name="joquiz" target="https://joquiz.netlify.app/" desc="quiz website"/>
                <Card name="playpark" target="https://playpark.netlify.com/" desc="gaming website"/>
                <Card name="tulist" target="https://tulist.vercel.app/" desc="to-do list website"/>
                <Card name="tenzies" target="https://jotenzies.netlify.app/" desc="tenzies website"/>
            </div>
        </div>
    )
}