import '../App.css';
import './images/headshot.jpg';

export default function About() {
    return(
        <section id="about-me" className="sub-section">
        <div className="information">
            <h2>About Me</h2>
            <h3>Professional Life</h3>
            <p>Hello, And welcome to my portfolio.</p>
            <p>My name is Robert and I am a Full-Stack Developer working with the PERN Stack.</p>
            <p>I'm a Full-Stack Software Engineer working remotely out of FT White, Florida. I build and maintain high quality, 
                UX-oriented, and highly scalable web applications at an enterprise scale. I enjoy doing everything from relational database design and building microservice APIs to developing intuitive,
                 aesthetic user interfaces.</p>
                 <h3>My Home Life</h3>
                 <p>I have an amazing family who I adore and work hard to give them the life they deserve.
                    My fiancé is my biggest supporter and motivates me to do better.
                    I enjoy online gaming, Football, Fitness, reading (Anne Rice), and hiking.
                    On a weekend where I'm free, you will find me learning a new language, or attending meetups.
                 </p>
                 <h3>Why I became a Developer</h3>
                 <p>I first became intrigued by computers in Elementary School. Oregon Trail was my go-to game.
                    In 1995 a movie came out called "Hackers". I knew right then I wanted to be a Software Developer.
                    A few of Life's surprises hindered my goals for a time. Once the opportunity presented itself to get back into coding I took it. I went the self-taught route and eventually joined DevMountain's full-stack course.
                 </p>
        </div>
        <div className="headshot-container">
            <img className='headshot' src={require('./images/headshot.jpg')} alt="Robert Lynch Headshot" />
        </div>
    </section>
    );
}