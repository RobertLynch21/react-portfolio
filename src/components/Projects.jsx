import '../App.css'
import './images/project-1.png'
import './images/project-2.png'
import './images/project-3.png'
import './images/project-4.png'
export default function Projects() {
    return(
        <section id="projects" className="sub-section-alternative">
        <h2>Projects</h2>
        <div className="project-container">
            <div className="project-card">
                <img className="project-image" src={require("./images/project-1.png")} alt="project 1 image" />
                <h3>Day Trip Planner</h3>
                <p className="sub-text">Developed a day trip planner cloud and marketplace app using the PERN stack allowing users to choose from various packages with top-level tiers for the gold package to ascending tiers for lower packages.
                     Implemented full user authentication and customer newsletter.</p>
                <hr/>
                <a className="project-link" href="https://github.com/day-trip-planner/day-trip-plan" target="_blank"><p className="sub-text">View Here</p></a>
            </div>
            <div className="project-card">
                <img className="project-image" src={require("./images/project-2.png")} alt="project 2 image" />
                <h3>Recipe Store</h3>
                <p className="sub-text">Developed a recipe cloud and marketplace app using the PERN stack allowing users to create, edit and sell recipes
                    online. Integrated Full CRUD to allow full user control for a more interactive and simple user experience. Utilized React and CSS to provide a clean user interface.</p>
                <hr/>
                <a className="project-link" href="https://github.com/RobertLynch21/recipe-store" target="_blank"><p className="sub-text">View Here</p></a>
            </div>
            <div className="project-card">
                <img className="project-image" src={require("./images/project-3.png")} alt="project 3 image" />
                <h3>Full Stack React Portfolio</h3>
                <p className="sub-text">This is my Fullstack React Portfiolio, Developed using the PERN Stack. A feature I'll be utilizing will be a daily journal to track my coding journey.
                    some additional tech I'll be using are as follows, Redux, Express, axios and React native. It is an evolving application. more to come later on.
                </p>
                <hr/>
                <a className="project-link" href="https://github.com/RobertLynch21/my-portfolio" target="_blank"><p className="sub-text">View Here</p></a>
            </div>
            <div className="project-card">
                <img className="project-image" src={require("./images/project-4.png")} alt="project 4 image" />
                <h3>Mental/Physical Health App</h3>
                <p className="sub-text">Comming Soon</p>
                <hr/>
                <a className="project-link" href='#'><p className="sub-text">View Here</p></a>
            </div>
        </div>
    </section>
    )
}