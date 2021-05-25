import React from 'react';
import softball from '../images/me2.JPG'

function About() {
    return (
        <section className = "About">
            <a name = "About" />
             <img src = {softball} alt = "softball" />
             <section className = "text">
                <h1><b>ABOUT<br />ME</b></h1>
                <p>
                    I am currently enrolled in my 3rd year of Environmental Engineering at the University of Waterloo. 
                    While I am concerned about environmental issues and sustainability, I also have
                    a passion for software development and find coding to be an enjoyable application of the engineering
                    problem-solving skills I've obtained in university. On my free time I enjoy learning new development 
                    tools, playing softball and listening to Bangtan Sonyeondan. <br /><br />Feel free to 
                    <a href = "mailto:jesse.ren@uwaterloo.ca" target="_top"><u>reach out</u></a> if you'd like to talk or 
                    get to know me better!
                </p>
            </section>
        </section>
    )
}

export default About;