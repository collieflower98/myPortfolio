import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
            this.state = {activeTab: 0};
        
    }
    toggleCategories(){

    if(this.state.activeTab === 0){
        return(
            <div className = "projects-grid">
            <Card shadow ={5} style = {{midWidth: '450', margin: 'auto'}}>
                <CardTitle style ={{color: '#fff', height : '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center/cover'}}>College Capital</CardTitle>
                <CardText style={{height:'75px'}}>
                    Project for CS307 at Purdue University, webapp where users can create an account, add finanical accounts, memos, and post to the user community forum.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/collieflower98/CollegeCapital" rel="noopener noreferrer" target ="_blank" colored>Github</Button>
                    <Button href="https://collegecap.org" rel="noopener noreferrer" target ="_blank" colored>Link</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name ="share"/>
                </CardMenu>
            </Card>
            <Card shadow ={5} style = {{midWidth: '450', margin: 'auto'}}>
            <CardTitle style ={{color: '#fff', height : '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center/cover'}}>My Portfolio</CardTitle>
            <CardText style={{height:'75px'}}>
                Website for my portfolio of my projects, as well as my resume, contact information, and information about myself.
            </CardText >
            <CardActions border>
                <Button href="https://github.com/collieflower98/myPortfolio" rel="noopener noreferrer" target ="_blank" colored>Github</Button>
                <Button href="https://jethrozhou-portfolio.firebaseapp.com" rel="noopener noreferrer" target ="_blank" colored>Link</Button>
            </CardActions>
            <CardMenu style ={{color: '#fff'}}>
                <IconButton name ="share"/>
            </CardMenu>
        </Card>
        </div>
        )
    }else if(this.state.activeTab ===1){
        return(
        <div className ="projects-grid">
            <Card shadow ={5} style = {{midWidth: '450', margin: 'auto'}}>
                <CardTitle style ={{color: '#fff', height : '176px', background: 'url(https://cdn1.iconfinder.com/data/icons/system-black-circles/512/java-512.png) center/cover'}}>Wolf Game</CardTitle>
                <CardText style={{height:'75px'}}>
                    Dungeon crawler style game I made for fun in Java.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/collieflower98/wolfGame" rel="noopener noreferrer" target ="_blank" colored>Github</Button>
                    <Button href="https://www.youtube.com/watch?v=DSErXyyBqtk" rel="noopener noreferrer" target ="_blank" colored>Gameplay</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name ="share"/>
                </CardMenu>
            </Card>
        </div>
        )
    }else if(this.state.activeTab ===2){
        return(
            <div className ="projects-grid">
            <Card shadow ={5} style = {{midWidth: '450', margin: 'auto'}}>
                <CardTitle style ={{color: '#fff', height : '176px', background: 'url(https://www.kindpng.com/picc/m/493-4938106_facebook-clipart-css-graphics-hd-png-download.png) center/cover'}}>Photo and Video Collage</CardTitle>
                <CardText style={{height:'75px'}}>
                    Photo and Video Collage of our friend groups activities together, made it as a friends birthday gift.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/collieflower98/HappyBirthdayLaurel" rel="noopener noreferrer" target ="_blank" colored>Github</Button>
                    <Button href="https://collieflower98.github.io/HappyBirthdayLaurel/" rel="noopener noreferrer" target ="_blank" colored>Link</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name ="share"/>
                </CardMenu>
            </Card>
        </div>
        )
    }
    }
    render(){
        return(
                <div className = "category-tabs">
                    <Tabs activeTab= {this.state.activeTab} onChange = {(tabId)=> this.setState({activeTab: tabId})} ripple>
                        <Tab>React</Tab>
                        <Tab>Java</Tab>
                        <Tab>HTML/CSS</Tab>
                    </Tabs>
                    
                        <Grid >
                            <Cell col={12}>
                                <div className ="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>

                        
                    
                </div>
                
            
        )
    }
}
export default Project;