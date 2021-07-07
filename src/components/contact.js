import React, {Component} from 'react';
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
                <div className ="contact-body">
                    <div className = "contact-content">
                        <h1>Contact Info</h1>
                        <hr/>
                        <h2>Jethro Zhou</h2>     
                        <img
                            src ="https://i.imgur.com/049iJWm.jpg"
                            alt ="avatar"
                            className ="contact-img"
                        /> 
                        <h2>Phone: (765) 409-6163</h2>
                        <h2>Email: jethro.zhou@LIVE.com</h2>
                    </div>
                </div>
            
        )
    }
}
export default Contact;