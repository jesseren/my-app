import React from 'react'
import profile from '../images/me1.jpg'

function Intro() {
    return (
        <section>
            <a name = "Header" />
            <div class = "Buffer"></div>    
            <header>
                <p>Hello, my name is Jesse Ren and I'm an engineering student at the University of Waterloo.</p>
                <img src = {profile} alt = 'my profile'/>
            </header>
        </section>
    )
}

export default Intro;