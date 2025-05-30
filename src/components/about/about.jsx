import './about.css';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript.svg';
import angular from '../../assets/angular.svg';
import react from '../../assets/react.svg';
import typescript from '../../assets/typescript.svg';
import sql from '../../assets/sql.svg';
import java from '../../assets/java.svg';
import csharp from '../../assets/c-sharp.png';
import dotnet from '../../assets/dotnet.png';

const AboutMe = () => {
    return (
        <section className="about" id='about'>
        <div className="about-left">
          <div className="profile-pic-container">
            <div className="profile-pic"></div>
          </div>
          <p className="about-description">
          I'm a passionate full stack developer who loves building scalable, high-performance systems. I enjoy solving complex problems, collaborating with teams, and leveraging modern tech like microservices, event-driven architecture, and REST APIs to create impactful solutions.
          </p>
        </div>
        <div className="about-divider"></div>
        <div className="about-right">
          <div className="sub-heading">GET TO KNOW ME</div>
          <h2>About Me</h2>
  
          <div className="experience">
            <h3>Experience</h3>
            <h3><strong>Intermediate Software Developer</strong> | Runninghill 2023 - Current</h3>
            <p><strong>Overview: </strong></p>
            <p className="overview">I have contributed to projects where I built secure services, optimized system performance, and mentored new developers. My work involved strengthening authentication systems, reducing response times to milliseconds, streamlining deployments with automated pipelines, and collaborating with teams to deliver scalable, high-quality features.</p>
            <hr></hr>
            <h3><strong>Junior Software Developer</strong> | ZonkeTech 2022 - 2023</h3>
            <p><strong>Overview: </strong></p>
            <p className="overview">I have successfully managed projects from development to deployment, overseeing backend, frontend, and database components. I specialized in creating comprehensive documentation and crafting complex stored procedures to optimize system functionality and performance.</p>
          </div>
  
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              {/* Example tech badges */}
              <span className="badge">
                <img src={html} alt="html" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }} />
                 HTML
              </span>
              <span className="badge">
                <img src={css} alt="css" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                 CSS
              </span>
              <span className="badge">
              <img src={javascript} alt="javascript" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                 JavaScript
              </span>
              <span className="badge">
                <img src={typescript} alt="typescript" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                 TypeScript
              </span>
              <span className="badge">
                <img src={react} alt="react" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                 ReactJS
              </span>
              <span className="badge">
              <img src={angular} alt="angular" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                 Angular
              </span>
              <span className="badge">
                <img src={csharp} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                C#
              </span>
              <span className="badge">
                <img src={dotnet} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                .NET
              </span>
              <span className="badge">
                <img src={sql} alt="sql" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px'}}/>
                 SQL
              </span>
              <span className="badge">
                <img src={java} alt="java" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px'}}/>
                 Java
              </span>
              {/* Add more */}
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;