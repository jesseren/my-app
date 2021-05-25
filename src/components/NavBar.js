import React from 'react';
import resume from '../Resume.pdf'

function NavBar() {
    return (
        <nav>
            <ul>
                <li id = "FirstNav"><a href="#Header"><strong>Jesse Ren</strong></a></li>
                <li><a href = "#Contact">Contact</a></li>
                <li><a href = "https://github.com/jesseren" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a  href = {resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href = "#Projects">Projects</a></li>
                <li><a href = "#About">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;