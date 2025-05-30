import Navbar from '../navbar/navigation';
import ParticleBackground from '../particles/particle';
import './home.css';

const HomeComponent = () => {
    return (
        <section id='home' className="hero"> 
            <Navbar></Navbar>
            <ParticleBackground />
            <div className="text-container">
                <div className="header-text">Building sleek, modular applications with modern tech</div>
                <br />
                <div className="body-text">Hi, I am Pieter Coetzee, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.</div>
            </div>
            <div className="button-container">
                <a className="button" href="https://www.linkedin.com/in/pieter-coetzee-387856200/">Let's Connect</a>
                <a className="button" href="https://drive.google.com/file/d/1eHMfk7QCbBPE4LKOMHDePVH4fiGZdvkx/view">My Resume</a>
            </div>
        </section>
    );
}

export default HomeComponent;