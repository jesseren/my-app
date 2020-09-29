import React from 'react';

function Projects() {
    return (
        <section className = "Projects">
            <a name = "Projects"></a>
            <h1><b>My Projects</b></h1>
            <div class = "videos">
                <div class = "one">
                    <h2>Java Space Invaders</h2>
                    <iframe type="text/html" title = "Java Space Invaders" width="560" height="315" src="https://www.youtube.com/embed/ZdFEAYNoAao" frameborder="0" allowfullscreen></iframe>
                    <p>
                        A game I programmed in Java based off of the classic arcade game Space Invaders. The goal is to 
                        score as many points as possible by defeating enemy aliens while at the same time avoiding death
                        by dodging enemies and bullets. <br /><br />
                        <u><a href = "https://github.com/jesseren/SpaceInvaders" target="_blank">See in GitHub</a></u>
                    </p>
                </div>
                <div class = "two">
                    <h2>Java Bullet Hell</h2>
                    <iframe type="text/html" title = "Java Bullet Hell" width="560" height="315" src="https://www.youtube.com/embed/OuRG9jukNe4" frameborder="0" allowfullscreen></iframe>
                    <p>
                        A simple bullet hell game that I programmed using Java. The goal is to dodge enemy
                        projectiles for as long as possible, as the longer you survive, the higher your final
                        score. I was inspired to create this game after playing the hit indie game Undertale.
                        <br /><br /> <u><a href = "https://github.com/jesseren/BulletHell" target="_blank">See in GitHub</a></u>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects;