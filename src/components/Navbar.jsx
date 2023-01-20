import React from 'react'

const Navbar = () => {
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

export default Navbar