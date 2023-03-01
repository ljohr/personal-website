import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <span></span>
        <a href="https://github.com/ljohr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
    </footer>
  )
}

export default Footer