import React, {Component} from 'react';
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
                <div className ="contact-body">
                    <Grid className = "contact-grid">
                        <Cell col={6}>
                            <h2>Jethro Zhou</h2>
                            <img
                            src ="https://i.pinimg.com/originals/89/b1/30/89b13055a93a09796e8d4b99e9bc08d8.png"
                            alt ="avatar"
                            style={{height: '250px'}}
                            />
                            
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>

                            <div className ="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-phone-square" aria-hideen="true"/>
                                        (765) 409-6163</ListItemContent>
                                 </ListItem>
                                 <ListItem>
                                    <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-envelope" aria-hideen="true" />
                                        zhou661@purdue.edu</ListItemContent>
                                 </ListItem>
                                 
                            </List>
                            </div>

                            
                        </Cell>
                    </Grid>
                </div>
            
        )
    }
}
export default Contact;