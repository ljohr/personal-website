import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  let [title, b] = useState('Best Coffee in Boston');
  let [likes, changeLikes] = useState(0);

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <About/>
        <Skills/>
        <Experience/>
      </main>
    </div>
  );
}


function NavBar(){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text home">Lilly Ohr</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#about" className="nav-link">
            <span className="link-text">About</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            <span className="link-text">Skills</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience" className="nav-link">
            <span className="link-text">Experience</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text">Blog</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text">Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

function About(){
  return(
    <section className='about' id="about">
      <h2 className="title-h2">About</h2>
      <section className="about-inner">
        <p>
          I'm Lilly Ohr, a junior at Boston College majoring in computer science and linguistics. I'm interested in backend development and machine learning.
          Scalable solutions with tech helping people.
        </p>
        <a href="https://www.linkedin.com/in/lillyohr/" target="_blank"><FontAwesomeIcon icon={ faLinkedin } /></a>
        <a href="https://github.com/ljohr" target="_blank"><FontAwesomeIcon icon={ faGithub } /></a>
      </section>
    </section>
  )
}

function Skills(){
  return(
    <section className='skills' id="skills">
      <h2 className="title-h2">Skills</h2>
      <section className="skills-inner">
        <h4>Backend</h4>
        <ul>
          <li>Python, Java, C</li>
          <li>Flask</li>
        </ul>
      </section>
      <section className="skills-inner">
        <h4>Frontend</h4>
        <ul>
          <li>HTML5, CSS, JavaScript</li>
          <li>React</li>
        </ul>
      </section>
      <section className="skills-inner">
        <h4>Technologies</h4>
        <ul>
          <li>Tensorflow, scikit-learn</li>
          <li>MySQL</li>
          <li>Git, GitHub, Vim</li>
        </ul>
      </section>
    </section>
  )
}

function Experience(){
  return(
    <section className='experience' id="experience">
      <h2 className="title-h2">Experience</h2>
      <section className="experience-inner">
        <div className="experience-info">
          <h4>Boston College</h4>
          <p className="description">Computer Systems TA</p>
          <p className="date">Jan 2023 - Present</p>
        </div>
          <ul className="experience-description">
            <li>Incoming TA for Spring 2023</li>
            <li>To hold weekly office hours explaining concepts and helping with assignments</li>
            <li>To grade weekly assignments</li>
            <li>All assignments and course materials conducted in C</li>
          </ul>
      </section>
      <section className="experience-inner">
        <div className="experience-info">
          <h4>NASA</h4>
          <p className="description">L'SPACE NPWEE Subteam Lead</p>
          <p className="date">May 2022 - Aug 2022</p>
        </div>
          <ul className="experience-description">
            <li>Lead weekly business team meetings</li>
            <li>Assigned tasks, lead 3 person subteam to create 7 page New Technology Report (NTR) detailing a possible improvement to existing NASA technology</li>
            <li><a className="link" href="https://drive.google.com/file/d/1e3RVvkMlDfaNZAuxrCcoiACa9rSUfLKF/view" target="_blank">
              New Technology Report 
            </a></li>
          </ul>
      </section>
      <section className="experience-inner">
        <div className="experience-info">
          <h4>NASA</h4>
          <p className="description">L'SPACE MCA Project Manager</p>
          <p className="date">Aug 2021 - Dec 2021</p>
        </div>
          <ul className="experience-description">
            <li>Lead weekly general team meetings</li>
            <li>Assigned tasks, moderated between subteams throughout 5 months</li>
            <li>Lead 9 person team to create 150 page Preliminary Design Review (PDR) detailing a hypothetical mission to Mars</li>
            <li><a className="link" href="https://drive.google.com/file/d/1bIIMl1pefHiWhEZNvwsxDlg36LiUmsmx/view" target="_blank">
              Preliminary Design Review 
            </a></li>
          </ul>
      </section>
    </section>
  )
}

{/* <FontAwesomeIcon icon={ faPen } /> */}

export default App;
