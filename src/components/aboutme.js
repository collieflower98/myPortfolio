import React, {Component} from 'react'
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';
class About extends Component{
    render(){
        return(
            
            <div className ="about-body">
            <Grid className = "about-grid">
                <Cell col={6}>
                <h2>About Me</h2>
                    <hr/>
                    <p style ={{width: '70%', margin: 'auto', paddingTop: '1em'}}>Hi! My name's Jethro Zhou, I'm a 
                    junior in computer science at Purdue University, I made this website to practice React.js, HTML
                    , and CSS, and to store a portfolio of my projects</p>
                    <p style ={{width: '70%', margin: 'auto', paddingTop: '1em'}}>You're probably wondering what's 
                    up with the collies everywhere on the website, well when I first came to purdue my parents had
                    just left for a long business trip to China, and I was left at home to housesit while they were 
                    away and I got rather lonely.  So I drove to the local Humane Society and adopeted a collie puppy
                    and it really ignited my love for dogs and specifically collies! My collie's name is Caesar, 
                    here's a picture of him.</p>
                    <img
                    src ="https://i.imgur.com/8DFRw50.png"
                    alt ="avatar"
                    style={{height: '350px', paddingTop: '2em'}}
                    />
                </Cell>
                
                <Cell col={6}>

                    <div className ="about-list">
                    <List>
                    <ListItem>
                            <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className = "fa fa-globe" aria-hideen="true"/>
                                Where I'm from</ListItemContent>
                         </ListItem>
                         <p>-I was born in Stony Brook New York</p>
                         <p>-Lived in West Lafayette since I was 2</p>
                        <ListItem>
                            <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className = "fa fa-graduation-cap" aria-hideen="true"/>
                                Academics</ListItemContent>
                         </ListItem>
                         <p>-Currently Enrolled in Purdue Computer Science, Class of 2021.</p>
                         <p>-Pursing a Triple Concentration in Software Engineering, </p>
                         <p>Machine Intelligence, and Security</p>
                         <p>-Pursuing Minors in Mathematics and Psychology</p>
                         <ListItem>
                            <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className = "fa fa-desktop" aria-hideen="true" />
                                Hobbies</ListItemContent>
                         </ListItem>
                         <p>-Making webapps and websites</p>
                         <p>-Making games in Java</p>
                         <p>-PC and Console Games</p>
                         <p>-Tennis and Ping Pong</p>
                         
                    </List>
                    </div>
                </Cell>
            </Grid>
        </div>
            
        )
    }
}
export default About;