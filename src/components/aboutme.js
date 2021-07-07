import React, {Component} from 'react'


class About extends Component{
    render(){
        return(
            
            <div className ="about-body">
            <div className ="about-content">
                
                <h1>About Me</h1>
                    <hr/>
                    <p style ={{width: '70%', margin: 'auto', paddingTop: '1em'}}>Hi! My name's Jethro Zhou, I'm a 
                    full stack web developer currently working for Caterpillar.   I made this website to practice React.js, HTML/CSS, and to store a portfolio of my projects</p>
                    <p style ={{width: '70%', margin: 'auto', paddingTop: '1em'}}>You're probably wondering what's 
                    up with the collies everywhere on the website, well when I first began to attend purdue university my parents had
                    just left for a long business trip to China, and I was left at home to housesit while they were 
                    away and I got rather lonely.  So I drove to the local Humane Society and adopeted a collie puppy
                    and it really ignited my love for dogs and specifically collies! My collie's name is Caesar, 
                    here's a picture of him.</p>



                    <img
                    src ="https://i.imgur.com/8DFRw50.png"
                    alt ="avatar"
                    style={{height: '350px', paddingTop: '2em'}}
                    />



                        <h2>Current Employer</h2>
                        <h4>-Caterpillar</h4>
                         
                         <p>-HIS 2.0 Development Team Member</p>
                         <p>-Migrating legacy HIS application from on premise database to azure cloud</p>
                         <p>-Develop with Node.js, Typescript, and Java for Backend</p>
                         <p>-Develop with Vue.js, Typescript, HTML/CSS for Frontend</p>

                        <h2>Where I'm from</h2>
                         
                         <p>-I was born in Stony Brook, New York</p>
                         <p>-Lived in West Lafayette since I was 2</p>
                        
                         <h2>Academics</h2>
                         
                         <p>-Alumni of Purdue University West Lafayette (main campus), Class of 2021.</p>
                         <p>-Bachelors Degree in Computer Science with concentration in Software Engineering, </p>
                         <p>-Minor in Psychology</p>
                         
                         <h2>Hobbies</h2>
                         
                         <p>-Making games, webapps and websites</p>
                         <p>-Traveling</p>
                         <p>-PC and Console Games</p>
                         <p>-Tennis and Ping Pong</p>
                         
                    
                    
            </div>
            
        </div>
            
        )
    }
}
export default About;