import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/#" className="nav-link">
            <span className="link-text home">Lilly Ohr</span>
          </a>
        </li>
        <li className="nav-item">
          <Link to="/#skills">
            <p className="link-text">Skills</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#projects">
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#experience">
            <span className="link-text">Experience</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#resume">
            <span className="link-text">Resume</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog">
            <span className="link-text">Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar