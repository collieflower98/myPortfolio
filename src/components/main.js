import React from 'react';
import Homepage from './homepage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';

import {Switch, Route} from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path ="/" component = {Homepage}/>
        <Route path ="/aboutme" component ={AboutMe}/>
        <Route path ="/contact" component ={Contact}/>
        <Route path ="/projects" component ={Projects}/>
        
    </Switch>
)
export default Main;