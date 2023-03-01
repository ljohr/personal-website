import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <main className="Home">
        <About/>
        <Skills/>
        <Experience/>
    </main>
  )
}

function About(){
  return(
    <section className='about' id="about">
      <h2 className="title-h2">About</h2>
      <section className="about-inner">
        <p>
          Hello! I'm Lilly Ohr, a junior at Boston College majoring in computer science and linguistics. <br/> I'm interested in NLP, computer vision, and generative syntax. 
        </p>
        <a href="https://www.linkedin.com/in/lillyohr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
        <a href="https://github.com/ljohr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
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
          <li>Node JS, Flask</li>
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
          <p className="location">Chestnut Hill, MA</p>
          <p className="date">Jan 2023 - Present</p>
        </div>
          <ul className="experience-description">
            <li>Holding 2-hour long office hours every week</li> 
            <li>Helping students understand concepts</li>
            <li>Helping students debug assignments</li>
            <li>Grading weekly assignments</li>
          </ul>
      </section>
      <section className="experience-inner">
        <div className="experience-info">
          <h4>NASA</h4>
          <p className="description">L'SPACE NPWEE Subteam Lead</p>
          <p className="location">Remote</p>
          <p className="date">May 2022 - Aug 2022</p>
        </div>
          <ul className="experience-description">
            <li>Led weekly business team meetings</li>
            <li>Assigned tasks, lead 3 person subteam to create 7 page New Technology Report (NTR) detailing a possible improvement to existing NASA technology</li>
            <li><a className="link" href="https://drive.google.com/file/d/1e3RVvkMlDfaNZAuxrCcoiACa9rSUfLKF/view" target="_blank" rel="noopener noreferrer">
              New Technology Report 
            </a></li>
          </ul>
      </section>
      <section className="experience-inner">
        <div className="experience-info">
          <h4>NASA</h4>
          <p className="description">L'SPACE MCA Project Manager</p>
          <p className="location">Remote</p>
          <p className="date">Aug 2021 - Dec 2021</p>
        </div>
          <ul className="experience-description">
            <li>Led weekly general team meetings</li>
            <li>Assigned tasks, moderated between subteams throughout 5 months</li>
            <li>Lead 9 person team to create 150 page Preliminary Design Review (PDR) detailing a hypothetical mission to Mars</li>
            <li><a className="link" href="https://drive.google.com/file/d/1bIIMl1pefHiWhEZNvwsxDlg36LiUmsmx/view" target="_blank" rel="noopener noreferrer">
              Preliminary Design Review 
            </a></li>
          </ul>
      </section>
    </section>
  )
}

export default Home